import { HashLink } from 'react-router-hash-link';
import logo from '../images/Logo.svg'
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt='logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-right" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HashLink className="nav-link active" aria-current="page" to="/">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink smooth className="nav-link" to="/#about">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/">Menu</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/">Order Online</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/booking">Reservations</HashLink>
                            </li>                            
                            <li className="nav-item">
                            <button className='btn btn-success'>Login</button>
                            </li>                            
                        </ul>
                    </div>
                  
                </div>
            </nav>
        </header>
    )
}

export default Navbar