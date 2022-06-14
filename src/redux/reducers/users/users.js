import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users:[
        {
            email:"harshil@gmail.com",
            password:"123456789",
            quiz:[
              {
                name:"HTML",
                score:50,
              },
              {
                name:"CSS",
                score:60,
              },
              {
                name:"JavaScript",
                score:70,
              },
            ]
        },
        {
            email:"harshildave@gmail.com",
            password:123456789,
            quiz:[
              {
                name:"HTML",
                score:40,
              },
              {
                name:"CSS",
                score:100,
              },
              {
                name:"JavaScript",
                score:80,
              },
            ]
            
        },
        {
            email:"capgemini@gmail.com",
            password:"123456789",
            quiz:[
              {
                name:"HTML",
                score:90,
              },
              {
                name:"CSS",
                score:90,
              },
              {
                name:"JavaScript",
                score:90,
              },
            ]
        },
    ],
    currentUser:{
        userInfo:null,
        isLoggedIn:false
    },
  },
  reducers: {
    userLogin: (state,action) => {
      console.log("state=",state);
      console.log("action=",action)
      state.currentUser.userInfo=action.payload[0];
      state.currentUser.isLoggedIn=true;
    },
    changeScore: (state,action) => {
      console.log("state=",state);
      console.log("action=",action)
      state.currentUser.userInfo=action.payload.currentUser.userInfo;
      state.users=action.payload.users
    },
    userLogout: (state,action) => {
      console.log("state=",state);
      console.log("action=",action)
      state.currentUser.userInfo = null;
      state.currentUser.isLoggedIn=false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLogin,changeScore,userLogout } = userSlice.actions

export default userSlice.reducer