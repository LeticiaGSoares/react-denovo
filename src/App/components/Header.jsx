import {Link} from 'react-router-dom'
import {NavBar, NavImg, NavLink} from '../styles/Header'
import chIcon from '../../assets/images/ch-icon.png'

const Header = () => {
    
    return(
        <NavBar>
            <Link style={{textDecoration: 'none'}} to={"/characters"}><NavLink>Characters</NavLink></Link>
            <Link style={{textDecoration: 'none'}} to={"/letters"}><NavLink>Letters</NavLink></Link>
            <Link style={{textDecoration: 'none'}} to={"/"}><NavImg src={chIcon}/></Link>
            <Link style={{textDecoration: 'none'}} to={"/watch"}><NavLink>Watch</NavLink></Link>
            <Link style={{textDecoration: 'none'}} to={"/knowmore"}><NavLink>Know More</NavLink></Link>
        </NavBar>
    )
}

export default Header