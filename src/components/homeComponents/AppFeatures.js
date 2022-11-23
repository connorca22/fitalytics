import { Container, Flex, SectionWrapper } from "../styled/Container.styled"
import Card from "./Card"
import { FeatureContainer } from "../styled/Home.styled"


export default function AppFeatures() {
    return (
        <SectionWrapper>
            <Container>
                <Flex fd="column">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>WHY FITALYTICS?</h1>
                    <FeatureContainer ai="center" jc="space-around">
                        <Card src="/images/barbellImage.jpg" h4={"Track Workouts"} p={"Record your workout along with relevant metrics"} />
                        <Card src="/images/barbellImage.jpg" h4={"Achieve Goals"} p={"Set weekly workout goals and strive to achieve them"} />
                        <Card src="/images/barbellImage.jpg" h4={"User Rankings"} p={"Build your workout history to climb the user ladder"} />
                        <Card src="/images/barbellImage.jpg" h4={"Stay Consistent"} p={"Utilise a suite of tools to help you workout consistently"} />
                    </FeatureContainer>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}