import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SectionWrapper, Container } from "./styled/Container.styled"
import WorkoutCard from "./dashboardComponents/WorkoutCard"
import { getWorkout } from "../services/workoutService"
import SingleWorkout from "./dashboardComponents/SingleWorkout"

export default function Workout() {

    const [workout, setWorkout] = useState([])
    const {workoutId} = useParams()

    useEffect(() => {
        getWorkout(workoutId)
        .then((obj) => {
            setWorkout(obj)
        })
    }, [])

    
    return (
        <SectionWrapper marginTop="60px">
            <Container>
                { Object.values(workout).length > 0 ? (
                <SingleWorkout workout={workout} /> 
                ) : null }
            </Container>
        </SectionWrapper>
    )
} 