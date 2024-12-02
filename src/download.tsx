import React from "react";

const Download: React.FC = () => {
  return (
    <div className="download_app_section">
    <div className="container">
      <p className="download_title">Download our app now</p>

      <div className="download_container">
        <div className="download_display_width">
          <img src="image/download.png"></img>
        </div>
        <div className="download_box">
          <p className="download_text">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="download_display">
            <img src="image/googleplay.png"></img>
            <img src="image/appstore.png"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Download;
