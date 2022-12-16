import {
  createSlice,
  PayloadAction,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

interface initialStateType {
  loading: boolean;
  data: dataType[];
  loginData: loginDataType;
  authenticateUser: boolean;
}

interface dataType {
  // id:number,
  name: string;
  email: string;
  password: string;
}

interface loginDataType {
  email?: string;
  password?: string;
}

const initialState: initialStateType = {
  loading: true,
  data: [],
  loginData: { email: "", password: "" },
  authenticateUser: false,
};

const Slice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userInput: (state, action: PayloadAction<dataType>) => {
      state.loading = false;
      state.data.push(action.payload);
    },
    checkLoginUser: (state, action: PayloadAction<any>) => {
      state.loginData = action.payload;
      state.data.filter((item: dataType) => {
        if (item.email == state.loginData.email && item.password == state.loginData.password ) {
          state.authenticateUser = true;
        }
      });
    },
  },
});

export const { userInput, checkLoginUser } = Slice.actions;
export default Slice.reducer;
