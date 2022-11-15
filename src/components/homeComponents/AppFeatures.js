import { Container, Flex, SectionWrapper } from "../styled/Container.styled"
import Card from "./Card"


export default function AppFeatures() {
    return (
        <SectionWrapper>
            <Container>
                <Flex fd="column">
                    <h1 style={{marginBottom: "20px", marginTop: "10px"}}>WHY FITALYTICS?</h1>
                    <Flex ai="center">
                        <Card src="/images/barbellImage.jpg" h4={"Track Workouts"} p={"lorem ipsum desante vorgodum telantun mugorvol, lorem ipsum desante vorgodum telantun mugorvol"} />
                        <Card src="/images/barbellImage.jpg" h4={"Set & Achieve Goals"} p={"lorem ipsum desante vorgodum telantun mugorvol, lorem ipsum desante vorgodum telantun mugorvol"} />
                        <Card src="/images/barbellImage.jpg" h4={"Monthly Rankings"} p={"lorem ipsum desante vorgodum telantun mugorvol, lorem ipsum desante vorgodum telantun mugorvol"} />
                        <Card src="/images/barbellImage.jpg" h4={"Earn Trophies"} p={"lorem ipsum desante vorgodum telantun mugorvol, lorem ipsum desante vorgodum telantun mugorvol"} />
                    </Flex>
                </Flex>
            </Container>
        </SectionWrapper>
    )
}