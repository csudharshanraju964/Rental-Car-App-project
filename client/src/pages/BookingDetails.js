import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../component/CarRentalProvider";
import img from "../image/self-drive-norwa-car-people.png"
import "../styles/BookingDetail.css"
function BookingDetails(){
    const {carBooking,setCarBooking}=useContext(CarContext)
    const navigate=useNavigate()
    const currentDate=new Date().toDateString().split(" ")
    const currentTime=new Date().toLocaleTimeString().split(":")
    const [week,month,date,year]=currentDate
    const Today=`${date}-${month}-${year}`
    const [hr,min,sec]=currentTime
    const DorN=sec.split(" ")
    const[secs,ANorFN]=DorN
    
    return <><div id="booking-status-div">
        <h2>Booking Details</h2>
        
            <div id="car-status-div">
                <div >
                <div id="car-name-div">Car Name <span id="car-name">{`${carBooking.carName } ${carBooking.seat} seater`}</span></div>
                <div id="car-number-div">Car Number <span id="car-number">{`${carBooking.carNumber}`}</span></div>
                </div >
                <div id="img-div">
                    <img src={img}/>
                </div>
            </div>
            <div id="car-rent-date-div">
            <div>Start Date <span id="start-date">{`${carBooking.startingDay}`}</span></div>    
            <div>End Date <span id="end-date">{` ${carBooking.endingDay}`}</span></div>  
            </div>
            <div id="car-booking-time-div">
                <div id="car-booking-id">Booking id <span id="booking-id">1</span></div>
                <div id="car-booking-date">Booking Date <span id="booking-date">{Today}</span></div>
                <div id="car-booking-time">Booking Time <span id="booking-time">{`${hr}:${min} ${ANorFN}`}</span></div>
            </div>
            <div id="button-div">
                <button id="cancel-btn" onClick={()=>{
                    setCarBooking({       
                        startingDay:"",
                        endingDay:"",
                        carType:"",
                        carName:"",
                        seat:"",
                        mileage:"",
                        rupeesPerKm:"",
                        carNumber:""
                })
                navigate("/carbooking")
                }}>Cancel</button>
            </div>    
    </div>
    <div id="payment-div">
        <h2>Payment Details</h2>
        <div id="price-details-div">
            <div id="price-per-km-div">Price per Km <span id="price-per-km">{carBooking.rupeesPerKm}/Km</span></div>
            <div id="pricing-div">Pricing <span id="price">1500</span></div>
            <div id="tax-div">Tax charges <span id="tax">50</span></div>
        </div>
        <div id="sub-total-details-div">
            <div id="sub-total-div">Sub Total <span id="sub-total">1550 Rs</span></div>
            <div id="permission-div">
                <div id="input-div"><input type="checkbox" /></div>
                
                <span>It is a long established fact that a reader will be distracted by the readable content</span>
            </div>
            <div id="proceed-button-div">
                <button>Proceed</button>
            </div>
        </div>
    </div>
    </>
}
export default BookingDetails;