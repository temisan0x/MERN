import { useState } from "react"

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    return (
        <>
            <section className="heading">
                <h1>Register</h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form>
                    <div className="form-group">
                        <input type="text" value={name} placeholder="Enter your name dear friend" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" value={name} placeholder="Enter your name dear friend" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" value={name} placeholder="Enter your name dear friend" className="form-control" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register