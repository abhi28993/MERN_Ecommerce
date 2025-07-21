import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login", // <- this is the "action type prefix"
  async (info) => {
    console.log(info,"info")
    try {
      const { data } = await api.post("/admin/login", info, {
        withCredentials: true,
      });
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth", // <- this is the "slice name".MUST match the thunk prefix like "auth/xxx" . 
                 // Yes, changing name: "auth" to "auths" does impact your thunk actions. The action type prefix must align with the slice name if you want your extraReducers to respond correctly.
  initialState: {
    successMessage: "",
    errorMessage: "",
    loading: false,
    userInfo: "",
  },
  reducers: {}, // we define actions here which will be used in the components
  extraReducers: () => {},
});

export default authReducer.reducer;
