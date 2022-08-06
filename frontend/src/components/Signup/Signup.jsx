import React, { useState } from 'react'
import './Signup.css'
const Signup = () => {
    const [user, setuser] = useState({
        fullname:'xgydafa',
        username:"xyz",
        email:"xyz@gmail.com",
        password:'xyzxyz',
        confirmpassword:'xyzxyz',
        phone:'53445455'
    })
    function handleChange(e) {
        setuser(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
    }
  return (
    <div className="container">
        <div className="heading">Registration</div>
        <form onSubmit={handleSubmit}>
            <div className="card-details">
                <div className="card-box">
                    <span className="details">Full Name</span>
                    <input type="text" onChange={handleChange} name='fullname' value={user.fullname} placeholder="Enter your Name"/>
                </div>
                <div className="card-box">
                    <span className="details">Username</span>
                    <input type="text" onChange={handleChange} name='username' value={user.username} placeholder="Enter your Username"/>
                </div>
                <div className="card-box">
                    <span className="details">Email</span>
                    <input type="email" onChange={handleChange} name='email' value={user.email} placeholder="Enter your email"/>
                </div>
                <div className="card-box">
                    <span className="details">Phone Number</span>
                    <input type="phone" onChange={handleChange} name='phone' value={user.phone} placeholder="phone number"/>
                </div>
                <div className="card-box">
                    <span className="details">Password</span>
                    <input type="password" onChange={handleChange} name='password' value={user.confirmpassword} placeholder="Enter your password"/>
                </div>
                <div className="card-box">
                    <span className="details">Confirm password</span>
                    <input type="password" onChange={handleChange} name='confirmpassword' value={user.confirmpassword} placeholder="Confirm password"/>
                </div>
            </div>
            <div className="circal-form">
                <span className="circal-title">Gender</span>
                <div className="category">
                    <input type="radio" name="gender"/>Male
                    <input type="radio" name="gender"/>Female
                    <input type="radio" name="gender"/>Other
                </div>
            </div>
            <div className="button">
                <input type="submit" value="register"/>
            </div>
        </form>
    </div>
  )
}

export default Signup;