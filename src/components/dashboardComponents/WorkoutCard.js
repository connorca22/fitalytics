import { useState } from "react";
import { WorkoutCardFlex, WorkoutCardContainer } from "../styled/Dashboard.styled";
import {Link} from 'react-router-dom'
import { categories } from "../../config/categoryData";


//Used in Dashboard to generate a list of all workouts as sequential cards. 
//Dashboard gets list of workouts from api call, then maps through them generating Workout cards and passing in details as props. 

export default function WorkoutCard({workout}) {

    const {category_id, date, avg_bpm, time, distance, description, id} = workout;


        return (
            <WorkoutCardContainer ai="center" border="1px solid black" margin="1.5% 3%">
                <img src={categories[category_id].src} />
                <WorkoutCardFlex fd='column' fb="50%" ta='left'>
                    <div><h4>DATE: </h4><p>{date}</p></div>
                    <div><h4>TYPE: </h4><p>{categories[category_id].name}</p></div>
                    <div><h4>DURATION: </h4><p>{time} minutes</p></div>
                    {category_id === 2 || category_id === 3 ? (<div><h4>DISTANCE: </h4><p>{distance}km</p></div>) : null }
                    {avg_bpm !== '' ? (<div><h4>AVERAGE BPM: </h4><p>{avg_bpm}</p></div>) : null }
                    {description !== '' ? (<div><h4>DESCRIPTION: </h4><p>{description}</p></div>) : null }
                </WorkoutCardFlex>
                <Link to={`/dashboard/${id}`}><button>DETAILS</button></Link>
        </WorkoutCardContainer>
        )
    }

