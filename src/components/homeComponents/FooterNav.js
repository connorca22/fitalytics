import {Nav, NavContainer, NavUl, NavLi} from "../styled/Home.styled"; 
import {NavLink} from 'react-router-dom'
import { useGlobalState } from "../../utils/stateContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/authServices";

//Footer bar used on Homepage. 

export default function HomeNav() {

//Checks if user is logged in. 
    const loggedInHome = localStorage.username !== undefined;

    const {dispatch} = useGlobalState(); 
    const navigate = useNavigate();

//Calls logOut functionality in authServices. 
    function logOut() {
        signOut();
        dispatch({type: 'setUsername', data: null})
        dispatch({type: 'setToken', data: null})
        navigate("/")
    }

    //If logged in will display Dashboard & Signout buttons. Otherwise SignIn & SignUp. 
    return (
        <footer style={{width: "100%", backgroundColor: "grey"}}>
            <NavContainer>
                <NavLink to='/' style={{textDecoration: "none"}}>Fitalytics</NavLink>
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
            </NavContainer>
        </footer>           
    )
} 
