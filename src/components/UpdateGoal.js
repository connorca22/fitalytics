
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import API call method from GoalServices (create)
import { SectionWrapper, Container, Flex } from "./styled/Container.styled";
import { FormInputFlex } from "./styled/Dashboard.styled";

const UpdateGoal = () => {
    const initialState = {
        weekly_goal: 0
    }
    const [weeklyGoal, setWeeklyGoal] = useState(initialState)


    function onInputChange(event) {
        setWeeklyGoal({
            ...weeklyGoal,
            [event.target.name]: event.target.value
        })
    }


    const navigate = useNavigate()

    function onFormSubmit(event) {
        event.preventDefault()
        //nameOfApiCall(nameOfData)
        .then(() => {
            navigate('/dashboard')
        })
    }



    return (
        <SectionWrapper marginTop="60px">
            <Container>
                <Flex fd="column" border="1px solid black" margin="0px 15%" >
                    <h1 style={{padding: "5%"}}>Update Goal</h1>
                    <form onFormSubmit={onFormSubmit}>
                        <FormInputFlex jc='space-around' style={{flexWrap: "wrap"}} width="80%">
                            <h3>Weekly Goal</h3>
                            <input type="number" name="weekly_goal" id="weekly_goal" onInputChange={onInputChange} min="1" max="7" placeholder="1-7 Workouts" required />  
                        </FormInputFlex>
                        <FormInputFlex jc="center" style={{border: 'none'}}>
                            <input type="submit" value="SUBMIT" style={{margin: '2% 0'}}/>  
                        </FormInputFlex>
                    </form>
                </Flex>
            </Container>
        </SectionWrapper>
    )
};
export default UpdateGoal;


