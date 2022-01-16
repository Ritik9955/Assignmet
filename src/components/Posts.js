import React from 'react';

import { Table } from 'react-bootstrap';


const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Issue #</th>
          <th>Title</th>
          <th>Created</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
      
        {posts.map(post=>(
          <tr key={post.id}> 
            <td>{post.number}</td><td>{post.title}</td><td>{post.created_at}</td><td>{post.state}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>

  );
};

export default Posts;
