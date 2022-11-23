import { SectionWrapper, Container, Flex } from "./styled/Container.styled";
import ReusableWorkoutForm from "./dashboardComponents/ReusableWorkoutForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWorkout } from "../services/workoutService";
import { updateWorkout } from "../services/workoutService";

//Page conatining a form for updating an existing workout. 
const UpdateWorkout = () => {

    //gets the workoutId from params, creates some state for existing workout data. 
    const {workoutId} = useParams()
    const [workoutData, setWorkoutData] = useState([])

    //Calls getWorkout from workout services, then sets the state to contain it. 
    useEffect(() => {
        getWorkout(workoutId)
        .then((obj) => {
            setWorkoutData(obj)
        })
    }, [])

    //form input change handler
    function onInputChange(event) {
        setWorkoutData({
            ...workoutData,
            [event.target.name]: event.target.value
        })
    }


    const navigate = useNavigate()

    //calls updateWorkout from workoutServices, passes in data saved in state from form data. Redirects to dashboard. 
    function onFormSubmit(event) {
        event.preventDefault()
        updateWorkout(workoutData)
        .then(() => {
            navigate('/dashboard')
        })
    }

    //Uses reusable workout form component - we pass in workoutData so that it can pre populate the form values with existing workout data. 
    return (
        <SectionWrapper marginTop="60px">
        <Container>
            <Flex fd="column" border="1px solid black" margin="0px 15%" m="0">
                <h1 style={{paddingTop: "15px"}}>Update Workout</h1>
                <ReusableWorkoutForm workoutData={workoutData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
            </Flex>
        </Container>
    </SectionWrapper>
  );
};
export default UpdateWorkout;