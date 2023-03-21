import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiet, getBackendDiets } from '../../Redux/actions';
import './DietFilter.css';
import { Button } from '@mui/material';

export default function DietFilter({ setPage }) {
	const dispatch = useDispatch();
	const diets = useSelector((state) => state.totalDiets);

	const [input, setNewInput] = React.useState();

	function handleSelect(e) {
		e.preventDefault();
		setNewInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (input) {
			dispatch(filterByDiet(input));
		}
		setPage(1);
	}

	useEffect(() => {
		//me sirve para agregar otras funcionalidades al componente
		dispatch(getBackendDiets());
	}, [dispatch]);

	return (
		<div className='dietfilter'>
			<select
				id='filtdiets'
				onChange={(e) => handleSelect(e)}
				style={{
					width: 200,
					height: 33,
					backgroundColor: '#E7F2F8',
					color: '#555555',
					borderRadius: '8px',
				}}>
				<option value='none' selected disabled hidden>
					Select an Option
				</option>{' '}
				{diets.length &&
					diets.map((d) => <option key={d.id}>{d.name}</option>)}{' '}
			</select>
			<Button
				variant='contained'
				type='submit'
				sx={{
					width: 20,
					height: 27,
					marginLeft: '10px',
					marginRight: '20px',
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
	);
}
