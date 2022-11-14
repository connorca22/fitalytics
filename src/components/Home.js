import HomeNav from "./homeComponents/HomeNav"
import {Container, Flex} from "./styled/Container.styled"
import HomeHeader from "./homeComponents/HomeHeader"
import AppFeatures from "./homeComponents/AppFeatures"
import Join from "./homeComponents/Join"
import Contact from "./homeComponents/Contact"

export default function Home() {
    return (
        <>
            <HomeNav />
            <HomeHeader />
            <AppFeatures />
            <Join />
            <Contact />
        </>
    )
} 