import { useRef } from 'react';
import {Link} from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value
        }
        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setToken(data.token)
                setUser(data.user)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign Up For Free</h1>
                    <input ref={nameRef} type="text" placeholder="First Name" />
                    <input ref={lastNameRef} type="text" placeholder="Last Name" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <input ref={confirmPasswordRef} type="password" placeholder="Password Confirmation" />
                    <button className="btn btn-block">Sign Up</button>
                    <p className="message">
                        Already have an account?? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
