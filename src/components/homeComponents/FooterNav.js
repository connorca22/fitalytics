import {Nav, NavContainer, NavUl, NavLi} from "../styled/Home.styled"; 
import {NavLink} from 'react-router-dom'



export default function HomeNav() {
    return (
        <footer style={{width: "100%", backgroundColor: "grey"}}>
            <NavContainer>
                <NavLink to='/' style={{textDecoration: "none"}}>Fitalytics</NavLink>
                <NavUl>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>About</NavLink></NavLi>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>Contact</NavLink></NavLi>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>Sign In</NavLink></NavLi>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>Sign Up</NavLink></NavLi>
                </NavUl>
            </NavContainer>
        </footer>           
    )
} 
