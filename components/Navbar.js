import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../components/Navbar.css';


export default function Navbar() {

    return (
    <>
        <nav className="nav">
            <div to="/Home" className="site-title">National Adventures</div>
                <ul>
                    <CustomLink to="/Home">Home</CustomLink>
                    <CustomLink to="/Parks">National Parks</CustomLink>
                    <CustomLink to="/Mountains">Mountains</CustomLink>
                </ul>
        </nav>
    </>
        )
        
    }

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>

    )
}



