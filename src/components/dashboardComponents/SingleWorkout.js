import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { WorkoutCardFlex } from "../styled/Dashboard.styled";
import {Link} from 'react-router-dom'
import { getUser } from "../../services/authServices";
import { deleteWorkout } from "../../services/workoutService";
import { categories } from "../../config/categoryData";
import { WorkoutCardContainer } from "../styled/Dashboard.styled";


//Component is used to represent a single workout in a specific workout page (used in Workout component)
//Workout details are pulled from api call in Workout.js, then passed in as props. 

export default function SingleWorkout({workout}) {

    const {category_id, date, avg_bpm, time, distance, description, id, user_id} = workout;

    const initialValue = {show: 'loading'}
    const [showWorkout, setShowWorkout] = useState(initialValue)

//Ensures user can only see their own workouts.
    useEffect(() => {
        getUser(localStorage.username)
        .then((currentUser) => {
            if (currentUser.id === user_id) {
                setShowWorkout({
                    show: true
                })
            } else {
                setShowWorkout({
                    show: false
                })
            }
        })
    }, [])


    const navigate = useNavigate()

    //Delete workout functionality. 
    function deleteHandler() {
        deleteWorkout(id)
        navigate('/dashboard')
    }

    //if workout belongs to user, then load the workout details. 
    if(showWorkout.show === 'loading') {
        return null 
    } else if (!showWorkout.show) {
        return (
            <WorkoutCardFlex jc="center"><h1>Not Found</h1></WorkoutCardFlex>
        )
    } else if (showWorkout.show) {
        return (
            <WorkoutCardContainer ai="center" border="1px solid black">
            <img src={categories[category_id].src} alt={'Type of workout'} />
            <WorkoutCardFlex fd='column' fb="50%" ta='left'>
                <div><h4>DATE: </h4><p>{date}</p></div>
                <div><h4>TYPE: </h4><p>{categories[category_id].name}</p></div>
                <div><h4>DURATION: </h4><p>{time} minutes</p></div>
                {category_id === 2 || category_id === 3 ? (<div><h4>DISTANCE: </h4><p>{distance}</p></div>) : null }
                {avg_bpm !== '' ? (<div><h4>AVERAGE BPM: </h4><p>{avg_bpm}</p></div>) : null }
                {description !== '' ? (<div><h4>DESCRIPTION: </h4><p>{description}</p></div>) : null }
            </WorkoutCardFlex>
                <WorkoutCardFlex fd="column" ai="flex-end" jc='center' style={{height: "100%"}}>
                    <Link to={`/dashboard/update/${id}`}><button>UPDATE</button></Link>
                    <button onClick={deleteHandler}>DELETE</button>
                </WorkoutCardFlex>
        </WorkoutCardContainer>
        )
    }
}
