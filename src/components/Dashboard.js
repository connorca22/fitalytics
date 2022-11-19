import {useEffect} from 'react'
import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { useGlobalState } from "../utils/stateContext";
import { Link } from 'react-router-dom'
import { getWorkouts } from "../services/workoutService";


export default function Dashboard() {

    useEffect(() => {
        getWorkouts()
        .then((workouts) => {
            console.log(workouts)
        })
    }, [])





    return (
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
                <Flex jc='space-around' ai='center'> 
                    <h1>Your Workouts</h1>
                    <Link to="/dashboard/add-workout"><button style={{padding: "10px"}}>ADD WORKOUT</button></Link>
                </Flex>
                <Flex fd="column">
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 