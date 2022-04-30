import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  loginError: string;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNum: string;
    nickName: string;
    password: string
  };
  isLoggedIn: boolean;
}

const initialState = {
  loginError: "",
  isLoggedIn: false,
  data: {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNum: "",
    nickName: "",
    password: ""
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<UserState["data"]>) => {
      // make a request to the server with action.payload as requestData
      // if error state.loginError = error
      // if no error state.data = responseFromServer
      // state.isLoggedIn = true
        state.isLoggedIn = true
        state.data = action.payload
    },
  },
});

const { loginRequest } = userSlice.actions
export {loginRequest}

export default userSlice.reducer;
