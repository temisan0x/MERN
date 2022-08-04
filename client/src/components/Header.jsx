import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">NoteApp</Link>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Login</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header