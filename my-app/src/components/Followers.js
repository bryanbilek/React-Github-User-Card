import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from 'styled-components';

function Followers (props) {
        return(
            <div className="followers">
                <h1>Followers: </h1>
                {props.myFollowers.map(follower => {
                    return(
                    <Card1>
                    <CardImg1 top width="100%" src={follower.avatar_url} alt="avatar" />
                    <CardBody>
                      <CardTitle>Username: {follower.login}</CardTitle>
                      <CardSubtitle>Followers: {follower.followers_url.length}</CardSubtitle>
                      <CardSubtitle>Following: {follower.following_url.length}</CardSubtitle>
                    </CardBody>
                  </Card1>
                    )
                })}
            </div>
        )
}

const Card1 = styled.div`
border: 5px solid orange;
background-color: darkblue;
color: white;
margin: 2% 0;
`

const CardImg1 = styled.img`
width: 20%;
padding-top: 2%;
border-radius: 50%;
`

export default Followers;