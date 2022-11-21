import {useState} from 'react'
import { SectionWrapper, Flex, Container } from './styled/Container.styled'
import {AuthForm} from './styled/Home.styled'
import {signIn} from '../services/authServices'
import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

export default function SignIn() {
    const initialState = {
        email: "",
        password: ""
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
        signIn(userDetails)
        .then(({token, username}) => {
            localStorage.setItem("token", token)
            localStorage.setItem("username", username)
            dispatch({type: 'setUsername', data: username})
            dispatch({type: 'setToken', data: token})
            navigate('/dashboard')
        })
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
                    <h1>Sign In</h1>
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