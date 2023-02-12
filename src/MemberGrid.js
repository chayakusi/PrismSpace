import React, {useState} from 'react';
import { Button, Card, Col, CardImg } from 'react-bootstrap';
import avatar from '../src/assets/avatar.webp';

const Member = ({ name, bio, id }) => {
  const [buttonText, setButtonText] = useState('Connect');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleClick = () => {
    setButtonText("Invite Sent");
    setIsButtonDisabled(true);
  }
  return (
    <Col xs={12} md={4} style={{marginBottom: '10px'}}>
      <Card className="mb-4" style={{ width: '350px', height: '350px', backgroundColor: '#fff' }}>
        <CardImg top className="mx-auto d-block text-center" src={avatar} alt="Profile Picture" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginTop: '10px'}} />
        <Card.Body style={{ color: '#000' }}>
          <Card.Title style={{ color: '#000' }}>{name}</Card.Title>
          <Card.Text style={{ color: '#000' }}>{bio}</Card.Text>
          <Button color={isButtonDisabled ? "secondary" : "primary"} disabled={isButtonDisabled} onClick={handleClick}>{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const MemberGrid = ({ members }) => (
  <div className="row">
    {members.map(member => (
      <Member key={member.id} name={member.name} bio={member.bio} id={member.id} />
    ))}
  </div>
);

export default MemberGrid;
