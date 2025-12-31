import { persist } from "valtio-persist";
import { IndexedDBStrategy } from "valtio-persist/indexed-db";
import type { SerializableFile } from "@/models";

export type AccountState = {
  image: SerializableFile | null;
};

const initialState: AccountState = {
  image: null,
};

export const accountStore = await persist<AccountState>(
  initialState,
  "profile_image",
  {
    storageStrategy: IndexedDBStrategy,
  }
);
