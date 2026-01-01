import { persist } from "valtio-persist";
import { IndexedDBStrategy } from "valtio-persist/indexed-db";

export type AuthUser = {
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: string;
  provider?: "google" | "facebook" | "apple";
};

export type AuthState = {
  isLoggedIn: boolean;
  user: AuthUser | null;
  loginMode: "direct" | "skip" | "";
};

const initialAuthState: AuthState = {
  isLoggedIn: true,
  user: null,
  loginMode: "",
};

export const authStore = await persist<AuthState>(
  initialAuthState,
  "auth", // storage key
  {
    storageStrategy: IndexedDBStrategy,
  }
);
