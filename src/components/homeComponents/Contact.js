import { useState } from "react"
import { Container, Flex } from "../styled/Container.styled"
import { SectionWrapper, Form} from "../styled/Home.styled"

export default function Contact() {
    
    const initialState = {
        email: "",
        enquiry: ""
    }
    const [formData, setFormData] = useState(initialState)

    function onInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // FIX: submit form to email service. 
    function onFormSubmit(event) {
        console.log(formData.email)
        console.log(formData.enquiry)
        event.preventDefault()
    }

    return (
        <SectionWrapper>
            <Container bg="pink">
                <Flex fd="column" ai="center" jc="space-around">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>GET IN TOUCH</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px", width: "70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Form onSubmit={onFormSubmit}>  
                        <input type="text" name="email" id="email" value={formData.email} onChange={onInputChange} placeholder="Email"></input>
                        <textarea name="enquiry" id="enquiry" value={formData.enquiry} onChange={onInputChange} placeholder="Enquiry"></textarea>
                        <input type="submit" value="Submit" id="submit"></input>
                    </Form>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}