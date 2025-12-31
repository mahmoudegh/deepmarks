import styles from "./Login.module.css";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";
import { authStore } from "@/features/onboarding/state/auth.state.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import AppleLogin from "react-apple-signin-auth";

import { useLogin } from "@/features/onboarding/hooks/useLogin";
import { useEffect, useState } from "react";

interface LoginProps {
  isDirectLogin: boolean;
  isSkipToLogin: boolean;
}

const Login = ({ isDirectLogin, isSkipToLogin }: LoginProps) => {
  const snapshot = useSnapshot(authStore.store);
  const navigate = useNavigate();
  const {
    googleLogin,
    loginWithFacebook,
    // handleAppleLogin,
    loading,
  } = useLogin();

  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      setError("Please enter a valid Gmail address");
      return;
    }
    googleLogin();
  };

  useEffect(() => {
    if (!snapshot.isLoggedIn) return;

    if (authStore.store.loginMode === "direct") {
      setOpen(false);
      return;
    }
    if (authStore.store.loginMode === "skip") {
      setOpen(false);
      navigate("/results");
    }
  }, [snapshot.isLoggedIn, authStore.store.loginMode]);

  const handleClick = async () => {
    const user = await loginWithFacebook();
    console.log("Facebook User:", user);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isDirectLogin ? (
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              authStore.store.loginMode = "direct";
              setOpen(true);
            }}
            className={`${styles["login__button"]} text-primary`}
          >
            <span>Sign up / Login to account</span>
            <img src={assets.login} alt="login-icon" />
          </Button>
        </DialogTrigger>
      ) : (
        <>
          {!snapshot.isLoggedIn ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => {
                      authStore.store.loginMode = "skip";
                      setOpen(true);
                    }}
                    size="sm"
                    className={styles["answer__skip-to-result"]}
                  >
                    Skip to results
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>

              <TooltipContent className="bg-primary text-white max-w-36 rounded-lg">
                <h6 className="text-xs font-bold mb-1">Skip to results</h6>
                <p className="text-xs font-normal">
                  You can skip the next questions if you want quick results,
                  remember, the more you answer the more tailored names you get
                </p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              onClick={() => navigate("/results")}
              size="sm"
              className={styles["answer__skip-to-result"]}
            >
              Skip to results
            </Button>
          )}
        </>
      )}

      <DialogContent
        className={`${styles["login__modal"]} ${
          isSkipToLogin
            ? "lg:flex-row flex-col max-w-[408px] lg:min-w-[900px]"
            : "flex-col  max-w-[408px]"
        }`}
      >
        {isSkipToLogin && (
          <img
            className="hidden lg:block w-[60%] h-[460px]"
            src={assets.login_image_lg}
            alt="login_image_lg"
          />
        )}

        <div
          className={`${
            isSkipToLogin && "lg:w-[40%]"
          } max-w-[350px] flex flex-col gap-6`}
        >
          {isDirectLogin && (
            <DialogHeader className={styles["login__modal-header"]}>
              <DialogTitle className={styles["login__modal-title"]}>
                Log in or sign up
              </DialogTitle>
              <DialogDescription className={styles["login__modal-desc"]}>
                Login or create a new account
              </DialogDescription>
            </DialogHeader>
          )}
          {isSkipToLogin && (
            <DialogHeader className={styles["login__modal-header"]}>
              <img className="lg:hidden" src={assets.login_image} alt="" />
              <DialogTitle className={styles["login__modal-title"]}>
                Your results are ready
              </DialogTitle>
              <DialogDescription className={styles["login__modal-desc"]}>
                Login or create a new account
              </DialogDescription>

              <div className={styles["pills"]}>
                <span className="text-primary">Tailored brand names</span>
                <span className="text-primary">AI Support</span>
                <span className="text-primary">
                  Professional branding service
                </span>
              </div>
            </DialogHeader>
          )}
          {/* <form className={styles["login__modal-form"]}>
            <Input type="email" placeholder="Enter your email" />
            <Button className="bg-primary" type="submit">
              Get started
            </Button>
          </form> */}
          <form
            className={styles["login__modal-form"]}
            onSubmit={handleEmailSubmit}
          >
            <Input
              type="email"
              placeholder="Enter your Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
                {error}
              </p>
            )}

            <Button className="bg-primary" type="submit">
              Get started
            </Button>
          </form>
          <div className={styles["divider"]}>
            <div className={styles["line"]}></div>
            <div className={styles["or"]}>OR</div>
            <div className={styles["line"]}></div>
          </div>
          {/* <div className={styles["fast-login"]}>
          <Button>
            <img src={assets.google} alt="google" />
            Continue with Google
          </Button>
          <Button>
            <img src={assets.facebook} alt="facebook" />
            Continue with Facebook
          </Button>
          <Button>
            <img src={assets.app} alt="app store" />
            Continue with Apple
          </Button>
        </div> */}
          <div className={styles["fast-login"]}>
            {/* GOOGLE */}
            <Button onClick={() => googleLogin()}>
              <img src={assets.google} alt="google" />
              Continue with Google
            </Button>

            {/* FACEBOOK */}
            <Button disabled={loading} onClick={handleClick}>
              <img src={assets.facebook} alt="facebook" />
              Continue with Facebook
            </Button>

            {/* APPLE */}
            {/* <AppleLogin
            clientId={import.meta.env.VITE_APPLE_CLIENT_ID}
            redirectURI={import.meta.env.VITE_APPLE_REDIRECT_URI}
            onSuccess={handleAppleLogin}
            onError={(e) => console.log("Apple login failed", e)}
            render={(props) => (
              <Button onClick={props.onClick}>
                <img src={assets.app} alt="apple" />
                Continue with Apple
              </Button>
            )}
          /> */}
            <Button>
              <img src={assets.app} alt="app store" />
              Continue with Apple
            </Button>
          </div>
          {/* <DialogFooter className={styles["login__modal-footer"]}>
          <span>Already have an account?</span>{" "}
          <span className="text-primary">Log in</span>
        </DialogFooter> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
