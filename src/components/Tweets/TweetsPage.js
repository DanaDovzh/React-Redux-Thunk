import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../../store/action/actionTweets';
import { getUsers } from '../../store/action/actionUser';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

import './tweet-page.sass';

function TweetsPage() {
    const dispatch = useDispatch();
    const tweets = useSelector(state => state.rootReducerTweets.tweets.data);
    const usersAll = useSelector(state => state.rootReducerUser.users.data);

    useEffect(() => {
        dispatch(getTweets());
        dispatch(getUsers());
    }, []);
    console.log(tweets)
    return (
        <div className='tweets'>
            {tweets.map(tweet => {
                return (
                    usersAll.map(user => {
                        if (user.id === tweet.userId)
                            return (
                                <>
                                    <Card className='card-tweet'>
                                        <Card.Header>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Image src={user.avatar} rounded className='card-tweet__avatar' />
                                                    </Col>
                                                    <Col className='name'>{user.name}</Col>
                                                    <Col className='username'>{user.username}</Col>
                                                </Row>
                                            </Container>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text className='card-tweet__content'>
                                                {tweet.content}
                                            </Card.Text>
                                            <Image src={tweet.image} className='card-tweet__img-content' fluid />
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                    })
                )

            })}

        </div>
    )
}

export default TweetsPage;