import { SectionWrapper, Flex, Container } from "../styled/Container.styled"
import { WorkoutForm, FormInputFlex } from '../styled/Dashboard.styled'

export default function ReusableWorkoutForm({onInputChange, onFormSubmit, updateDistance, workoutData}) {


return (
<WorkoutForm onSubmit={onFormSubmit}>
    <Flex fd="column">
    <FormInputFlex jc='space-between'>
        <h3>Date</h3>
        <input type="date" id="date" name="date" max={new Date().toISOString().split("T")[0]} onChange={onInputChange} defaultValue={workoutData.date} required/>
    </FormInputFlex>
    <FormInputFlex jc='space-between'> 
        <h3>Type</h3>
        <select id="category_id" name="category_id" onChange={onInputChange} value={String(workoutData.category_id)} required>
                                <option value="" disabled selected hidden>Select Option</option>
                                <option value="1">Weights</option>
                                <option value="2">Swimming</option>
                                <option value="3">Running</option>
                                <option value="4">HIIT</option>
                            </select>
                            </FormInputFlex>
                            <FormInputFlex jc='space-between'>
                                <h3>Duration</h3>
                                <input type="number" id="time" name="time" min="0" max="1440" placeholder="(Minutes)" onChange={onInputChange}  defaultValue={workoutData.time}  required />
                            </FormInputFlex>
                            {workoutData.category_id == "2" || workoutData.category_id == "3" ? (
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
                                <input type="number" id="avg_bpm" name="avg_bpm" min="30" max="220" placeholder="e.g 140" onChange={onInputChange} defaultValue={workoutData.avg_bpm}/>
                            </FormInputFlex>
                            <FormInputFlex>
                                <textarea id="description" name="description" onChange={onInputChange} placeholder="Description" rows={4} defaultValue={workoutData.description}/>
                            </FormInputFlex>
                            <FormInputFlex jc="center" style={{border: 'none'}}>
                                <input type="submit" value="SUBMIT"/>
                            </FormInputFlex>
                        </Flex>
                    </WorkoutForm>
    )
}