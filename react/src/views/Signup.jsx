import {Link} from 'react-router-dom';

export default function Signup() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign Up For Free</h1>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password Confirmation" />
                    <button className="btn btn-block">Sign Up</button>
                    <p className="message">
                        Already have an account?? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
