import './App.css';
import MyNavbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, DropdownButton, Dropdown, ButtonGroup  } from "react-bootstrap";
import React, { useState } from "react";



function App() {
  const [project, setProject] = useState("Select project");
  const [token, setToken] = useState("Total number of tokens available");
  const [carb, setCarb] = useState("Enter total tokens to buy");
  const [benf, setBenf] = useState("Enter name of the beneficiary"); 
  const [add, setAdd] = useState("Enter wallet address"); 
  const [usdc, setUsdc] = useState("Total cost in USDC (Minimum 1USDC)"); 
  
  if (carb==='') setCarb('Enter total tokens to buy')
  if (benf==='') setBenf('Enter name of the beneficiary')
  if (add==='') setAdd('Enter wallet address')

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };
  const handleCarbonChange = (event) => {
    setCarb(event.target.value);
    const val = Math.round(event.target.value*(120/100),2)
    setUsdc('Total cost in USDC (Minimum 1USDC) :- '+val)
  };
  const handleBenfChange = (event) => {
    setBenf(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAdd(event.target.value);
  };
  const handleUSDCChange = (event) => {
    setUsdc(event.target.value);
  };
  const handleProject = (event) => {
    setProject(event)
    console.log(event)
    if (event==='400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)')
    {
      setToken('Total number of tokens available :- 100');
    }
    console.log(token)
  };
  return (
    <div >
      <MyNavbar/>
      <br/><br/>
        <Container>
          <Row>
            <Col>
              <p style={{fontSize:'25px'}}>Buy tokenized carbon credits for web3 projects carbon offset</p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md={6} style={{ border: "1px solid black", padding: "20px"}}>
              <div className="d-flex flex-column justify-content-between">

              <DropdownButton 
              as={ButtonGroup}
              variant="secondary"
              id="dropdown-menu-align-responsive-1"
              style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
              title={project} onSelect={handleProject}>
                <Dropdown.Item eventKey='400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)'>400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)</Dropdown.Item>
              </DropdownButton>

                <input className="text-center" value={token} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleTokenChange} disabled />

                <input className="text-center" placeholder={carb} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleCarbonChange}/>

                <input className="text-center"  placeholder={benf}
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleBenfChange}/> 

                <input className="text-center" placeholder={add} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleAddressChange}/> 

                <input className="text-center" value={usdc} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleUSDCChange} disabled /> 

              </div>
              
            </Col>
            <Col md={1}>
            </Col>
            <Col md={5} style={{ border: "1px solid black", padding: "20px"}}>
            <p style={{fontSize:'23px'}}>What is Carbonfile</p>
            <ul style={{fontSize:'13px'}}>
                <li>Carbonfile buys carbon credits from gold standard</li>
                <li>Converts the credits into tokens using blockchain</li>
                <li>Web3 projects building on NFT's, Metaverse can retire carbon offset by buying these tokens</li>
                <li>Carbon credit certificate (NFT) transferred to the token buyers as a proof of carbon offset</li>
                <li>Equal amount of tokens are burnt to avoid double counting</li>
              </ul>
            
            </Col>
            
          </Row>
          <br/>
          <Row>
          <Col md={6} >
          <div className="d-grid gap-2">
      <Button variant="primary" size="lg"
      style={{backgroundColor: '#444444', color: '#c0c0c0', borderColor:'#232323', borderRadius: '3px'}}>
        Buy Carbon Credits
      </Button>
      </div>
          </Col>
          <Col md={1}></Col>
          <Col><div>

            <p
      style={{marginBottom: "2px",fontWeight:'bold',fontSize:'12px', color: '#232323'}}
            >Celo-Alfajores Address</p>
            <p
      style={{marginBottom: "4px",fontSize:'10px', color: '#232323'}}
            >
              token : 0xF856d4B76Fba58A870eCAd6230D338ff726e8e02
            certificate : 0x16Eb7560b9DB447990bC6171d6dCce6fEeA5aA67
            </p>


            <p
      style={{marginBottom: "2px",fontWeight:'bold',fontSize:'12px', color: '#232323'}}
            >Polygon Mumbai Address</p>
            <p
      style={{marginBottom: "2px",fontSize:'10px', color: '#232323'}}
            >
              token : 0x91D17B6Dc4BeCA5eb24eB8864EE59C89EC4bc543
            certificate : 0x89e79AdBAcFD319Ae587Dd14cD268d798243614e
            </p>
            
            </div></Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
