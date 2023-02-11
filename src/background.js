import React from 'react';

const Background = () => {
  const styles = {
    backgroundImage: 'url(../assests/background.png)',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return <div style={styles} />;
};

export default Background;
