import './Form.css'
import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { getByPlaceholderText } from '@testing-library/react';
import Slide from 'react-reveal/Slide';

function Form() {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

  return (
    <div className="containerForm" >

        {/* <div className='bannerForm'>
        <img src='/images/form.png' />     
        </div>    */}

        <div className='btnConnectWallet'>
                <button>CONNECT WALLET</button>
            </div>

        <div className='fourem' >
            <div className='wrapForm'>
                <input placeholder='First Name' type='text'  />
                <input type='text' placeholder='Last Name' />
                <input type='text' placeholder='User Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='password'/>

                <button className='regBet'>Register</button>

         
                
            </div>

         
        </div>


    </div>
  );
}

export default Form;
