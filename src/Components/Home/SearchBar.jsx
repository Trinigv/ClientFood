import React from 'react';
import { useState } from 'react';
import { getRecipesByName } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import { Input, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function SearchBar({ setPage }) {
	const dispatch = useDispatch(); //to use dispatch
	const [name, setName] = useState(); // use state in functional component (hooks)

	const recipeName = useSelector((state) => state.totalRecipes);

	function handleChange(e) {
		e.preventDefault();
		setName(e.target.value); // tiene q ser e.target.value si o si
	}

	function handleSubmit(e) {
		e.preventDefault(); //prevents browser default behavior
		dispatch(getRecipesByName(name)); //calls action with the component's state
		setPage(1);
	}

	return (
		<form>
			<div className='search' style={{ marginRight: '100px' }}>
				<input
					label='Search...'
					variant='outlined'
					className='inputsearch'
					type='text'
					style={{
						width: 190,
						height: 27,
						backgroundColor: '#E7F2F8',
						color: '#555555',
						borderRadius: '8px',
						border: 'solid 0.6px black',
					}}
					placeholder='Search...'
					onChange={(e) => handleChange(e)}
				/>
				<Button
					variant='contained'
					type='submit'
					className='buttonsearch'
					sx={{
						width: 20,
						height: 27,
						marginLeft: '10px',
						fontSize: 12,
						fontFamily: 'Poppins, sans-serif',
						color: 'white',
						fontWeight: 900,
						backgroundColor: 'rgba(0, 140, 255, 0.5)',
					}}
					onClick={(e) => handleSubmit(e)}>
					Search
				</Button>
			</div>
		</form>
	);
}
