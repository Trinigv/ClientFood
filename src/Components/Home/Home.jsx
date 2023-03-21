import React, { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';
import { useDispatch, useSelector } from 'react-redux';
import {
	getBackendRecipes,
	sortAlphabetically,
	sortByHealthscore,
} from '../../Redux/actions';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import DietFilter from './DietFilter';
import Pagination from './Pagination';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { Select, MenuItem, InputLabel } from '@mui/material';

let prevId = 1;

export default function Cards() {
	const dispatch = useDispatch();
	const recipesState = useSelector((state) => state.totalRecipes);
	console.log(recipesState);

	const [page, setPage] = useState(1);
	const [recipesPage, setRecipesPage] = useState(8);
	const [order, setOrder] = useState('');

	const quantity = page * recipesPage;
	const firstRecipePage = quantity - recipesPage;
	var showRecipesPage;
	showRecipesPage = recipesState.slice(firstRecipePage, quantity);

	if (typeof showRecipesPage === 'string') {
		//When searching for name of unexisting recipe
		showRecipesPage = 'Could not find recipes';
	}

	if (showRecipesPage.length === 0) {
		//when searching for a diet that is not included
		showRecipesPage = 'Could not find recipes';
	}

	const paged = function (pageNumber) {
		setPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getBackendRecipes());
	}, [dispatch]);

	function handleEvent(e) {
		e.preventDefault();
		dispatch(sortByHealthscore(e.target.value));
		setPage(1);
	}

	function handleEventAlphabet(e) {
		e.preventDefault();
		dispatch(sortAlphabetically(e.target.value));
		setPage(1);
		setOrder(`Order ${e.target.value}`);
	}

	function handleClick(e) {
		e.preventDefault();
		dispatch(getBackendRecipes());
		setPage(1);
		setOrder(`Order ${e.target.value}`);
	}

	return (
		<>
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
										to='/create'>
										Create
									</Link>
								</button>

								<Box sx={{ marginTop: '6px' }}>
									<SearchBar />
								</Box>
								<Box
									sx={{
										marginTop: '6px',
									}}>
									<DietFilter />
								</Box>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</div>
			<div className='filter-back'>
				<Typography
					sx={{
						fontFamily: 'Poppins, sans-serif',
						fontWeight: 600,
						fontSize: 15,
						display: 'flex',
						padding: '20px',
						alignContent: 'center',
					}}>
					Sort recipes
				</Typography>
				<div className='filter-section' style={{ paddingTop: '40px' }}>
					<form id='items-filter-section'>
						<InputLabel id='demo-simple-select-readonly-label'>
							Alphabetically
						</InputLabel>
						<Select
							labelId='demo-simple-select-readonly-label'
							id='demo-simple-select-readonly'
							placeholder='alphabetically'
							sx={{
								width: '120px',
								height: '40px',
								marginBottom: '50px',
							}}
							onChange={(e) => handleEventAlphabet(e)}>
							<MenuItem value='' disabled selected>
								Alphabetically
							</MenuItem>
							<MenuItem value='AZ'>From A to Z</MenuItem>
							<MenuItem value='ZA'>From Z to A</MenuItem>
						</Select>
						<InputLabel id='demo-simple-select-readonly-label'>
							Healthscore
						</InputLabel>
						<Select
							labelId='demo-simple-select-readonly-label'
							id='demo-simple-select-readonly'
							sx={{
								width: '120px',
								height: '40px',
							}}
							onChange={(e) => handleEvent(e)}>
							<MenuItem value='' disabled selected>
								Healthscore
							</MenuItem>
							<MenuItem value='MaxtoMin'>From 100 to 1</MenuItem>
							<MenuItem value='MinToMax'>From 1 to 100</MenuItem>
						</Select>
					</form>
				</div>
			</div>
			<div className='all'>
				<div className='cards'>
					{typeof showRecipesPage === 'object' ? (
						showRecipesPage?.map((recipe) => (
							<div
								style={{
									margin: '7px',
									marginLeft: '30px',
									marginRight: '16px',
									paddingTop: '40px',
								}}>
								{' '}
								<Link to={`/detail/${recipe.id}`}>
									{' '}
									<SingleRecipe
										key={prevId++}
										image={recipe.image}
										title={recipe.title}
										diets={recipe.diets?.map(
											(d) => d + ', '
										)}
										Diets={recipe.Diets?.map((o) => o)}
										id={recipe.id}
									/>
								</Link>
							</div>
						))
					) : (
						<h2>{showRecipesPage}</h2>
					)}
				</div>
			</div>
			<div className='pagination-container'>
				<Pagination
					recipesPage={recipesPage}
					recipesState={recipesState.length}
					paged={paged}
				/>
			</div>
		</>
	);
}
