import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipeDetail, deleteState } from '../../Redux/actions';
import './Details.css';
import {
	Box,
	AppBar,
	Container,
	Typography,
	Toolbar,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Paper,
} from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReportIcon from '@mui/icons-material/Report';

export default function Details(props) {
	const dispatch = useDispatch();
	const recipeDetails = useSelector((state) => state.recipeDetail);
	const id = props.match.params.id;
	console.log(recipeDetails);

	useEffect(() => {
		dispatch(getRecipeDetail(id));
		return dispatch(deleteState());
	}, [dispatch, id]); //lo hace solo cuando se renderiza (componentDidMount)

	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className='alldetail'>
			<div className='navbar'>
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
									display: 'flex',
									flexDirection: 'row-reverse',
								}}>
								<button className='buttonhome'>
									<Link
										style={{
											textDecoration: 'none',
											color: 'white',
										}}
										to='/home'>
										Home
									</Link>
								</button>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</div>

			<div className='box'>
				<Typography
					sx={{
						fontSize: 40,
						fontFamily: 'Poppins, sans-serif',
						paddingTop: '35px',
						textDecoration: 'underline',
						textDecorationColor: '#171717',
						color: '#171717',
						fontWeight: 500,
					}}>
					{recipeDetails.title !== undefined ? (
						recipeDetails.title.toUpperCase()
					) : (
						<></>
					)}
				</Typography>
				<div className='contdivhealth'>
					<Typography
						className='dietsRecipe'
						sx={{
							fontSize: 20,
							fontFamily: 'Poppins, sans-serif',
							color: 'black',
							fontStyle: 'italic',
						}}>
						Diets:{' '}
						{recipeDetails.diets &&
							recipeDetails.diets.map((d) => d + ' ')}
					</Typography>
					<Typography
						sx={{
							fontSize: 20,
							fontFamily: 'Poppins, sans-serif',
							color: 'black',
							fontStyle: 'italic',
							paddingRight: '100px',
						}}>
						Health Score: {recipeDetails.healthScore}
						{recipeDetails.healthScore > 65 ? (
							<ThumbUpAltIcon
								sx={{ paddingLeft: '5px' }}
								color='success'
								fontSize='medium'
							/>
						) : (
							<ReportIcon
								sx={{ paddingLeft: '5px' }}
								fontSize='medium'
							/>
						)}
					</Typography>
				</div>
				<Paper
					sx={{
						padding: '25px',
						backgroundColor: 'lightblue',
					}}>
					<div className='contdiv'>
						<img
							id='imgdetail'
							src={recipeDetails.image}
							alt='Imagen no disponible'
						/>
						<p className='summaryRecipe'>
							{recipeDetails.summary?.replace(/<[^>]*>?/gm, '')}
						</p>
					</div>

					<div>
						<p className='typeDiet'>
							{recipeDetails.Diets &&
								recipeDetails.Diets.map((o) => o.name + ' ')}
						</p>
					</div>
				</Paper>
				<Accordion
					expanded={expanded === 'panel1'}
					onChange={handleChange('panel1')}
					sx={{
						padding: '5px',
						backgroundColor: 'lightblue',
						paddingTop: '35px',
					}}>
					<AccordionSummary
						aria-controls='panel1d-content'
						id='panel1d-header'>
						<Typography
							sx={{ textDecoration: 'underline', fontSize: 20 }}>
							Instructions
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							sx={{
								fontFamily: 'Poppins, sans-serif',
							}}
							className='instructionsRecipe'>
							{recipeDetails.instructions}
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
