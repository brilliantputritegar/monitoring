import { configureStore } from "@reduxjs/toolkit";

import deviceSlice from "./features/deviceSlice";

export const store = configureStore({
  reducer: {
    device: deviceSlice,
  },
});
