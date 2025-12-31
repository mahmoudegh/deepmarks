import { authStore } from "@/features/onboarding/state/auth.state";
import { useSnapshot } from "valtio";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { loadFacebookSDK } from "@/lib/loadFacebookSDK";
// import { useNavigate } from "react-router-dom";

import { questionsStore } from "@/features/onboarding/state/questions.state.ts";

import { chatStore } from "@/features/results/state/chat.state.ts";

interface FacebookUserInfo {
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  picture?: {
    data: { url: string };
  };
}

// Apple
// import AppleLogin from "react-apple-signin-auth";

export const useLogin = () => {
  // const navigate = useNavigate();
  const auth = useSnapshot(authStore.store);
  const [loading, setLoading] = useState(false);

  // --------------------------
  // GOOGLE LOGIN
  // --------------------------
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const profile = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      ).then((res) => res.json());

      // console.log("profile: ", profile);

      // "sub": "117202255440320998015",
      // "name": "Mahmoud Galal",
      // "given_name": "Mahmoud",
      // "family_name": "Galal",
      // "picture": "https://lh3.googleusercontent.com/a/ACg8ocKjO5kJNZ1kUBRHomJOnUa0IN4ug7AkASLl-gi18qQTavdu1VkE\u003ds96-c",
      // "email": "mahmoudegh8@gmail.com",
      // "email_verified": true

      authStore.store.isLoggedIn = true;
      authStore.store.user = {
        name: profile.name,
        first_name: profile.given_name,
        last_name: profile.family_name,
        email: profile.email,
        avatar: profile.picture,
        provider: "google",
      };
    },
  });

  // --------------------------
  // FACEBOOK LOGIN
  // --------------------------

  const loginWithFacebook = async (): Promise<FacebookUserInfo | null> => {
    setLoading(true);

    await loadFacebookSDK(import.meta.env.VITE_FACEBOOK_APP_ID);

    return new Promise((resolve) => {
      window.FB.login(
        (response) => {
          if (response.authResponse) {
            const { accessToken } = response.authResponse;

            const fields = [
              "id",
              "name",
              "first_name",
              "last_name",
              "email",
              "picture.width(400).height(400)",
              "gender",
              "birthday",
              "hometown",
              "location",
              "link",
              "locale",
              "timezone",
              "updated_time",
              "verified",
            ].join(",");

            window.FB.api(
              "/me",
              { fields, access_token: accessToken },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (profile: any) => {
                authStore.store.isLoggedIn = true;
                authStore.store.user = {
                  name: profile.name,
                  first_name: profile.first_name,
                  last_name: profile.last_name,
                  email: profile.email,
                  avatar: profile.picture?.data?.url ?? null,
                  provider: "facebook",
                };

                resolve(profile);
                setLoading(false);
              }
            );
          } else {
            resolve(null);
            setLoading(false);
          }
        },
        { scope: "public_profile,email" }
      );
    });
  };

  // --------------------------
  // LOGOUT
  // --------------------------
  const logout = () => {
    // Clear your auth store
    authStore.store.user = null;
    authStore.store.isLoggedIn = false;
    chatStore.store.oldChat = [];
    chatStore.store.chat = [];
    questionsStore.store.activeQuestion = 1;
    questionsStore.store.questions.forEach((q) => {
      q.answer.text = "";
      q.answer.files = [];
      q.answer.suggestions = [];
    });
    // navigate("/onboarding");
    setTimeout(() => {
      window.location.href = "https://golden-calendar-856822.framer.app/";
    }, 500);

    // Optional: clear tokens if stored
    // localStorage.removeItem("access_token");
    // sessionStorage.removeItem("google_user");

    // Optional: sign out from Google if using gapi or Google Identity Services
    // if (window.google?.accounts?.id) {
    //   window.google.accounts.id.disableAutoSelect();
    // }
  };

  return {
    auth,
    loading,
    googleLogin,
    logout,
    loginWithFacebook,
    // handleAppleLogin,
  };
};
