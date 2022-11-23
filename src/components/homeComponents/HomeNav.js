import {Nav, NavContainer, NavUl, NavLi} from "../styled/Home.styled"; 
import {NavLink, useLocation, useNavigate, Link} from 'react-router-dom'
import { signOut } from "../../services/authServices";
import { useGlobalState } from "../../utils/stateContext";

//Navigation bar used throughout application. Loaded into SharedLayout above Outlet

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
    
    //Home page: If logged in will display Dashboard & Signout buttons. Otherwise SignIn & SignUp. 
    //Dashboard pages: Displays 'Ladder' and 'Sign Out' buttons

    return (
        <Nav>
            <NavContainer>
                {insidePortal ? (
                <> 
                    <NavLink to='/dashboard' style={{textDecoration: "none", color: "#D01110"}}>FITALYTICS</NavLink>
                    <NavUl>
                        <NavLi><NavLink to='/dashboard/ladder' style={{textDecoration: "none", color: "#D01110"}}>Ladder</NavLink></NavLi>
                        <NavLi><NavLink to='/' style={{textDecoration: "none", color: "#D01110"}} onClick={logOut}>Sign Out</NavLink></NavLi>
                    </NavUl>
                </>                   
                ) : (
                <>
                <NavLink to='/' style={{textDecoration: "none", color: "#D01110"}}>FITALYTICS</NavLink>
                <NavUl>
                    { loggedInHome ? (
                        <>
                            <NavLi><NavLink to='/dashboard' style={{textDecoration: "none", color: "#D01110"}}>Dashboard</NavLink></NavLi>
                            <NavLi><NavLink to='/' style={{textDecoration: "none", color: "#D01110"}} onClick={logOut}>Logout</NavLink></NavLi>
                        </>
                    ) : (
                        <>
                            <NavLi><NavLink to='/sign-in' style={{textDecoration: "none", color: "#D01110"}}>Sign In</NavLink></NavLi>
                            <NavLi><NavLink to='/sign-up' style={{textDecoration: "none", color: "#D01110"}}>Sign Up</NavLink></NavLi>
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
