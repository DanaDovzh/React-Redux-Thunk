import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './add-form-user.sass';

function FormAddUser() {
	const [name, setName] = useState('');
	const [avatar, setImageContent] = useState('');
	const [username, setUsername] = useState('');
	const [isLink, setIsLink] = useState(false);
	const [result, setResult] = useState(true);

	const addUserSubmit = async (event) => {
		event.preventDefault();
		if (isLink) {
			const newUser = {
				name,
				username,
				avatar,
			};
			resetFormFields();
			const response = await fetch('http://domer.tech:9999/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});
			const result = await response.json();
			setResult(result.success);
		}
	};
	const resetFormFields = () => {
		setName('');
		setImageContent('');
		setUsername('');
	};

	const checkLink = (e) => {
		const linkCheck = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/;
		const isLinkCheck = e.target.value.match(linkCheck) ? true : false;
		setIsLink(isLinkCheck);
		if (isLinkCheck) {
			setImageContent(e.target.value);
		}
	};
	const handlerName = (e) => setName(e.target.value);
	const handlerNickname = (e) => setUsername(e.target.value);
	return (
		<div className='add-form__user form'>
			<Form className='form_add' onSubmit={addUserSubmit}>
				<Form.Group>
					<Form.Control
						required
						type='text'
						onChange={handlerName}
						placeholder="Enter user's name"
						defaultValue={name}
					/>
					<Form.Text className='text-muted'>
						Name for new user
					</Form.Text>

					<Form.Control
						required
						minlength='2'
						type='text'
						onChange={handlerNickname}
						placeholder="Enter user's nickname"
						defaultValue='@'
					/>
					<Form.Text className='text-muted'>
						Name for new nickname
					</Form.Text>

					<Form.Control
						required
						type='text'
						placeholder='Link for avatar'
						onChange={checkLink}
					/>
					<Form.Text className='text-muted'>
						<span>Put link for avatar</span>
						{!isLink && <span className='error'>Wrong link</span>}
					</Form.Text>
				</Form.Group>

				<Button className='form_add__btn' type='submit'>
					Submit
				</Button>
			</Form>
			{!result && <p className='error'>Something went wrong</p>}
		</div>
	);
}

export default FormAddUser;
