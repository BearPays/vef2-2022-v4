
import { Index } from './pages/Index';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
