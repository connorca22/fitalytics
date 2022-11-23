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
        <footer style={{width: "100%", backgroundColor: "#0A0A00"}}>
            <NavContainer>
                <NavLink to='/' style={{textDecoration: "none", color: "#D01110"}}>FITALYTICS 2022</NavLink>
                <NavUl>
                { loggedInHome ? (
                        <>
                            <NavLi><NavLink to='/dashboard' style={{textDecoration: "none", color: "#D01110"}} >Dashboard</NavLink></NavLi>
                            <NavLi><NavLink to='/' style={{textDecoration: "none", color: "#D01110"}}  onClick={logOut}>Logout</NavLink></NavLi>
                        </>
                    ) : (
                        <>
                            <NavLi><NavLink to='/sign-in' style={{textDecoration: "none", color: "#D01110"}} >Sign In</NavLink></NavLi>
                            <NavLi><NavLink to='/sign-up' style={{textDecoration: "none", color: "#D01110"}} >Sign Up</NavLink></NavLi>
                        </>
                    )
                    }
                </NavUl>
            </NavContainer>
        </footer>           
    )
} 
