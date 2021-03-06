import React from 'react'
import styled from "styled-components";
import { GoOrganization, GoPerson, GoLocation} from "react-icons/go";
import Landing from "../Landing";
import {BeatLoader} from 'react-spinners';
//import theme from '../../styles/theme';
// pass the oprops down from the app component  
const UserProfile = ({profile, loading}) => {

  


  if (profile.length === 0) {
    return (<Landing />);
  }

  if (loading === true){
    return(<BeatLoader/>)
  }
 

    return (
        <Profile>
   
      <h1>{profile.name} </h1>
      <p><a href = {profile.url}> {profile.login}</a></p>

      <ProfileImage src = {profile.avatar_url}  alt = "github User profile" loading = "lazy" /> 

      <IconWrap>
     <FollowsWrapper>
      <FollowItem><GoOrganization color = "777763"/>  {profile.followers} followers</FollowItem>
      <FollowItem><GoPerson color = "777763" />  {profile.following} following</FollowItem>
    
   
      </FollowsWrapper>
      <Location>
        <GoLocation color = "777763" /> {profile.location}
        </Location>
</IconWrap>
        </Profile>
    )
}

export default UserProfile


const Profile = styled.div`

display:flex; 
align-items:center;
justify-content:center;
flex-direction:column;
h1 {
  font-family: Calibre;
    font-weight: 600;
  color:#777763;
  font-size:3em;

}

p{
  font-family: "SF Mono";
    font-weight: 400;
    font-size:20px;
  color:#777763;
  padding-bottom:1em;
 a:visted{
   color:#777763;
 };

 a:hover{

  color:red;

 }
}



`



const ProfileImage = styled.img`

 width: 100%;
  max-width: 350px;

  overflow: hidden;
position:relative;
left:20px;
  border-radius: 50%;

  ;

`;


const FollowsWrapper = styled.div`
display:flex;
flex-direction:row;
padding-top:2em`;

const FollowItem = styled.p`
padding:1em;


`;

const Location = styled.p`
padding:2em;
text-align:center;`;

const IconWrap = styled.div``;