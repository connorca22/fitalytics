import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { WorkoutCardFlex } from "../styled/Dashboard.styled";
import {Link} from 'react-router-dom'
import { getUser } from "../../services/authServices";
import { deleteWorkout } from "../../services/workoutService";
import { categories } from "../../config/categoryData";


export default function SingleWorkout({workout}) {

    const {category_id, date, avg_bpm, time, distance, description, id, user_id} = workout;

    const initialValue = {show: 'loading'}
    const [showWorkout, setShowWorkout] = useState(initialValue)

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

    function deleteHandler() {
        deleteWorkout(id)
        navigate('/dashboard')
    }

    if(showWorkout.show === 'loading') {
        return null 
    } else if (!showWorkout.show) {
        return (
            <WorkoutCardFlex jc="center"><h1>Not Found</h1></WorkoutCardFlex>
        )
    } else if (showWorkout.show) {
        return (
            <WorkoutCardFlex ai="center" border="1px solid black">
            <img src={categories[category_id].src} />
            <WorkoutCardFlex fd='column' fb="50%" ta='left'>
                <div><h4>DATE: </h4><p>{date}</p></div>
                <div><h4>TYPE: </h4><p>{categories[category_id].name}</p></div>
                <div><h4>DURATION: </h4><p>{time} minutes</p></div>
                {category_id === 2 || category_id === 3 ? (<div><h4>DISTANCE: </h4><p>{distance}</p></div>) : null }
                {avg_bpm !== '' ? (<div><h4>AVERAGE BPM: </h4><p>{avg_bpm}</p></div>) : null }
                {description !== '' ? (<div><h4>DESCRIPTION: </h4><p>{description}</p></div>) : null }
            </WorkoutCardFlex>
                <WorkoutCardFlex ai="flex-end" style={{height: "100%"}}>
                    <Link to={`/dashboard/update/${id}`}><button>Update</button></Link>
                    <button onClick={deleteHandler}>Delete</button>
                </WorkoutCardFlex>
        </WorkoutCardFlex>
        )
    }
}
