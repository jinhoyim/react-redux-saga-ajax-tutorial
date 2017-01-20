import React from 'react';
import { Header } from './components';
import { PostContainer } from './containers';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div>
      <Header />
      <PostContainer/>
    </div>
  );
};

// export default App;
export default connect()(App);