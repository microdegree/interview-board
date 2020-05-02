import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CompanyDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/companyDashboard">  <Navbar.Brand href="#home">Interview Board</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/companyDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/companyDashboard/uploadProjectImage"> <Nav.Link href="#features">Create Openings</Nav.Link></Link>
                    <Link to="/companyDashboard/showProjects"> <Nav.Link href="#features">My Openings</Nav.Link></Link>
                    <Link to="/companyDashboard/interviewWebConfCorp"> <Nav.Link href="#features">Start Interview Conference</Nav.Link></Link>

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

export default CompanyDashHeader
