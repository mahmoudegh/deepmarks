export function loadFacebookSDK(appId: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById("facebook-jssdk")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.onload = () => {
      window.FB.init({
        appId,
        cookie: true,
        xfbml: false,
        version: "v21.0",
      });
      resolve();
    };

    document.body.appendChild(script);
  });
}
