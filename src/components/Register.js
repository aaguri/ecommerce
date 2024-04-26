import { useState } from 'react';
import { registerActions } from '../store/register-slice';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';

function Register(){

    const [regformDetails,setregformDetails] =useState({
        fname:'',
        lname:'',
        email:'',
        pass:'',
     });
     const {fname,lname,email,pass} = regformDetails;

     const onChangeVal =(e)=>{
        setregformDetails({...regformDetails,[e.target.name]:e.target.value});
     };

     const dispatch = useDispatch();

   const handleSubmit=(e)=>{
    dispatch(registerActions.addToRegister(regformDetails));
   };

    const setIsRegistered = ()=>{
        dispatch(registerActions.setIsRegistered())
    };
   
    return(
        <div className="register">
            <div className="childRegister">
                <div className="aside">
                    <h1>Explore By Creating Your Own Account</h1>
                    <img src="https://ipfs.io/ipfs/bafybeihl5zm7ee3ir257q3xgqllcn5yomooqg4ejxrnq4hvgyhg574vuky" alt="logo"/>
                    </div>
                    <div className="registerDtails">
                        <h2>CREAT ACCOUNT</h2>
                        <br></br>
                        
                        {/* <form className="registerForm" onSubmit={handleSubmit}> */}
                            <span>
                            <input type="text" name="fname" value={fname} onChange={(e)=>onChangeVal(e)} placeholder="First Name" required></input>
                            <input type="text" name="lname" value={lname} onChange={(e)=>onChangeVal(e)} placeholder="Last Name" required></input>
                            </span>
                           <input className="email" type="email" name="email" value={email} onChange={(e)=>onChangeVal(e)} placeholder="Email Address" required></input>
                           <input className="password" type="password" name="pass" value={pass} onChange={(e)=>onChangeVal(e)} placeholder="Password" required></input>
                           <button className="createAccountBtn" onClick={setIsRegistered}>CREAT ACCOUNT</button>

                           <button className="createAccountBtn" onClick={handleSubmit}>CREAT ACCOUNT</button>
                        <p>Already have an Account? Login </p>
                        
                            <span><hr className="lines"></hr>or<hr className="lines"></hr></span>
                            <span><input placeholder="sign in with facebook"/><input placeholder="sign in with facebook"/></span>
                        {/* </form> */}

                    </div>
                    <div>
                    </div>

            </div>

        </div>
    )
       
    
}
export default Register;
