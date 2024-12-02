import React, { useEffect,useState } from "react";
interface BookingData {
    name:string;
    id: number;
    day_pass_price: number; 
    images:string[];
  }

const BookingCard: React.FC = () => {
    const [bookingData, setBookingData] = useState<BookingData[]>([]);
    const getProjectData = async () => {
        try {
          const response=await fetch("https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json");
          const data= await response?.json();
          console.log(data,'data')
           setBookingData(data);
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
       getProjectData();

    },[])
  return (
    <div className="container">
    <p className="booking_card_title">Our Space Overview</p>
    <div className="card_outer">
      {bookingData.map((booking) => (
        
        <div className="card_container" key={booking.id}>
          <div className="card_display">
            <div className="card_header_title">
              <p>{booking.name}</p>
            </div>
            <div className="card_header_image">
            <img src="/image/header_image.png" alt="header_img" />
            </div>
          </div>

          <div className="card_body_display">
            <img src={booking.images[0] || "/image/card_body.png"} height={"202"} width={"346"} alt="card_body_img" loading="lazy"/> 
          </div>
          <img
            src={"/image/workspace.png"}
            height="32"
            className="worspace_img"
            alt="Workspace"
          />
          <div className="discount_bar">{"20% Discount"}</div>

          <div className="card_footer_display">
            <div className="day_button">
              <div>
                <div className="day_text">Day Pass</div>
                <span className="price_text">{booking.day_pass_price}</span>
                <span>/day</span>
              </div>
              <div>
                <img src="/image/arrow.png" alt ="arrow_image" />{" "}
                <img src="/image/arrow.png" alt ="arrow_image" />{" "}
                <img src="/image/arrow.png" alt ="arrow_image" />
              </div>
            </div>
            <div className="bulk_button">
              <div>
                <div className="day_text">Bulk Pass</div>
                <span className="price_text">249</span>
                <span>/10 day</span>
              </div>
              <div>
                <img src="/image/arrow.png" alt ="arrow_image"/> 
                <img src="/image/arrow.png" alt ="arrow_image"/>{" "}
                <img src="/image/arrow.png" alt ="arrow_image" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BookingCard;
