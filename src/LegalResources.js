import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import { resources } from './resources';

const LegalResources = () => {
  const styleobj = 
  {overflow: 'scroll',width:'200vw',position: 'absolute',
  color: 'black',
  top:'0',
  bottom: '0',
  left: '0',
  right:'0',
  margin: '100px 0px 0px 60px'};

  const getColumnsForRow =()=>{
    let items = resources.map((resource, index) => {
      return ( 
        <Col style={{marginBottom: '10px'}}>
        <Card style={{ height: '100%' }} key={resource.id}>
        <Card.Body>
          <Card.Title>{resource.title}</Card.Title>
          <Card.Text>
            {resource.content}
          </Card.Text>
          <Card.Link href={resource.src}>Learn More</Card.Link>                 
        </Card.Body>
      </Card>
    </Col>
      );

  });
  return items;
};

  return (
    <div>
        <Navbar/>
        <Container style={styleobj}>
          <Row xs={1} md={3}>
             {getColumnsForRow()}
          </Row>
        </Container>  
    </div>
  );
};

export default LegalResources;
