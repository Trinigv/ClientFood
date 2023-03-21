import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBackendDiets, postRecipe } from '../../Redux/actions';
import './creation.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { TextField, NativeSelect, InputLabel } from '@mui/material';

export default function Create() {
	const dispatch = useDispatch();
	const diets = useSelector((state) => state.totalDiets);

	useEffect(() => {
		dispatch(getBackendDiets());
	}, [dispatch]);

	const [newRecipe, setNewRecipe] = useState({
		title: '',
		summary: '',
		healthScore: '',
		instructions: '',
		image: '',
		diets: [],
	});

	const [errors, setErrors] = useState({});

	const handleInputEvent = (event) => {
		event.preventDefault();
		setNewRecipe({
			...newRecipe,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validate({
				...newRecipe,
				[event.target.name]: event.target.value,
			})
		);

		console.log(errors);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (Object.values(errors).length > 0) {
			alert('Complete information correctly');
		} else if (newRecipe.title === '' && newRecipe.summary === '') {
			alert('Recipe must have title and summary');
		} else {
			dispatch(postRecipe(newRecipe));
			alert('recipe created!');
			setNewRecipe({
				title: '',
				summary: '',
				healthScore: '',
				instructions: '',
				image: '',
				diets: [],
			});
		}
	};

	const handleSelect = (event) => {
		if (!newRecipe.diets.includes(event.target.value)) {
			setNewRecipe({
				...newRecipe,
				diets: newRecipe.diets.concat(event.target.value), //almacena lo seleccionado
			});
		} else {
			alert('You cant add the same diet twice');
		}
	};

	const handleDelete = (e) => {
		e.preventDefault();
		setNewRecipe({
			...newRecipe,
			diets: newRecipe.diets.filter((d) => d !== e.target.value),
		});
	};
	return (
		<div id='backgroundcreation'>
			<AppBar position='static' gutterBottom='true'>
				<Container maxWidth='xl' sx={{ backgroundColor: '#80b5ff' }}>
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
					</Toolbar>
				</Container>
			</AppBar>
			<div id='createrecipe'>
				<Typography
					sx={{
						fontSize: 130,
						color: 'white',
						fontFamily: 'Poppins, serif',
						fontStyle: 'italic',
						lineHeight: 1,
						fontWeight: 'bold',
						letterspacing: '2px',
						alignContent: 'center',
						justifyItems: 'center',
						paddingTop: '60px',
						paddingLeft: '40px',
						paddingRight: '40px',
						fontweight: 'bold',
						WebkitTextStroke: '0.3px black',
					}}>
					Share your recipe
					<Typography
						sx={{
							marginTop: '50px',
							marginBottom: '50px',
							marginLeft: '20px',
							fontSize: 20,
							color: 'white',
							fontFamily: 'serif',
							fontWeight: 'bold',
							lineHeight: 1,
							letterspacing: '2px',
							alignContent: 'center',
							justifyItems: 'center',
							fontStyle: 'italic',
							height: '20px',
							width: '80%',
							textDecoration: 'underline',
							textDecorationColor: pink[100],
							WebkitTextStroke: '0px black',
						}}>
						Let the world meet your delicious creations
					</Typography>
				</Typography>
				<div className='formcreate'>
					<form
						id='createform'
						onSubmit={(event) => handleSubmit(event)}>
						<div className='title'>
							<TextField
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								label='Title'
								variant='filled'
								size='medium'
								type='text'
								name='title'
								value={newRecipe.title}
								onChange={(event) => handleInputEvent(event)}
								className={errors.title}
							/>
							{errors.title ? (
								<p>
									{' '}
									<small>{errors.title}</small>
								</p>
							) : (
								false
							)}
						</div>
						<div className='summary'>
							<TextField
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								label='Summary'
								variant='filled'
								size='medium'
								type='text'
								name='summary'
								value={newRecipe.summary}
								onChange={(event) => handleInputEvent(event)}
								className={errors.summary}
							/>
							{errors.summary ? (
								<p>
									{' '}
									<small>{errors.summary}</small>
								</p>
							) : (
								false
							)}
						</div>
						<div>
							<TextField
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								label='Healthscore'
								variant='filled'
								type='number'
								name='HealthScore'
								value={newRecipe.healthScore}
								onChange={(event) => handleInputEvent(event)}
								className={errors.healthScore}
							/>
							{errors.healthScore ? (
								<p>
									{' '}
									<small>{errors.healthScore}</small>
								</p>
							) : (
								false
							)}
						</div>
						<div className='intscreate'>
							<TextField
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								label='Instructions'
								variant='filled'
								type='text'
								name='instructions'
								value={newRecipe.instructions}
								onChange={(event) => handleInputEvent(event)}
							/>
						</div>
						<div className='imagecreate'>
							<TextField
								type='text'
								name='image'
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								label='Image URL'
								variant='filled'
								value={newRecipe.image}
								onChange={(event) => handleInputEvent(event)}
							/>
							{errors.image ? (
								<p>
									<small>{errors.image}</small>
								</p>
							) : (
								false
							)}
						</div>
						<div className='dietscreate'>
							{/*<InputLabel
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								variant='filled'
								htmlFor='uncontrolled-native'>
								Diets
							</InputLabel>*/}
							<NativeSelect
								sx={{
									paddingTop: '20px',
									paddingBottom: '20px',
									width: 300,
								}}
								labelId='demo-simple-select-filled-label'
								id='demo-simple-select-filled'
								onChange={(event) => handleSelect(event)}>
								{diets.map((d) => (
									<option
										onClick={(event) => handleSelect(event)}
										key={d.id}
										value={d.name}>
										{d.name}
									</option>
								))}
							</NativeSelect>
							<ul>
								{newRecipe.diets?.map((el) => (
									<li>
										{el}{' '}
										<button
											value={el}
											onClick={(e) => handleDelete(e)}>
											X
										</button>
									</li>
								))}
							</ul>
						</div>

						<input
							className='buttoncreate'
							type='submit'
							name='Submit'
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

//validating input function
export function validate(newRecipe) {
	let error = {};
	if (!newRecipe.title) {
		error.title = 'Recipe name can not be empty';
	}
	if (
		!/(?!^\s+$)^.*$/m.test(newRecipe.title) ||
		!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
			newRecipe.title
		)
	) {
		error.title =
			'Recipe must start with letter and cant contain special caracters';
	}
	if (!newRecipe.summary) {
		error.summary = 'Recipe summary can not be empty';
	}
	if (!newRecipe.healthScore) {
		error.healthScore = 'Recipe must have healthscore';
	}
	if (
		newRecipe.healthScore > 100 ||
		newRecipe.healthScore < 0 ||
		newRecipe.healthScore.includes('e') ||
		newRecipe.healthScore.includes(',') ||
		newRecipe.healthScore.includes('.')
	) {
		error.healthScore =
			'Healthscore must be an integer lower than 100 and higher than 0';
	}
	if (
		!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
			newRecipe.image
		)
	) {
		error.image = 'Image must be a valid URL';
	}
	return error;
}
