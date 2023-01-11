import React, { useState } from 'react'
import { Link ,useNavigate  } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import axios from 'axios';
import "./signInsignUp.scss";

const SignUpSide=(props)=> {
  const { className } = props;
  const [signUpData, setSignUpData] = useState({
    "username": "",
    "email": "",
    "password": ""
  });
  const [error,setError]=useState("");
  const [modal, setModal] = useState(false);
  let navigate = useNavigate();

  const handleChange = (evt) => {
    setError("");
    const value = evt.target.value;
    setSignUpData((prevState) => ({
      ...prevState,
      [evt.target.name]: value
    }));
  }
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(signUpData, "data");
    const url = `${process.env.REACT_APP_BASE_URL}/register`
    console.log(url, "url");
    axios.post(url, { signUpData }).then((res) => {
      if (res.data.status == "ok") {
        setSignUpData({
          "username": "",
          "email": "",
          "password": ""
        });
        setModal(true);
      } else if (res.data.status=="error") {
        setError('plase enter correct mail');
      }
    }).catch((err) => {
      console.log(err, "err");
      setError('something went wrong');
    })
  }
  const toggle = () => setModal(!modal);

  return (
    <div>
      <section>
        <div className="container">
          <div className="user signupBx">
            <div className="formBx">
              <div>
                <h2>Create an account</h2>
                <input type="text" name="username" placeholder="Username" value={signUpData.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email Address" value={signUpData.email} onChange={handleChange} />
                <p className='text-danger'>{error}</p>
                <input type="password" name="password" placeholder="Create Password" value={signUpData.password} onChange={handleChange} />
                {/* <input type="password" name="" placeholder="Confirm Password"  /> */}
                <input type="submit" name="" value="Sign Up" onClick={onSubmit} />
                <p className="signup">
                  Already have an account ?
                  <Link to="/SignIn">Sign In.</Link>
                </p>
              </div>
            </div>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
          </div>
        </div>
      </section>
      
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>WELCOME</ModalHeader>
        <ModalBody>
          HI YOUR SUCCESSFULLY CREATED ACCOUNT 
          PLEASE LOGIN ....
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{
            setModal(false);
             navigate('/SignIn');
          }}>
            LOGIN
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            CANCEL
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default SignUpSide;