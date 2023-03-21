import { border, borderRadius } from '@mui/system';
import React from 'react';
import './Pagination.css';
import { useState } from 'react';

export default function Pagination({ recipesPage, recipesState, paged }) {
	const pages = [];

	for (let i = 1; i <= Math.ceil(recipesState / recipesPage); i++) {
		pages.push(i);
	}

	const [pageNumber, nextPageNumber] = useState(pages);

	return (
		<div>
			{pages.length <= 1 ? (
				<></>
			) : (
				<nav>
					<ul>
						{pages?.map((p) => (
							<li key={p}>
								<button
									style={{
										borderRadius: '5px',
										margin: '5px',
										width: '25px',
										height: '20px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									className='numberpages'
									onClick={() => paged(p)}>
									{p}
								</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
}
