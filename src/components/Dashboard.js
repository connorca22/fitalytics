import {useEffect, useState} from 'react'
import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { useGlobalState } from "../utils/stateContext";
import { Link } from 'react-router-dom'
import { getWorkouts } from "../services/workoutService";
import WorkoutCard from './dashboardComponents/WorkoutCard';


export default function Dashboard() {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        getWorkouts()
        .then((workouts) => {
            setWorkouts(workouts)
        })
    }, [])





    return (
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
                <Flex fd="column">
                <Flex jc='space-around' ai='center'> 
                    <h1>Your Workouts</h1>
                    <Link to="/dashboard/add-workout"><button style={{padding: "10px"}}>ADD WORKOUT</button></Link>
                </Flex>
                    {workouts.map((workout, index) => {
                        return (
                        <WorkoutCard workout={workout} key={index}/>
                        )
                    })}
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 