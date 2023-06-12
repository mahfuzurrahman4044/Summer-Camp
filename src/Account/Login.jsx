import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(res => {
                // console.log(res.user)
                form.reset();
                navigate(from, { replace: true })
                setError("");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => setError(error.message))
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                const user = { name: loggedUser.name, email: loggedUser.email }

                fetch("https://summer-camp-server-mahfuzurrahman4044.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                navigate(from, { replace: true })
                setError("");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1></div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/signup'>New to Summer Camp? Please <div className="btn btn-outline bg-slate-100 border-0 border-b-4 border-primary ml-1 mt-4">Sign Up</div> </Link>
                                </label>
                            </div>
                            <p className="text-red-600">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-primary">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="btn btn-outline bg-slate-100 border-0 border-b-4 border-primary" onClick={handleGoogleLogin}><FaGoogle /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
