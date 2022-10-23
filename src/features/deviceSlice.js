import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  totalDevice: 0,
  totalPages: 1,
  currentPage: 1,
  device: [],
  isLoadingAllDevice: false,
};

export const getAllDevice = createAsyncThunk(
  "https://api.plc.belanj.id/device/all",
  async (queryString, thunkAPI) => {
    let url = `${process.env.REACT_APP_BASE_URL}https://api.plc.belanj.id/device/all${queryString}`;

    try {
      const resp = await axios.get(url);

      const data = resp.data;
      // console.log(data);

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.dismiss();
      toast.error(message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllDevice.pending]: (state) => {
      state.isLoadingAllDevice = true;
    },
    [getAllDevice.fulfilled]: (state, { payload }) => {
      const { totalDevice, totalPages, currentPage, device } = payload;
      state.totalPages = totalPages;
      state.totalDevice = totalDevice;
      state.currentPage = currentPage;
      state.device = device;
      state.isLoadingAllDevice = false;
    },
    [getAllDevice.rejected]: (state, action) => {
      state.isLoadingAllDevice = false;
    },
  },
});

export default deviceSlice.reducer;
