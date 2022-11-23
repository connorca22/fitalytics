import {useState} from 'react'
import { SectionWrapper, Flex, Container } from './styled/Container.styled'
import {AuthForm} from './styled/Home.styled'
import {signIn} from '../services/authServices'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

//Signin page. 

export default function SignIn() {
    
    //Creates some initial state for userDetails state
    const initialState = {
        email: "",
        password: ""
    }
    
    //creates some state that we'll store form input values in 
    const [userDetails, setUserDetails] = useState(initialState)

    //change handler for form inputs
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
        signIn(userDetails)
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
                    <h1 style={{marginTop: "3%"}}>Sign In</h1>
                    <AuthForm onSubmit={onFormSubmit}>
                        <input type="email" name="email" id="email" value={userDetails.email} onChange={onInputChange} placeholder="Email" required></input>
                        <input type="password" name="password" id="password" value={userDetails.password} onChange={onInputChange} placeholder="Password" required></input>
                        <input type="submit" value="SUBMIT" id="submit"></input>
                    </AuthForm>
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 