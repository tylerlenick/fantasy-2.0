import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Nav from '../Nav';

const SignIn = (props)=> {
	return (
		<div> 
            <Nav />
            <h1>SIGN IN</h1>
            <form>
                
                <TextField label="Email" value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
                <br />
                <TextField label="Password" name='password' type='password' value = {props.password} onChange = {props.handleChange} />
                <br />
                <button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
                <Link to = "/signup" ><Button>Sign Up</Button></Link>
            </form>
        </div>
	);
};

export default SignIn;