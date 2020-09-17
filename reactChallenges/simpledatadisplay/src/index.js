import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './index.css';
// import src from '*.bmp';



/**
 * Our data
 * ------------------------
 */
const user = {
  name: 'James Halstead',
  location: 'Spokane',
  foodType: 'Everything',
  age: 38,
  likes: 'Traveling and learning code',
  LinkedInUsername: 'James on linkedIn'
  
    
};





function App() {
  const url = `https://www.linkedin.com/in/james-halstead-a5b2a836/${user.LinkedInUsername}`
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
      <img src='./Bohol_250x250.jpg' />
        <h3><a href={url}>{user.name}</a></h3>
          <p>
            <strong>Location</strong>
            {user.location}</p>
          <p>
            <strong>Eats</strong>
            {user.foodType}
          </p>
          <p>
            <strong>Age</strong>
            {user.age}
          </p>
          <p>
            <strong>Likes</strong>
            {user.likes}
          </p>
          <p>
            <strong>LinkedIn</strong>
            <a href={url}>@{user.LinkedInUsername}</a>
          </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

