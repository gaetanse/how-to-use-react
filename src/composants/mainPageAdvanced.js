import {Component} from "react"
import {Button,Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import {BrowserRouter,Routes,Route} from "react-router-dom"
export class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <BrowserRouter>
            <Navbar onse bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="">How-to-use-react</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/advanced">Advanced</Nav.Link>
                    <Nav.Link href="">Components</Nav.Link>
                    <Nav.Link href="">Jsx</Nav.Link>
                    <Nav.Link href="">Render</Nav.Link>
                    <Nav.Link href="">Lifecycle</Nav.Link>
                    <Nav.Link href="">State</Nav.Link>
                    <Nav.Link href="">Hook</Nav.Link>
                    <Nav.Link href="">Event</Nav.Link>
                    <Nav.Link href="">Conditional rendering</Nav.Link>
                    <Nav.Link href="">Lists and keys</Nav.Link>
                    <Nav.Link href="">Form</Nav.Link>
                    <Nav.Link href="">Router-dom</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar onse bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="">Advanced</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/advanced">Advanced</Nav.Link>
                    <Nav.Link href="">Components</Nav.Link>
                    <Nav.Link href="">Jsx</Nav.Link>
                    <Nav.Link href="">Render</Nav.Link>
                    <Nav.Link href="">Lifecycle</Nav.Link>
                    <Nav.Link href="">State</Nav.Link>
                    <Nav.Link href="">Hook</Nav.Link>
                    <Nav.Link href="">Event</Nav.Link>
                    <Nav.Link href="">Conditional rendering</Nav.Link>
                    <Nav.Link href="">Lists and keys</Nav.Link>
                    <Nav.Link href="">Form</Nav.Link>
                    <Nav.Link href="">Router-dom</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<div></div>}></Route>
            </Routes>
        </BrowserRouter> 
        )
    }
}