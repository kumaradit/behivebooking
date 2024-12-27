import React from "react";

const Choose: React.FC = () => {
  return (
    <div className="choose_main">
      <div className="container">
        <h2 className="choose_headtitle">Why Choose Us?</h2>
        <div className="choose_display">
          <div className="choose_container">
            <img className="choose_img" src="/image/community.png"></img>
            <h4>Community Events</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/gym.png"></img>
            <h4>Gym Facilities</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/wifi.png"></img>
            <h4>High speed wifi</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/cafe.png"></img>
            <h4>Cafe & Tea bar</h4>
          </div>

          <div className="choose_container">
            <img className="choose_img" src="/image/affordable.png"></img>
            <h4>Affodables</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/comfort.png"></img>
            <h4>Comfort Lounges</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/quick.png"></img>
            <h4>Quick Booking</h4>
          </div>
          <div className="choose_container">
            <img className="choose_img" src="/image/sports.png"></img>
            <h4>Sports Area</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
