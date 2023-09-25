
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';

import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
   font-size: 14px;
   vertical-align: baseline;
   & > p {
	font-size: 14px;
	margin-top: 10px;
   }
`;

const StyledBadge = styled(Badge)`
   margin-right: 10px;
   color:  #00D100;
   font-size: 15px;
`;
const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td {
	font-size: 14px;
	margin-top: 10px;
	border: none;
}
`;

const ProductDetail = ({ product }) => {
	const fassured = 'data:image/png;base64,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'
   
	const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))
	return(
		<>
		   <Typography>{product.title.longTitle}</Typography>
			<Typography style={{ marginTop: 5, color:'#878787', fontSize: 14,  }}>
				8 Ratings & 1 Reviews
				<Box component="span"><img src={fassured} style={{ width:120, marginLeft: 20,  }} /></Box>
			</Typography>
			<Typography>
			    <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp; &nbsp; &nbsp;
				<Box component="span" style={{ color:'#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp; &nbsp; &nbsp;
				<Box component="span" style={{ color: '#3883EC' }}>₹{product.price.discount}off</Box>
			</Typography>
			<Typography>Available Offers</Typography>
			<SmallText>
				<Typography><StyledBadge />Get extra 15% off upto 40 on 1st item(s) T&C</Typography>
				<Typography><StyledBadge />Get extra 10% off (price inclusive of cashback/coupon)</Typography>
				<Typography><StyledBadge />Sign up for Agri-Tech Pay Later and get Agri-Tech Gift Card worth upto ₹1000* Know More</Typography>
				<Typography><StyledBadge />Buy 2 items save 4%;Buy 3 or more save 8% T&C</Typography>
				<Typography><StyledBadge />5% Cashback on Axis Bank CardT&C</Typography>
				<Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹1,999 T&C</Typography>
			</SmallText>
			<Table>
				<TableBody>
					<ColumnText>
						<TableCell style={{ color:'#878787'}}>Delivery</TableCell>
						<TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹20</TableCell>
					</ColumnText>
					<ColumnText>
						<TableCell style={{ color:'#878787'}}>Warranty</TableCell>
						<TableCell>10 days Warranty</TableCell>
					</ColumnText>
					<ColumnText>
						<TableCell style={{ color:'#878787'}}>Seller</TableCell>
						<TableCell>
							<Box component="span" style={{ color:'#2874f0' }}>NaturalFarms</Box>
							<Typography>GST innvoice available</Typography>
							<Typography>View more seller starting from ₹{product.price.cost}</Typography>
						</TableCell>
					</ColumnText>
					<ColumnText>
						
					</ColumnText>
					<ColumnText>
						<TableCell style={{ color:'#878787'}}>Description</TableCell>
						<TableCell>{product.description}</TableCell>
					</ColumnText>
				</TableBody>
			</Table>
		</>
	)
}

export default ProductDetail;