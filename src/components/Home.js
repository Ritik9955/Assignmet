import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Posts from './Posts';
import axios from 'axios';
// import './App.css';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
 
  useEffect(() => {
   
    const fetchPosts = async () => {
      setLoading(true);
    //   console.log("SHK");
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // const repoPath = "leachim6/hello-world"
      const res = await axios.get('https://api.github.com/repos/mozilla/DeepSpeech/issues');
      // const octokit = new Octokit({ auth: `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` });
      console.log('sss',res.data);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  
  }, []);
 
 

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log("dsaas",postsPerPage);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log("paginate",postsPerPage);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Github's Issues page</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
