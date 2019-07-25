import React from 'react';

const HomePage = ({ updateTitle, updateMenuVisibility }) => {
  updateMenuVisibility(false);
  updateTitle('Home Page');
  return <h1>this is home page</h1>;
};

export default HomePage;
