import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { getUsers } from '../../store/action/actionUser';

import './users-page.sass';

const UsersPage = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.rootReducerUser.users.data);

	useEffect(() => {
		dispatch(getUsers());
	}, []);
	return (
		<div className='users-page'>
			{users.reverse().map((user) => {
				return (
					<Card className='card-user'>
						<Card.Img
							variant='top'
							src={user.avatar}
							alt={user.avatar}
						/>
						<Card.Body>
							<Card.Title>{user.name}</Card.Title>
							<Card.Text className='username'>
								nickname: {user.username}
							</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default UsersPage;
