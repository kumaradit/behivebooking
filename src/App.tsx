import './App.css';
import './custom.css';
import './header.css';
import './choose.css';
import './meeting.css';
import './download.css';
import './footer.css';
import React from 'react';
 import BookingCard from './bookingcard';
import Header from './header';
import Choose from './choose';
import Meeting from './meeting';
import Download from './download';
import Footer from './footer';
const App: React.FC=() =>{
  return (
    <>
      <div className="App">
        <Header/>
        <Meeting/>
        <Choose/>
        <BookingCard/>
        <Download/>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
