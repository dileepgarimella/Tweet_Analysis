import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, InputGroup, FormControl, FormGroup, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function App() {
  const [keyword, setKeyword] = useState('')
  const [flag, setFlag] = useState(false)
  const [navlink,setNavlink]=useState(true)

  const [state,setState]=useState({labels: ['January', 'February', 'March','April', 'May'],datasets: [
{
label: 'Rainfall',
backgroundColor: 'rgba(75,192,192,1)',
borderColor: 'rgba(0,0,0,1)',
borderWidth: 2,
data: [65, 59, 80, 81, -56]
}
]})

  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Twitter</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>setNavlink(true)}>Home</Nav.Link>
              <Nav.Link onClick={()=>setNavlink(false)}>Overview Analytics</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {navlink &&
      <div>
      <div className={flag ? 'top-screen' : 'center-screen'}>
    
        <FormGroup style={{width:"100%",display:'flex',marginLeft:'5em',marginTop:'1em'}}>
          <InputGroup className="mb-3" style={{ width: flag?'30%':'80%',height:"70%" }}>
            <FormControl
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button style={{ marginLeft: '10px', width: "6em", height: '2.4em' }} onClick={() => setFlag(true)}>Search</Button>
         
         {flag &&<div style={{display:'flex',marginLeft:'6%'}}>
          <Form.Group style={{display:'flex'}}>
            <Form.Label>POI</Form.Label>
            <Form.Select defaultValue="Choose..." style={{height:'70%',marginLeft:'0.5em',marginRight:'0.5em'}}>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group  style={{display:'flex'}}>
            <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose..." style={{height:'70%',marginLeft:'0.5em',marginRight:'0.5em'}}>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group  style={{display:'flex'}}>
            <Form.Label>Topic</Form.Label>
            <Form.Select defaultValue="Choose..." style={{height:'70%',marginLeft:'0.5em'}}>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          </div>
         }
        </FormGroup>
       
      </div>


      {flag && <Container>

        <Row>
          <Col >
            <b>Tweets Search Results</b>
            <hr></hr>
          </Col>
          <Col >
            <b>News Search Results</b>
            <hr></hr>
          </Col>
          <Col>
            <b> Search Results Analysis</b>
            <hr></hr>
            
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
          </Col>
        </Row>
      </Container>
      }
      </div>
}
    </div>
  );
}

export default App;
