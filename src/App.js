import React from 'react';
import NavBar from './common components/NavBar';
import Hero from './work/Hero';
import ProjectOverview from './work/projects/ProjectOverview';


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProjectOverview />
    </div>
  );
}

export default App;
