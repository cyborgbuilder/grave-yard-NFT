import React from 'react'
import './Home.css'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { getByPlaceholderText } from '@testing-library/react';
import Slide from 'react-reveal/Slide';

import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function App() {

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
    <div className="containerHome">
        <div className='bannerHome'>
        {/* <img src='/images/home.png' /> */}
        </div>
        <div className='cloudHome'>
            <img src='/images/cloud.png' />
        </div>
        <div className='logoHome'>
            <Slide top>
            <img src='/images/logo.png'  />
            </Slide>
        </div>
        <div className='headerHome'>
            <h1>JOIN OUR WHITELIST</h1>
        </div>

        <div className='socialHome'>
          <a href='https://discord.gg/arSmPNwjZH'><FaDiscord style={{margin: '0 5px'}} /></a>
          <a href='https://twitter.com/thelostbitcoins'><FaTwitter style={{margin: '0 5px'}}/></a>
          <a href='https://www.instagram.com/thelostbitcoins/'><FaInstagram style={{margin: '0 5px'}}/></a>

        </div>


        <div className='passwordHome'>
        <div
      style={{
        marginLeft: "30%",
      }}
    >
      
      <InputLabel htmlFor="standard-adornment-password">
      </InputLabel>
      <Input placeholder='Password' style={{background: '#131212e7', padding: '10px', padding: '10px', borderRadius: '5px', color: 'white', letterSpacing: '2.1px', fontFamily: 'Creepster, cursive', width: '250px', fontSize: '20px', transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s'}}
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end" >
            <IconButton style={{color: 'white'}}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
        </div>
    </div>
  );
}

export default App;
