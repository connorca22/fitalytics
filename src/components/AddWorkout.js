import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionWrapper, Flex, Container } from "./styled/Container.styled"
import { WorkoutForm, FormInputFlex } from './styled/Dashboard.styled'
import { createWorkout } from '../services/workoutService'
import ReusableWorkoutForm from './dashboardComponents/ReusableWorkoutForm'


export default function AddWorkout() {

    const initialState = {
        date: "",
        category_id: "",
        time: "",
        description: "",
        distance: "",
        avg_bpm: "",
        workoutDist: ['', '']
    }
    const [workoutData, setWorkoutData] = useState(initialState)


    function onInputChange(event) {
        setWorkoutData({
            ...workoutData,
            [event.target.name]: event.target.value
        })
    }

    function updateDistance(event) {
        if (event.target.id === 'kilometres') {workoutData.workoutDist[0] = event.target.value}
        if (event.target.id === 'metres') {workoutData.workoutDist[1] = event.target.value}
        if(workoutData.workoutDist[0] !== '' && workoutData.workoutDist[1] !== '') {
        setWorkoutData({
            ...workoutData,
            distance: `${workoutData.workoutDist[0]}km ${workoutData.workoutDist[1]}m`
        })
    }
    }


    const navigate = useNavigate()

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
                <Flex fd="column" border="1px solid black" margin="0px 15%">
                    <h1 style={{paddingTop: "15px"}}>Add Workout</h1>
                    <ReusableWorkoutForm workoutData={workoutData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} updateDistance={updateDistance}/>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}
