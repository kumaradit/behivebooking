import React from "react"

const Meeting: React.FC = ()=>{

    return (
    <div className="meeting_container">
        <div className="container">
            <div className="meeting_container_inner">
                <div className="meeting_title_container">
                    <div className="meeting_title">Host your meeting with world-class amenities. Starting at <span className="starting_price">₹199/-!</span> </div>
                </div>
                <div className="meeting_img_container">
                    <img className="meeting_img" src="/image/coworking.png"></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Meeting