import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SectionWrapper, Container } from "./styled/Container.styled"
import WorkoutCard from "./dashboardComponents/WorkoutCard"
import { getWorkout } from "../services/workoutService"
import SingleWorkout from "./dashboardComponents/SingleWorkout"

//Page that displays a single workout. 
export default function Workout() {

    //gets the workout id from params, creates some state to store workout in. 
    const [workout, setWorkout] = useState([])
    const {workoutId} = useParams()

    //calls getWorkout from workoutServices. Then sets that workout into state. 
    useEffect(() => {
        getWorkout(workoutId)
        .then((obj) => {
            setWorkout(obj)
        })
    }, [])

    //if user has created any previous workouts, it will load them in using logic contained in SingleWorkout component.
    return (
        <SectionWrapper marginTop="60px" bg="#A8BBB0" height="100%">
            <Container>
                { Object.values(workout).length > 0 ? (
                <SingleWorkout workout={workout} /> 
                ) : null }
            </Container>
        </SectionWrapper>
    )
} 