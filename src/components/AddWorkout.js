import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionWrapper, Flex, Container } from "./styled/Container.styled"
import { WorkoutForm, FormInputFlex } from './styled/Dashboard.styled'
import { createWorkout } from '../services/workoutService'
import ReusableWorkoutForm from './dashboardComponents/ReusableWorkoutForm'

//Add workout page used in Dashboard 

export default function AddWorkout() {

    //set initial state for useState 
    const initialState = {
        date: "",
        category_id: "",
        time: "",
        description: "",
        distance: "",
        avg_bpm: "",
        workoutDist: ['', '']
    }
    //create some workoutData state. 
    const [workoutData, setWorkoutData] = useState(initialState)

    //form input onChange handler 
    function onInputChange(event) {
        setWorkoutData({
            ...workoutData,
            [event.target.name]: event.target.value
        })
    }


    const navigate = useNavigate()

    //form submit handler. Creates a workout from form data using call from workoutServices 
    function onFormSubmit(event) {
        event.preventDefault()
        createWorkout(workoutData)
        .then(() => {
            navigate('/dashboard')
        })
    }



    return (
        <SectionWrapper marginTop="60px">
            <Container>
                <Flex fd="column" border="1px solid black" margin="0px 15%" m="0">
                    <h1 style={{paddingTop: "15px"}}>Add Workout</h1>
                    <ReusableWorkoutForm workoutData={workoutData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
                </Flex>
            </Container>
        </SectionWrapper>
    )
}
