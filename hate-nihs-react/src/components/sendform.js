import React from 'react';
import {
 Form,
 Button,
} from "react-bootstrap";
import GoogleLogin from 'react-google-login';

export default function Isform() {
    const { useState } = React
    const [value, setValue] = useState(),
    onInput = ({target:{value}}) => setValue(value),
    onFormSubmit = e => {
      e.preventDefault()
      console.log(value)
      setValue()
    }
    const responseGoogle = (response) => {
        console.log(response);
    }


    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>暱稱</Form.Label>
                <Form.Control type="email" placeholder="起輸入暱稱" onChange={onInput} value={value} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>內容</Form.Label>
                <Form.Control as="textarea" rows={3} type="password" placeholder="內容" />
            </Form.Group>
            <GoogleLogin
                clientId="133157627833-551a92ekvsubhjh1arabm6hn16sjjlpl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
            <Button variant="primary" type="submit">
                發送
            </Button>
        </Form>

        );
    }

