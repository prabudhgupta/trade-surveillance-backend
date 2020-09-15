import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table2 from './TableComp'
import FormComp from './FormComp';
import RadioComp from './RadioComp'
import { Header } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button'

class App extends Component {

  state = {
    visible:false
  }

  
  viewForm = (e) => {
    this.setState({
      visible:true
    })
  }

  render()
  {
   
  return (
    <div >
    <div className="App">
    <div></div>
    <Header as='h2'> Trade Surveillance System</Header>
    <div></div>
    <br/>
    <br/>
    <Table2 />
    <br/>
    <br/>
    <Button variant="secondary"> Front Running Scenario 1 </Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="secondary">Front Running Scenario 2</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="secondary">Front Running Scenario 3</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="secondary">Wash Trade</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <br/>
    <br/>
    <Button onClick={this.viewForm} variant="secondary">Enter a Trade</Button>&nbsp;&nbsp;&nbsp;&nbsp;
       
    </div>
    <div className="App">
    
      <br/>

      {this.state.visible ? <RadioComp /> : null}
    </div>
    </div>
  );
}
}
export default App;
