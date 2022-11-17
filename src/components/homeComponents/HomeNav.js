import {Nav, NavContainer, NavUl, NavLi} from "../styled/Home.styled"; 
import {NavLink, useLocation, useNavigate, Link} from 'react-router-dom'
import { signOut } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";

export default function HomeNav() {
    const loggedIn = useLocation().pathname.includes('dashboard')
    const {dispatch} = useGlobalState(); 
    const navigate = useNavigate();

    function logOut() {
        signOut();
        dispatch({type: 'setUsername', data: null})
        dispatch({type: 'setToken', data: null})
        navigate("/")
    }
    
    return (
        <Nav>
            <NavContainer>
                {loggedIn ? (
                <> 
                    <NavLink to='/dashboard' style={{textDecoration: "none"}}>FITALYTICS</NavLink>
                    <NavUl>
                        <NavLi><NavLink to='/dashboard' style={{textDecoration: "none"}}>Goal</NavLink></NavLi>
                        <NavLi><NavLink to='/dashboard' style={{textDecoration: "none"}}>Trophies</NavLink></NavLi>
                        <NavLi><NavLink to='/dashboard' style={{textDecoration: "none"}}>Ladder</NavLink></NavLi>
                        <NavLi><NavLink to='/' style={{textDecoration: "none"}} onClick={logOut}>Sign Out</NavLink></NavLi>
                    </NavUl>
                </>                   
                ) : (
                <>
                <NavLink to='/' style={{textDecoration: "none"}}>Fitalytics 2022</NavLink>
                <NavUl>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>About</NavLink></NavLi>
                    <NavLi><NavLink to='/' style={{textDecoration: "none"}}>Contact</NavLink></NavLi>
                    <NavLi><NavLink to='/sign-in' style={{textDecoration: "none"}}>Sign In</NavLink></NavLi>
                    <NavLi><NavLink to='/sign-up' style={{textDecoration: "none"}}>Sign Up</NavLink></NavLi>
                </NavUl>
                </>
                )}
            </NavContainer>
        </Nav>             
    )
} 
