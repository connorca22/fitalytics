import {useState} from 'react'
import { SectionWrapper, Flex, Container } from './styled/Container.styled'
import {AuthForm} from './styled/Home.styled'
import {signUp} from '../services/authServices'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

export default function SignUp() {
    const initialState = {
        name: "", 
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    }
    const [userDetails, setUserDetails] = useState(initialState)

    function onInputChange(event) {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const {dispatch} = useGlobalState() 
    const navigate = useNavigate()

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
    }
    
    return (
        <SectionWrapper marginTop="60px">
            <Container>
                <Flex fd="column" border='1px solid black'>
                    <h1>Sign Up</h1>
                    <AuthForm onSubmit={onFormSubmit}>
                        <input type="text" name="name" id="name" value={userDetails.name} onChange={onInputChange} placeholder="Name" required></input>
                        <input type="text" name="username" id="username" value={userDetails.username} onChange={onInputChange} placeholder="Username" required></input>
                        <input type="email" name="email" id="email" value={userDetails.email} onChange={onInputChange} placeholder="Email" required></input>
                        <input type="password" name="password" id="password" value={userDetails.password} onChange={onInputChange} placeholder="Password" required></input>
                        <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={userDetails.passwordConfirmation} onChange={onInputChange} placeholder="Confirm Password" required></input>                
                        <input type="submit" value="SUBMIT" id="submit"></input>
                    </AuthForm>
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 