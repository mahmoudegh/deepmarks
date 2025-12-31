type FBAuthResponse = {
  accessToken: string;
  userID: string;
};

type FBLoginResponse = {
  authResponse: FBAuthResponse | null;
};

type FBUserProfile = {
  id: string;
  name: string;
  email?: string;
  picture?: {
    data: {
      url: string;
    };
  };
};

interface FBSDK {
  init(arg0: {
    appId: string;
    cookie: boolean;
    xfbml: boolean;
    version: string;
  }): unknown;
  login(
    callback: (response: FBLoginResponse) => void,
    options?: { scope: string }
  ): void;

  api(
    path: string,
    params: Record<string, unknown>, // ✅ fixed
    callback: (user: FBUserProfile) => void
  ): void;
}

declare global {
  interface Window {
    FB: FBSDK;
  }
}

export type { FBLoginResponse, FBUserProfile };
