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
                <Flex jc='space-around' ai='center' margin="2% 0" border="1px solid black" padding="2% 0"> 
                    <h2>5/7 Workouts This Week</h2>
                    <Link to="/dashboard/update-goal"><button>Update Goal</button></Link>
                </Flex>
                <Flex fd="column" border="1px solid black">
                <Flex jc='space-around' ai='center' margin="2% 0"> 
                    <h1>Your Workouts</h1>
                    <Link to="/dashboard/add-workout"><button>ADD WORKOUT</button></Link>
                </Flex>
                    {workouts.map((workout, index) => {
                        return (
                        <WorkoutCard workout={workout} key={index} individual={false} />
                        )
                    }).reverse()} {/* note this is where I reverse order of cards, will need to make this sort by date */}
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 