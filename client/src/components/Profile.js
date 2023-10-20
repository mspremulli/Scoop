import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  text-align: center;
  font-family: 'Varela Round';
  padding: 20px;
  width: 50vw;
  max-width: 50vw;
  min-width: 40vw;
  height: 79vh;
  max-height: 79vh;
  margin-top: 9vh;
  margin-left: 10vw;
  border-radius: 15px;
  background: linear-gradient(to bottom, #001F23, transparent);
  background-color: rgba(204, 204, 204, 0.2);
`;


const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 40px;
  margin-bottom: 20px;
  border: 3px solid #001F23;
  box-shadow: 0 0 20px #00FF85;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
  color: #00FF85;
`;

const ProfileUsername = styled.h3`
  font-size: 1.5rem;
  color: #ccc;
  margin: 10px 0;
`;

const ProfileBio = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-top: 40px;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 20px;
  color: #ccc;
`;

const InfoItem = styled.div`
  margin: 0 10px;
`;

const EditProfileButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00ad14;
  color: #fff;
  text-decoration: none;
  margin-top: 25px;
  border: 1px solid #001F23;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00FF85;
  }
`;

function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage
        src="https://placekitten.com/150/150"
        alt="Profile Image"
      />
      <ProfileName>Your Name</ProfileName>
      <ProfileUsername>@yourusername</ProfileUsername>
      <ProfileBio>
        Web Developer | Sports Fan | Coffee Lover
      </ProfileBio>
      <ProfileInfo>
        <InfoItem>
          <strong>Friends</strong> <br /> 115
        </InfoItem>
        <InfoItem>
          <strong>Past Events</strong> <br /> 23
        </InfoItem>
        <InfoItem>
          <strong>News Posts</strong> <br /> 220
        </InfoItem>
      </ProfileInfo>
      <EditProfileButton to="/questions">View Full Profile</EditProfileButton>
    </ProfileContainer>
  );
}

export default Profile;
