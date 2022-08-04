import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">NoteApp</Link>
            </div>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
        </header>
    )
}

export default Header