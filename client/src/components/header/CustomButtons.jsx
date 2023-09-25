import { useState, useContext } from 'react';

import { Box, Button, Typography, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DataContext } from '../../context/DataProvider';

import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import CartItem from '../cart/CartItem';



const Wrapper = styled(Box)`
      display: flex;
	  margin: 0 5% 0 auto;
	  & > button, & > p, & > div {
		margin-right: 40px;
		margin-top:7px;
		font-size: 12;
		alignItems: center;
		margin-left:30px;
		height:30px;

		
		
	}
	
`

const Container = styled(Link)`
      display: flex;
	  text-decoration: none;
	  color: inherit;
	  margin-top:8px;
	  left-padding:20px;
	  
  
`;



const LoginButton = styled(Button)`
     color: #2874f0;
	 background:#FFFFFF;
	 text-transform: none;
	 padding: 5px  40px;
	 border-radius: 2px;
	 box-shadow:none;
	 font-weight:600;
	 height: 32px;
	 
	 
	 
	 
	
	
`;

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

	const { account, setAccount } = useContext(DataContext);

	const { cartItems } = useSelector(state => state.cart);

	const openDialog = () => {
		setOpen(true);
	}

	return(
		<Wrapper>
			{
				account ? <Profile account={account} setAccount={setAccount} /> :
				   <LoginButton variant ="contained" onClick={() => openDialog()}>Login</LoginButton>
			}
			
			<Typography style={{marginTop: 10, width:155,  }}>Become a Seller</Typography>
			<Typography style= {{ marginTop: 8 }}>More</Typography>

			<Container to="/cart">
				<Badge badgeContent={cartItems?.length} color="secondary">
				<ShoppingCart />
				</Badge>
				<Typography style={{ marginLeft: 10 }}>Cart</Typography>
			</Container>
			<LoginDialog open={open} setOpen={setOpen} />
		</Wrapper>
	)
}

export default CustomButtons;