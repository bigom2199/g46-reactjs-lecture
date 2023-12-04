import React from 'react';
import Header from `./Header`;

const App = () => {
    const headerText ="Marketplace UI!";
    const logo ="logo.jpg";
    const links = ["Login","Sign Up","About"];
    return (
        <div>
          <Nav logo= {logo} links ={links} />
        <Header text= {headerText} bgColor ='info' />
        <br/>
        <Nav logo = {logo} links  />

        <Header />

        </div>
    );
};
 

 

export default App;