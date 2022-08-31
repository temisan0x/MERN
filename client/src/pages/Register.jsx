import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from "../redux/authSlice";

function Register() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(() => (state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset());
        
    },[user, isError, isSuccess, message, navigate,dispatch])

    function onChange(e) {
        return setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
         
        if (password !== password2) {
            toast.error('Password do not match.');
        } else {
            const userData = {
                name, 
                email,
                password,
            }
            dispatch(register(userData));
        }
    }
    return (
        <>
            <section className="heading">
                <h1>Register</h1>
                <p>Please create an account <AiOutlineArrowDown /></p>
            </section>
            <section className="form" onSubmit={onSubmit}>
                <form>
                    <div className="form-group">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Enter your name" className="form-control"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email" className="form-control"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password" className="form-control"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm password" className="form-control"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register