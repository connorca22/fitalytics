import {useState} from 'react'
import { SectionWrapper, Flex, Container } from './styled/Container.styled'
import {AuthForm} from './styled/Home.styled'
import {signUp} from '../services/authServices'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'


//Signup page. 

export default function SignUp() {
    //create some state for userDetails, set it to blank string values. 
    const initialState = {
        name: "", 
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    }
    const [userDetails, setUserDetails] = useState(initialState)

    //change handler for input values
    function onInputChange(event) {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const {dispatch} = useGlobalState() 
    const navigate = useNavigate()

    //on form submit, call signIn function from auth services. Then set local storage with the return values. 
    //Then call reducer to update username and token in global state. Then route to dashboard. 
    function onFormSubmit(event) {
        event.preventDefault()
        signUp(userDetails)
        .then(({token, username}) => {
            localStorage.setItem("token", token)
            localStorage.setItem("username", username)
            dispatch({type: 'setUsername', data: username})
            dispatch({type: 'setToken', data: token})
            navigate('/dashboard')
        })
        //If there's an error logging in, then print that error to a window alert. 
        .catch((err) => {
            let errorMessage = ''
            let singleError = err.response.data.error ? true : false
            if (singleError) {window.alert(err.response.data.error)}
            else { 
                err.response.data.errors.map((str) => {errorMessage += `${str}. `}) 
                window.alert(errorMessage)
            }
        })
    }
    
    return (
        <SectionWrapper marginTop="60px">
            <Container>
                <Flex fd="column" border='1px solid black'>
                    <h1 style={{marginTop: "3%"}}>Sign Up</h1>
                    <AuthForm onSubmit={onFormSubmit}>
                        <input type="text" name="name" id="name" value={userDetails.name} onChange={onInputChange} placeholder="Name" required></input>
                        <input type="text" name="username" id="username" value={userDetails.username} onChange={onInputChange} placeholder="Username" pattern="[A-Za-z0-9]{3,20}" title="Numbers & letters only. 3-20 characters" required></input>
                        <input type="email" name="email" id="email" value={userDetails.email} onChange={onInputChange} placeholder="Email" required></input>
                        <input type="password" name="password" id="password" value={userDetails.password} onChange={onInputChange} placeholder="Password" required></input>
                        <input type="password" name="password_confirmation" id="password_confirmation" value={userDetails.password_confirmation} onChange={onInputChange} placeholder="Confirm Password" required></input>                
                        <input type="submit" value="SUBMIT" id="submit"></input>
                    </AuthForm>
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 