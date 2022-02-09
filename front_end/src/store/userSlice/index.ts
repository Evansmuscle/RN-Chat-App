import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialUserState = {
  userName: '',
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
});

// export {} = userSlice.actions
const userReducer = userSlice.reducer;

export default userReducer;
