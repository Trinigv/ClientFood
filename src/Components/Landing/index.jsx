import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { pink } from '@mui/material/colors';

export default function Landing() {
	return (
		<div>
			<div className='boxprinc'>
				<AppBar position='static' gutterBottom='true'>
					<Container
						maxWidth='xl'
						sx={{ backgroundColor: '#80b5ff' }}>
						<Toolbar disableGutters>
							<KitchenIcon
								sx={{
									display: { xs: 'none', md: 'flex' },
									mr: 5,
								}}
							/>
							<Typography
								variant='h6'
								noWrap
								component='a'
								href='/'
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									textDecoration: 'none',
								}}></Typography>

							<Box
								sx={{
									flexGrow: 1,
									display: { xs: 'flex', md: 'none' },
								}}></Box>
							<KitchenIcon
								sx={{
									display: { xs: 'flex', md: 'none' },
									mr: 1,
								}}
							/>
							<Typography
								variant='h5'
								noWrap
								component='a'
								href=''
								sx={{
									mr: 2,
									display: {
										xs: 'flex',
										md: 'center',
										lg: 'center',
									},
									flexGrow: 1,
									fontFamily: 'unset',
									fontWeight: 700,
									letterSpacing: '.3rem',
									variant: 'primary',
									textDecoration: 'none',
									color: 'white',
								}}>
								RECIPES 4 EVERYONE
							</Typography>

							<Box
								sx={{
									flexGrow: 1,
									display: { xs: 'none', md: 'flex' },
								}}></Box>
						</Toolbar>
					</Container>
				</AppBar>
			</div>
			<div className='backgroundland'>
				<div id='alignside'>
					<div className='child'>
						<Typography
							sx={{
								fontSize: 100,
								color: 'white',
								fontFamily: 'Poppins, sans-serif',
								lineHeight: 1,
								fontWeight: 'bold',
								letterspacing: '2px',
								textDecoration: 'none',
								alignContent: 'center',
								justifyItems: 'center',
								paddingTop: '60px',
								paddingLeft: '40px',
								paddingRight: '40px',
								fontweight: 'bold',
								WebkitTextStroke: '0.3px black',
							}}>
							RECIPES FOR EVERY DIET
							<Typography
								sx={{
									marginTop: '50px',
									marginBottom: '50px',
									marginLeft: '50px',
									fontSize: 30,
									color: 'white',
									fontFamily: 'serif',
									fontWeight: 'bold',
									lineHeight: 1,
									letterspacing: '2px',
									textDecoration: 'none',
									alignContent: 'center',
									justifyItems: 'center',
									fontStyle: 'italic',
									height: '20px',
									width: '80%',
									textDecoration: 'underline',
									textDecorationColor: pink[100],
									WebkitTextStroke: '0px black',
								}}>
								Vegetarian, Primal, Vegan and more!
							</Typography>
						</Typography>
					</div>
					<div className='child' id='childtwo'>
						<Link id='links' to='/home'>
							<button id='buttstart'>SHOW ME RECIPES!</button>
						</Link>
					</div>
				</div>
				<div className='blob'>
					<svg
						link='http://www.w3.org/1999/xlink'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 310 350'
						width='600px'
						height='600px'>
						<path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />
					</svg>
				</div>
			</div>
		</div>
	);
}
