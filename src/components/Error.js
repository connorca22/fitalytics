import { SectionWrapper } from "./styled/Container.styled";

//404 page. Loads when user navigates to a page that doesn't exist
export default function Error() {
    return (
        <SectionWrapper>
            <h1 style={{marginTop: "60px"}}>404...Oops, this page doesn't exist.</h1>
        </SectionWrapper>
    )
} 