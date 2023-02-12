import React, { useState } from 'react';
import Navbar from './Navbar';
import MemberGrid from './MemberGrid';
import { members } from './members';

const Community = () => {
    const styleobj = 
    {overflow: 'scroll',width:'200vw',position: 'absolute',
    color: 'black',
    top:'0',
    bottom: '0',
    left: '0',
    right:'0',
    margin: '100px 0px 0px 60px'};
  return (
    <>
    <Navbar/>
    <div className="container" style={styleobj}>
      <h1>Our Community</h1>
      <MemberGrid members={members} />
    </div>
    </>
  );
};

export default Community;
