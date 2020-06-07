import React from 'react';
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import './sass/style.scss';

function App() {
  return (
    <Layout>

        <Heading title="Title from prop" subtitle="Subtitle from prop"/>
        
    </Layout>
  );
}

export default App;
