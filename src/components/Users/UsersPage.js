import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import './users-page.sass';

const UsersPage = () => {
    const users = useSelector(state => state.rootReducerUser.users)
    return (
        <div className='users-page'>
            {
                users.map((user) => {
                    return (
                        <Card className='card-user'>
                            <Card.Img
                                variant='top'
                                src={user.avatar}
                                alt={user.avatar} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text className='username'>
                                    nickname: {user.username}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default (UsersPage);