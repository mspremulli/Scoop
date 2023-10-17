import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
`;

const ProfileUsername = styled.h3`
  font-size: 1.5rem;
  color: #777;
  margin: 10px 0;
`;

const ProfileBio = styled.p`
  font-size: 1.2rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const InfoItem = styled.div`
  margin: 0 10px;
`;

function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage
        src="https://placekitten.com/150/150" // Replace with your profile image URL
        alt="Profile Image"
      />
      <ProfileName>Your Name</ProfileName>
      <ProfileUsername>@yourusername</ProfileUsername>
      <ProfileBio>
        Web Developer | React Enthusiast | Coffee Lover
      </ProfileBio>
      <ProfileInfo>
        <InfoItem>
          <strong>Followers</strong> <br /> 1000
        </InfoItem>
        <InfoItem>
          <strong>Following</strong> <br /> 500
        </InfoItem>
        <InfoItem>
          <strong>Posts</strong> <br /> 200
        </InfoItem>
      </ProfileInfo>
      <button>Edit Profile</button>
    </ProfileContainer>
  );
}

export default Profile;