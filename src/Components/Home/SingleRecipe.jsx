import React from 'react';
import './SingleRecipe.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function SingleRecipe(props) {
	return (
		<div className='ext'>
			<Card
				sx={{
					width: 280,
					height: 330,
					backgroundColor: 'white',
				}}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={props.image}
						alt='recipe img'
					/>
					<CardContent>
						<div className='recipesCard'>
							{' '}
							<Typography
								sx={{
									fontFamily: 'Poppins, sans-serif',
									fontSize: 17,
									color: 'black',
									paddingTop: '10px',
									textDecoration: 'underline',
									textDecorationColor: 'lightcoral',
									fontWeight: 700,
								}}>
								{props.title.toUpperCase()}
							</Typography>
							<Typography
								sx={{ fontFamily: 'Poppins, sans-serif' }}
								className='summaryRecipe'
								variant='body2'
								color='text.secondary'>
								{props.summary}
							</Typography>
							<div>
								<p className='healthScoreRecipe'>
									{props.healthScore}
								</p>
							</div>
							<div>
								<Typography
									className='dietsRecipe'
									variant='body1'
									color='text.secondary'
									sx={{
										fontFamily: 'Poppins, sans-serif',
										fontSize: 16,
										color: 'black',
										marginTop: '35px',
										fontWeight: 500,
									}}>
									{props.diets}
								</Typography>
							</div>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
			<div>
				<p className='typeDiet'>
					{props.Diets === undefined
						? false
						: props.Diets?.map((o) => o.name)}
				</p>
			</div>
			<div>
				<p className='instructionsRecipe'>{props.instructions}</p>
			</div>
		</div>
	);
}
