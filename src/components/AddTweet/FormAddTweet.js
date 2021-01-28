import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/action/actionUser';

import './add-tweet.sass';

function FormAddTweet() {
    const usersAll = useSelector(state => state.rootReducerUser.users.data);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [userId, setUserId] = useState('');
    const [isLink, setIsLink] = useState(false);
    const [result, setResult] = useState(true);

    const users = Array.from(new Set(usersAll.map(user => [user.name, user.id])));
    const handlerAuthor = (e) => {
        setName(e.target.value);
        setUserId(e.target.selectedIndex);
        console.log(e.target.selectedIndex)
    };
    const handlerContent = (e) => setContent(e.target.value);
    const resetFormFields = () => {
        setName("");
        setContent("");
        setImage("");
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (isLink) {
            const newPost = {
                name,
                content,
                image,
                userId
            };
            const response = await fetch('http://domer.tech:9999/tweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            })
            const result = await response.json();
            setResult(result.success);
            resetFormFields();
        }

    };

    const checkLink = (e) => {
        const linkCheck = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/;
        const isLinkCheck = (e.target.value.match(linkCheck) ? true : false);
        setIsLink(isLinkCheck);
        if (isLinkCheck) {
            setImage(e.target.value)
        }
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className='form__add-tweet form'>
            <Form className='form_add' onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Control
                        required
                        minlength='2'
                        type="text"
                        onChange={handlerContent}
                        placeholder="What do you want to say?"
                        defaultValue={content} />
                    <Form.Text className="text-muted">
                        Your opinion
                    </Form.Text>

                    <Form.Control as="select" id='select' onChange={handlerAuthor} defaultValue="Choose author">
                        <option disabled>Choose author</option>
                        {users.map(userName => (<option id={userName[1]} value={userName[0]}>{userName[0]} </option>))}
                    </Form.Control>
                    <Form.Text className="text-muted">
                        Select the author
                    </Form.Text>

                    <Form.Control required type="text" placeholder="Link for avatar"
                        defaultValue={image}
                        onChange={checkLink} />
                    <Form.Text className="text-muted">
                        <span>Put link for content</span>
                        {!isLink && <span className='error'>Wrong link</span>}
                    </Form.Text>
                </Form.Group>

                <Button
                    className='form_add__btn'
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
            {!result && <p className='error'>Something went wrong</p>}
        </div>
    )
}

export default FormAddTweet;