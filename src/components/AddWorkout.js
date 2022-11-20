import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionWrapper, Flex, Container } from "./styled/Container.styled"
import { WorkoutForm, FormInputFlex } from './styled/Dashboard.styled'
import { createWorkout } from '../services/workoutService'


export default function AddWorkout() {

    const initialState = {
        date: "",
        category_id: "",
        time: "",
        description: "",
        distance: "",
        avg_bpm: ""
    }
    const [workoutData, setWorkoutData] = useState(initialState)


    function onInputChange(event) {
        setWorkoutData({
            ...workoutData,
            [event.target.name]: event.target.value
        })
    }

    var workoutDist = ['', '']
    function updateDistance(event) {
        if (event.target.id === 'kilometres') {workoutDist[0] = event.target.value}
        if (event.target.id === 'metres') {workoutDist[1] = event.target.value}
        if(workoutDist[0] !== '' && workoutDist[1] !== '') {
        setWorkoutData({
            ...workoutData,
            distance: `${workoutDist[0]}km ${workoutDist[1]}m`
        })
    }
    }


    const navigate = useNavigate()

    function onFormSubmit(event) {
        event.preventDefault()
        createWorkout(workoutData)
        .then(() => {
            navigate('/dashboard')
        })
        console.log(workoutData)
    }



    return (
        <SectionWrapper marginTop="60px">
            <Container>
                <Flex fd="column" border="1px solid black" margin="0px 15%">
                    <h1 style={{paddingTop: "15px"}}>Add Workout</h1>
                    <WorkoutForm onSubmit={onFormSubmit}>
                        <Flex fd="column">
                            <FormInputFlex jc='space-between'>
                                <h3>Date</h3>
                                <input type="date" id="date" name="date" max={new Date().toISOString().split("T")[0]} onChange={onInputChange} required/>
                            </FormInputFlex>
                            <FormInputFlex jc='space-between'> 
                            <h3>Type</h3>
                            <select id="category_id" name="category_id" onChange={onInputChange} required>
                                <option value="" disabled selected hidden>Select Option</option>
                                <option value="1">Weights</option>
                                <option value="2">Swimming</option>
                                <option value="3">Running</option>
                                <option value="4">HIIT</option>
                            </select>
                            </FormInputFlex>
                            <FormInputFlex jc='space-between'>
                                <h3>Duration</h3>
                                <input type="number" id="time" name="time" min="0" max="1440" placeholder="(Minutes)" onChange={onInputChange} required />
                            </FormInputFlex>
                            {workoutData.category_id === "2" || workoutData.category_id === "3" ? (
                            <FormInputFlex jc='space-between'>
                                <h3>Distance</h3>
                                <Flex fd="column" style={{minWidth: "20%", marginRight: "5%"}}>
                                    <input type="number" id="kilometres" name="kilometres" min="0" max="1000" placeholder="0 KM" onChange={updateDistance} required />
                                    <input type="number" id="metres" name="metres" min="1" max="999" placeholder="0 M" onChange={updateDistance} required />
                                </Flex>
                            </FormInputFlex>
                            ) : null 
                            }
                            <FormInputFlex jc='space-between'>
                                <h3>Average BPM</h3>                        
                                <input type="number" id="avg_bpm" name="avg_bpm" min="30" max="220" placeholder="e.g 140" onChange={onInputChange}/>
                            </FormInputFlex>
                            <FormInputFlex>
                                <textarea id="description" name="description" onChange={onInputChange} placeholder="Description" rows={4}/>
                            </FormInputFlex>
                            <FormInputFlex jc="center" style={{border: 'none'}}>
                                <input type="submit" value="SUBMIT"/>
                            </FormInputFlex>
                        </Flex>
                    </WorkoutForm>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}
