import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = () => {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, address }),
    })
      .then(response => response.json())
      .then(() => {
        setName('');
        setAddress('');
        fetch('/users')
          .then(response => response.json())
          .then(data => setUsers(data));
      });
  };

  return (
    <Container>
      <h1>User Management</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={addUser}>Add User</Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
