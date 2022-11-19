import {Container} from "react-bootstrap"
import {Menu} from "../component/Menu"


export  function Home () {
    return(
    <>
    <Container className="bg-light">
        <h1>Home</h1>
        <Menu/>
    </Container>
    </>
    )
}