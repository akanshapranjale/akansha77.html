// import React from 'react';
// import './Home.css';

// function Home() {
//   return (
//     <section id="home" className="home">
//       <h1>Hi, I’m <span>Akansha Pranjale</span></h1>
//       <h3>Aspiring Java Full Stack Developer</h3>
//       <p>I love building interactive web apps using React and Java.</p>
//       <a href="#projects" className="btn">View My Work</a>
//     </section>
//   );
// }

// export default Home;


import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <h1>Hi, I’m <span className="accent">Akansha Pranjale</span></h1>
      <h3 className="typing">Aspiring Java Full Stack Developer</h3>
      <p>I love building interactive web apps using React and Java.</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
}

export default Home;
