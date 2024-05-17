import {Link} from 'react-router-dom'
import {NavBar} from '../styles/Header'

const Header = () => {
    
    return(
        <NavBar>
            <Link to={"/"}>Home</Link>
            <Link to={"/characters"}>Characters</Link>
            <Link to={"/letters"}>Letters</Link>
            <Link to={"/watch"}>Watch</Link>
            <Link to={"/knowmore"}>Know more</Link>
        </NavBar>
    )
}

export default Header