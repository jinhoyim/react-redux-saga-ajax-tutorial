import axios from 'axios';

export function getPost(postId){
  return axios.get(
    'https://jsonplaceholder.typicode.com/posts/' + postId
  ).then(
    response => {
      return { ...response.data };
    }
  ).catch(
    err => {
      throw err;
    }
  );
}

export function getComments(postId) {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then(
    response => {
      return [...response.data];
    }
  ).catch(
    err => {
      throw err;
    }
  );
}