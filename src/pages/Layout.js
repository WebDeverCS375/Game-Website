import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <nav>
                <ul id="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/upload">Upload</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                    <li>
                        <Link to="/seller">Seller</Link>
                    </li>
                    <li>
                        <Link to="/NoPage">No Page</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
