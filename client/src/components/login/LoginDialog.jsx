import { useState, useContext } from 'react';


import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';



const Component = styled(Box)`
    height: 70vh;
	width: 90vh;
`;

const Image = styled(Box)`
     background: #30BB3C url(data:image/png;base64,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) center 85% no-repeat;
	 height: 80%;
	 width: 28%;
	 padding:45px 35px;
	 & >p, & > h5 {
		color: #FFFFFF;
		font-weight:600;
	 }
`
const Wrapper = styled(Box)`
    display: flex;
	flex-direction:column;
	padding:25px 35px;
	flex: 1;
	& > div, & > button, & > p{
		margin-top:20px;
	}
`;

const LoginButton = styled(Button)`
      text-transform: none;
	  background: #FB641B;
	  color: #fff;
	  height: 48px;
	  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    font-size:12px;
	color: #878787;
`;

const CreateAccount = styled(Typography)`
   
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;

const Error = styled(Typography)`
font-size: 10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`

const accountIntitialValues = {
	login: {
		view: 'login',
		heading: 'Login',
		subHeading: 'Get access to your Orders, Wishlist and Recommendations'
	},
	signup: {
		view: 'signup',
		heading: "Looks like you're new here!",
		subHeading: 'sign up with your mobile number to get started'
	}
}

const signupIntitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
	username: '',
	password: ''
}

const LoginDialog = ({ open, setOpen }) => {

	const [account, toggleAccount ] = useState(accountIntitialValues.login);
	const [signup, setSignup] = useState(signupIntitialValues);
	const [login, setLogin] = useState(loginInitialValues);
	const [error, setError] = useState(false);

	const { setAccount } = useContext(DataContext);

	const handleClose = () => {
		setOpen(false);
		toggleAccount(accountIntitialValues.login);
		setError(false);
	}

	const toggleSignup = () => {
		toggleAccount(accountIntitialValues.signup);
	}

	

	const onInputChange = (e) => {
		setSignup({...signup, [e.target.name]: e.target.value });
		
	}

	const signupUser = async () => {
        let response = await authenticateSignup(signup);
		if (!response) return;
		handleClose(); 
		setAccount(signup.firstname);
	}

	const onValueChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	}

	const loginUser = async () => {
	 	let response = await authenticateLogin(login);
		console.log(response);
		if (response.status === 200){
			handleClose();
			setAccount(response.data.data.firstname);
		}else{
			setError(true);
		}
	}
   
	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{sx: { maxWidth: 'unset'}}}>
			<Component>
				<Box style= {{display: 'flex', height:'100%'}}>
					<Image>
						<Typography variant="h5">{account.heading}</Typography>
						<Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
					</Image>
				{
					account.view === 'login' ?
					<Wrapper>  
						<TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
						
						{ error && <Error>Please enter valid username or password</Error> }
						
						<TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label= "Enter Password"/>
						<Typography>By Contiuing, you agree to Agri-Tech's Terms of Use and Privacy Policy</Typography>
						<LoginButton onClick={() => loginUser()}>Login</LoginButton>
						<Typography style = {{textAlign: 'center'}}>OR</Typography>
						<RequestOTP>Request OTP</RequestOTP>
						<CreateAccount onClick={() => toggleSignup()}>New to Agri-Tech? Create an account</CreateAccount>
					</Wrapper>
                :
				    <Wrapper>  
				    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname" />
				    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label= "Enter Lastname"/>
					<TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label= "Enter Username"/>
					<TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label= "Enter Email"/>
					<TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label= "Enter Password" />
					<TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label= "Enter Phone"/>
					<LoginButton onClick={() => signupUser()}>Continue</LoginButton>
				    
				    
			        </Wrapper>
				}
				</Box>
			</Component>     
		</Dialog>
	)
}

export default LoginDialog;