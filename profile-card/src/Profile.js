import React from 'react';
import './Profile.css';
import ProfileImage from './Images/messages-1.jpg';

const Profile = ({ name, description }) => {
  return (<>
    <div className='container'>
      <div className='content'>
        <div className='image-container'>
          <Image image={ProfileImage} />
        </div>
        <IntoData
          name={name}
          description={description}
        />
        <div className='languages'>
          <SkillList />
        </div>
      </div>
    </div>
    </>
  );
};

function Image(props) {
  return (
    <>
      <img className='image' src={props.image} alt='Profile' />
    </>
  );
}

const IntoData = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </>
  );
};

const SkillList = () => {
  return (
    <div className='skills'>
      <p>HTML</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>Web Design</p>
      <p>Python</p>
    </div>
  );
};

const ProfileList = () => {
  const profiles = [
    { name: 'Jasen Duro', description: 'The purpose of a paragraph is to express a speaker\'s ' },
    { name: 'John Doe', description: 'A different paragraph describing John Doe\'s profile and interests.' },
    { name: 'Jane Smith', description: 'Another different paragraph describing Jane Smith\'s profile and interests.' },
  ];

  return (
    <div className='profile-list'>
      {profiles.map((profile, index) => (
        <Profile key={index} name={profile.name} description={profile.description} />
      ))}
    </div>
  );
};

export default ProfileList;
