import {useEffect, useState} from 'react'
import { SectionWrapper, Container, Flex } from "./styled/Container.styled"
import { useGlobalState } from "../utils/stateContext";
import { Link } from 'react-router-dom'
import { getWorkouts } from "../services/workoutService";
import WorkoutCard from './dashboardComponents/WorkoutCard';
import { getWeeklyWorkouts } from '../services/goalServices';


export default function Dashboard() {

    const [workouts, setWorkouts] = useState([])
    const [weeklyGoal, setWeeklyGoal] = useState(
        {
            workouts_this_week: 0,
            weekly_goal: 0 
        }
    )

    useEffect(() => {
        const username= localStorage.username
        getWeeklyWorkouts(username)
        .then((user) => {
            setWeeklyGoal({
                ...weeklyGoal,
                workouts_this_week: user.workouts_this_week,
                weekly_goal: user.weekly_goal
            })    
        })
        getWorkouts()
        .then((workouts) => {
            setWorkouts(workouts)
        })
    }, [])



    return (
        <SectionWrapper style={{marginTop: "60px"}}>
            <Container>
            {weeklyGoal.weekly_goal === 0 ? (
                <Flex jc='space-around' ai='center' margin="2% 0" border="1px solid black" padding="2% 0"> 
                    <h2>Set Weekly Workout Goal</h2>
                    <Link to="/dashboard/update-goal"><button>CREATE GOAL</button></Link>
                </Flex>
            ) : (                
                <Flex jc='space-around' ai='center' margin="2% 0" border="1px solid black" padding="2% 0"> 
                    <h2>{weeklyGoal.workouts_this_week}/{weeklyGoal.weekly_goal} Workouts This Week {weeklyGoal.workouts_this_week >= weeklyGoal.weekly_goal ? '✅' : null}</h2>
                    <Link to="/dashboard/update-goal"><button>UPDATE GOAL</button></Link>
                </Flex>
            )
            }
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