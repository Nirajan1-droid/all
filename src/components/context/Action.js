export  const LoginStart = (userCredentials) =>({
    type :"LOGIN_START"
});

export const LoginSuccess = (user) =>({
type : "LOGIN_SUCCESS",
payload : user ,
});

export const LoginFailure = ()=>({
    type : "LOGIN_FAILURE",
});

export const Logout = ()=>({
    type : "Logout",
});
export  const UpdateStart = (userCredentials) =>({
    type :"Update_START"
});

export const UpdateSuccess = (user) =>({
type : "Update_SUCCESS",
payload : user ,
});
// export const setAmount = (newAmount) => ({
//     type: "SET_AMOUNT",
//     payload: newAmount,
//   });

// export const updateAmount = (newAmount) => ({
    
//       type: 'UPDATE_AMOUNT',
//       payload: newAmount
//     });
export const UpdateFailure = ()=>({
    type : "Update_FAILURE",
});