import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CandidateDashHeader = (props) => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Link exact to="/candidateDashboard">  <Navbar.Brand href="#home">Interview Board</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/candidateDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    {/* <Link to="/candidateDashboard/myApplications"> <Nav.Link href="#features">My Applications</Nav.Link></Link> */}
                    <Link to="/candidateDashboard/uploadBannerFile"> <Nav.Link href="#features">Upload Resume</Nav.Link></Link>
                    <Link to="/candidateDashboard/interviewWebConference"> <Nav.Link href="#features">Join Interview Conference</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default CandidateDashHeader
