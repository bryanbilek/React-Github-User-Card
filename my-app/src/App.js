import React from 'react';
import './App.css';
import axios from 'axios';
import Followers from './components/Followers';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';

class App extends React.Component {
  
  state = {
    myCard: {},
    myFollowers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bryanbilek')
    .then(res => {
      console.log(res.data)
      this.setState({
        myCard: res.data
      })
    })
    .catch(err => console.log('bilek-card err', err));

    axios.get('https://api.github.com/users/bryanbilek/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        myFollowers: res.data
      })
    })
    .catch(err => console.log('followers err', err))
  }

  render() {
  return (
    <div className="App">
      <h1>Github UserCard Project</h1>
      <Card1>
        <CardImg1 top width="100%" src={this.state.myCard.avatar_url} alt="my profile avatar" />
        <CardBody>
          <CardTitle>Name: {this.state.myCard.name}</CardTitle>
          <CardSubtitle>Location: {this.state.myCard.location}</CardSubtitle>
          <CardSubtitle>Bio: {this.state.myCard.bio}</CardSubtitle>
        </CardBody>
      </Card1>

        <Followers myFollowers={this.state.myFollowers}/>
       </div>
  );
  }
}

const Card1 = styled.div`
border: 5px solid orange;
background-color: darkblue;
color: white;
margin-bottom: 2%;
`

const CardImg1 = styled.img`
width: 20%;
padding-top: 2%;
border-radius: 50%;
`

export default App;
