import { SectionWrapper, Container, Flex } from "./styled/Container.styled";

//404 page. Loads when user navigates to a page that doesn't exist
export default function Error() {
    return (
        <SectionWrapper height="100%" bg="#A8BBB0">
            <Container>
                <Flex jc="center" margin="5% 0">
                    <h1 style={{marginTop: "60px"}}>404...Oops, this page doesn't exist.</h1>
                </Flex>
            </Container>
        </SectionWrapper>
    )
} 