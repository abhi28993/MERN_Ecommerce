import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login", // <- this is the "action type prefix"
  async (info,{rejectWithValue,fulfillWithValue}) => {
    try {
      const { data } = await api.post("/admin/login", info, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', data.token)
      return data;
    } catch (error) {
      console.log(error.response.data)
      return rejectWithValue(error.response.data); 
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
  reducers: {
    messageClear:(state,_) =>{
      state.errorMessage = "";
    }
  }, // we define actions here which will be used in the components
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message   // message field we got from the backedn as we passed message from the backend
   
      })
  },
});
export const {messageClear} = authReducer.actions
export default authReducer.reducer;
