import {createSlice} from '@reduxjs/toolkit';
 
const registerSlice= createSlice({
    name: "register",
    initialState:{
        regDetailsArray:[],
        isRegistered:false,
    },
    reducers:{
        addToRegister(state,action){
        const newRegDetail = action.payload;
        const exisitingDetails = state.regDetailsArray.map((details)=>details.name == newRegDetail.name);
         
        if(exisitingDetails){
            state.isRegistered = true;
        }
        else{
            state.regDetailsArray.push({
                fname:newRegDetail.fname,
                lname:newRegDetail.lname,
                email:newRegDetail.emai,
                pass:newRegDetail.pass,
            })
console.log(action.payload);
        }

        },

        setIsRegistered(state){
            state.isRegistered = true;

        },
     },
});
export const registerActions= registerSlice.actions;
export default registerSlice;