import { useState } from "react";
import { AiOutlineArrowDown} from 'react-icons/ai';
function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password} = formData;

    function onChange(e) {
        return setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1>Login</h1>
                <p>Login to create a note <AiOutlineArrowDown/></p>
            </section>
            <section className="form" onSubmit={onSubmit}>
                <form>
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
                        <button className="btn btn-block" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login