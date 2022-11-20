import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWorkout } from "../services/workoutService";

const UpdateWorkout = () => {
    
    const {workoutId} = useParams()
    const [workout, setWorkout] = useState([])

    useEffect(() => {
        getWorkout(workoutId)
        .then((obj) => {
            setWorkout(obj)
        })
    }, [])

    return (
    <h1 style={{marginTop: "60px"}}>Update Workout</h1>
  );
};
export default UpdateWorkout;