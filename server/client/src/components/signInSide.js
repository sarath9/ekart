import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./signInsignUp.scss";

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    "username":"",
    "password":""
  });


  const handleChange = (evt)=>{
    const value = evt.target.value;
    setLoginData((prevState)=>({
      ...prevState,
      [evt.target.name]: value
    }));
  }
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(loginData, "data");
    axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { loginData }).then((res) => {
      
      console.log(res, "res");
    }).catch((err) => {
      console.log(err, "err");
    })
  }

  return (
    <div>
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
            <div className="formBx">
              <div>
                <h2>Sign In</h2>
                <input type="text" name="username" placeholder="email" vlaue={loginData.username} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange}/>
                <input type="submit" name="" value="Login" onClick={onSubmit}/>
                <p className="signup">
                  Don't have an account ?
                  <Link to="/SignUp">Sign Up.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
