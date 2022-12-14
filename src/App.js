import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Dashboard from "./Dashboard";
import Report from "./Report";
import headerLogo from './images/greenstar-logo.png';
import GroupList from "./explore/GroupList";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import GroupEdit from "./explore/GroupEdit";
import SchoolList from "./explore/SchoolList";
import SchoolEdit from "./explore/SchoolEdit";
import ClassList from "./explore/ClassList";
import ClassEdit from "./explore/ClassEdit";
import SectionList from "./explore/SectionList";
import SectionEdit from "./explore/SectionEdit";
import StudentList from "./explore/StudentList";
import StudentEdit from "./explore/StudentEdit";
import HolidayList from "./explore/HolidayList";
import HolidayEdit from "./explore/HolidayEdit";
import RoleList from "./explore/RoleList";
import RoleEdit from "./explore/RoleEdit";
import PerformanceList from "./explore/PerformanceList";
import "./cssstyles/Common.css";
import "./cssstyles/index.css";
class App extends Component {
  
  // componentDidMount(){
  //   document.getElementById("homeId").style.display="none";
  // }
  render (){
    localStorage.setItem("carousel","carouselId");
    return (
      <Router>
          <div>
            {/* <p>{this.props.match.params.name}</p> */}
            <Navbar expand="lg" bg="dark" variant="dark">
            <a href="/dashboard">  <Navbar.Brand href="/" style={{display: 'flex'}}><img width="250px" src={headerLogo} alt="logo" /></Navbar.Brand></a>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                  <Nav.Link  href="/login">Login</Nav.Link>
                  <Nav.Link  href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link  href="/report">Report</Nav.Link>
                  <NavDropdown  title="Explore" id="basic-nav-dropdown">
                    <NavDropdown.Item  href="/schools">School</NavDropdown.Item>
                    <NavDropdown.Item  href="/grades">Class</NavDropdown.Item>
                    <NavDropdown.Item  href="/sections">Section</NavDropdown.Item>
                    <NavDropdown.Item  href="/groups">Group</NavDropdown.Item>
                    <NavDropdown.Item  href="/students">Student</NavDropdown.Item>
                    <NavDropdown.Item  href="/holidays">Holidays</NavDropdown.Item>
                    <NavDropdown.Item  href="/roles">Roles</NavDropdown.Item>
                    <NavDropdown.Item  href="/performance">Performance</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="dashboard">
              <div id="carouselId">
                <About/>
              </div>
              <Route exact path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/report" component={Report}/>
              <Route path="/groups" component={GroupList}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path='/groups/:id' component={GroupEdit}/>
              <Route path='/schools' component={SchoolList}/>
              <Route path='/schools/:id' component={SchoolEdit}/>
              <Route path='/grades' component={ClassList}/>
              <Route path='/grades/:id' component={ClassEdit}/>
              <Route path='/sections' component={SectionList}/>
              <Route path='/sections/:id' component={SectionEdit}/>
              <Route path='/students' component={StudentList}/>
              <Route path='/students/:id' component={StudentEdit}/>
              <Route path='/holidays' component={HolidayList}/>
              <Route path='/holidays/:id' component={HolidayEdit}/>
              <Route path='/roles' component={RoleList}/>
              <Route path='/roles/:id' component={RoleEdit}/>
              <Route path='/performance' component={PerformanceList}/>
            </div>
            <div>
            <Navbar expand="lg" bg="dark" variant="dark">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                  {/* <Nav.Link href="#">About</Nav.Link> */}
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>
          </div>
      </Router>
    );
  }
}
export default App;