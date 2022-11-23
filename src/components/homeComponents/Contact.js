import { useState } from "react"
import { Container, Flex, SectionWrapper } from "../styled/Container.styled"
import { Form} from "../styled/Home.styled"

//Contact form used in Home.js. Still need to connect to email service to make form functional. 

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
        <SectionWrapper bg="#EBE8E0">
            <Container>
                <Flex fd="column" ai="center" jc="space-around">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>GET IN TOUCH</h1>
                    <p style={{margin: "15px 15px", marginBottom: "15px", width: "70%"}}>Have a question for us about Fitalytics? Want to provide some feedback on the app? Whatever it is, we'd love to hear from you! Reach out to the team with your email and enquiry, and we'll get back in touch within 7 days. Make sure to check your spam folder if you haven't received a response.</p>
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