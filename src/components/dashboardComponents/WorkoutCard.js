import { Flex } from "../styled/Container.styled"
import { WorkoutCardFlex } from "../styled/Dashboard.styled";
import {Link} from 'react-router-dom'


export default function WorkoutCard({workout}) {

    const {category_id, date, avg_bpm, time, distance, description} = workout;

    const categories = {
        1: {
            name: 'Weights',
            src: '/images/weights.jpg'
        },
        2: {
            name: 'Swimming',
            src: '/images/swimming.jpg'
        },
        3: {
            name: 'Running',
            src: '/images/running.jpg'
        },
        4: {
            name: 'HIIT',
            src: '/images/HIIT.jpg'
        }
    }

    return (
        <WorkoutCardFlex ai="center" border="1px solid black">
            <img src={categories[category_id].src} />
            <WorkoutCardFlex fd='column' fb="60%" ta='left'>
            <div><h4>DATE: </h4><p>{date}</p></div>
            <div><h4>TYPE: </h4><p>{categories[category_id].name}</p></div>
            <div><h4>DURATION: </h4><p>{time}</p></div>
            {category_id === 2 || category_id === 3 ? (<div><h4>DISTANCE: </h4><p>{distance}</p></div>) : null }
            {avg_bpm !== '' ? (<div><h4>AVERAGE BPM: </h4><p>{avg_bpm}</p></div>) : null }
            <div><h4>DESCRIPTION: </h4><p>{description}</p></div>
            <div style={{alignSelf: "flex-end"}}><Link>See Details</Link></div>
            </WorkoutCardFlex>
        </WorkoutCardFlex>
    )
}

