import {Nav, NavContainer, NavUl, NavLi} from "../styled/Home.styled"; 
import {NavLink, useLocation, useNavigate, Link} from 'react-router-dom'
import { signOut } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";

export default function HomeNav() {
    //constant that check whether the user is in the portal or not. 
    const insidePortal = useLocation().pathname.includes('dashboard')
    //constant that checks if user is loggedIn. Will use these to adjust nav based on whether 
    //user is on the homepage or portal, and whether they are logged in. 
    const loggedInHome = localStorage.username !== undefined;

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
                {insidePortal ? (
                <> 
                    <NavLink to='/dashboard' style={{textDecoration: "none"}}>FITALYTICS</NavLink>
                    <NavUl>
                        <NavLi><NavLink to='/dashboard/ladder' style={{textDecoration: "none"}}>Ladder</NavLink></NavLi>
                        <NavLi><NavLink to='/' style={{textDecoration: "none"}} onClick={logOut}>Sign Out</NavLink></NavLi>
                    </NavUl>
                </>                   
                ) : (
                <>
                <NavLink to='/' style={{textDecoration: "none"}}>FITALYTICS</NavLink>
                <NavUl>
                    { loggedInHome ? (
                        <>
                            <NavLi><NavLink to='/dashboard' style={{textDecoration: "none"}}>Dashboard</NavLink></NavLi>
                            <NavLi><NavLink to='/' style={{textDecoration: "none"}} onClick={logOut}>Logout</NavLink></NavLi>
                        </>
                    ) : (
                        <>
                            <NavLi><NavLink to='/sign-in' style={{textDecoration: "none"}}>Sign In</NavLink></NavLi>
                            <NavLi><NavLink to='/sign-up' style={{textDecoration: "none"}}>Sign Up</NavLink></NavLi>
                        </>
                    )
                    }
                </NavUl>
                </>
                )}
            </NavContainer>
        </Nav>             
    )
} 
