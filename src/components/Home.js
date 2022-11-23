import HomeNav from "./homeComponents/HomeNav"
import {Container, Flex} from "./styled/Container.styled"
import HomeHeader from "./homeComponents/HomeHeader"
import AppFeatures from "./homeComponents/AppFeatures"
import Join from "./homeComponents/Join"
import Contact from "./homeComponents/Contact"
import FooterNav from "./homeComponents/FooterNav"

//Home page. Loads in components from homeComponents directory
export default function Home() {
    return (
        <>
            <HomeHeader />
            <AppFeatures />
            <Join />
            <Contact />
        </>
    )
} 