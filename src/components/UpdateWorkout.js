import { SectionWrapper, Container, Flex } from "./styled/Container.styled";
import ReusableWorkoutForm from "./dashboardComponents/ReusableWorkoutForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWorkout } from "../services/workoutService";
import { updateWorkout } from "../services/workoutService";

const UpdateWorkout = () => {


    const {workoutId} = useParams()
    const [workoutData, setWorkoutData] = useState([])

    useEffect(() => {
        getWorkout(workoutId)
        .then((obj) => {
            setWorkoutData(obj)
        })
    }, [])


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
        updateWorkout(workoutData)
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
  );
};
export default UpdateWorkout;