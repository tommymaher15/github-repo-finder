import React from 'react'
import styled from "styled-components";


// pass the oprops down from the app component  
const UserProfile = ({profile}) => {

  // blank display until request is made. LETS GO 
if (!profile |profile.length === 0 ) return null;

    return (
        <Profile>

      <h1>{profile.name} </h1>
      <h2>{profile.login}</h2>

      <ProfileImage src = {profile.avatar_url}  alt = "github User profile" loading = "lazy" /> 

     <FollowsWrapper>
      <FollowItem>{profile.followers} followers</FollowItem>
      <FollowItem>{profile.following} following</FollowItem>
      </FollowsWrapper>
        <p>{profile.location}</p>
        </Profile>
    )
}
export default UserProfile


const Profile = styled.div`
display:flex; 
align-items:center;
justify-content:center;
flex-direction:column;



`


const ProfileImage = styled.img`
 position: relative;
  width: 20vw;
  height: 20vw;
  overflow: hidden;
  border-radius: 50%;

`;

const FollowsWrapper = styled.div`
display:flex;
flex-direction:row;`;

const FollowItem = styled.p`
padding:1em;


`;