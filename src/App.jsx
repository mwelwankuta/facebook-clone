import React from 'react';
import AppRouter from "./AppRouter";
import PostContextProvider from "./context/postContext";

const App = () => {
  return (
    <PostContextProvider>
      <AppRouter />
    </PostContextProvider>
  );
}

export default App;
