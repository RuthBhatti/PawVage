import {createSlice} from '@reduxjs/toolkit';

const MyUserCArt = createSlice({
  name: 'counter',
  initialState: {
    login: false,
    form1: false,
    form2: false,
    form3: false,
    form4: false,
  },
  reducers: {
    userauth: state => {
      state.login = true;
    },
    handleForm1: state => {
      state.form1 = true;
    },
    handleForm2: state => {
      state.form2 = true;
    },
    handleForm3: state => {
      state.form3 = true;
    },
    handleForm4: state => {
      state.form4 = true;
    },
    resetall: state => {
      state.form1 = false;
      state.form2 = false;
      state.form3 = false;
      state.form4 = false;
    },
    logout: state => {
      state.login = false;
      state.form1 = false;
      state.form2 = false;
      state.form3 = false;
      state.form4 = false;
    },
  },
});

export const userAction = MyUserCArt.actions;

export default MyUserCArt;
