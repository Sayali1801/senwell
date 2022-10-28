import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

import "../style/form.css";
import {useState} from 'react';

 function Form() {
  const[email,setEmail]=useState('');
  const[msg,setMsg]=useState('');
  const[error,setError]=useState('');

const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const checkEmail=(e)=>{
setEmail(e.target.value);
if(regex.test(email)===false){
  setError("Please Enter valid Email");
}
else{
  setError(' ');
  return true;
}
}


const submit=()=>{
  if(email !=''){
    setMsg("Thank You "+email)
  }
  else{
    setError("Please enter valid email address")
  }
  
  }

  return (
    <div className="container">
        <section>
      <div className="leftSide">
        <aside className="formContaint">
          <img
            src="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionist-5975961_960_720.jpg"
            alt="image"
          className="imgLeftSide"
          />
        </aside>
      </div>
      <section className="rightSide">
        <aside className="formContaint">
          <form>
            <h1>Welcome</h1>
            <p className='logInInfo'>Login to your account to continue</p> <br/>
            <input type="email" placeholder="info@admin.com" name="message" onChange={checkEmail} />
            <br /> <br />
            <p className="emailError">{error}</p>
            <p className="emailMsg">{msg}</p>
            <input
              type="password"
              placeholder=""
              name="password"
            />
            <br /> <br />
            <button type="submit" onClick={submit}>Log In </button> <br />
            <p>Don't have account ? Log in with</p> 
            <div className="logos">
            <BsFacebook/>
            <BsTwitter/>
            < BsLinkedin/>
            </div>
          </form>
        </aside>
      </section>
      </section>
    </div>
  );
}

export default Form;