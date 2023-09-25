

import { Typography, Box, styled } from "@mui/material"

const Component = styled (Box)`
	height: 65vh;
	width: 80%;
	background: #fff;
	margin: 80px 140px;
`;

const Container = styled(Box)`
	text-align: center;
	padding-top: 70px;
`

const EmptyCart = () => {

	const imgurl = 'https://orgasatva.com/Content/Images/empty-cart.png'

	return(
		<Component>
			<Container>
				<img src ={imgurl} alt ="empty" style= {{ width:' 25%' }} />
				<Typography>Your cart is empty!</Typography>
				<Typography>Add your choice now</Typography>
			</Container>
		</Component>
	)
}

export default EmptyCart;