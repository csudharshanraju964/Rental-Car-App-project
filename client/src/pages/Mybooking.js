import "../styles/MyBooking.css"
import img from "../image/self-drive-norwa-car-people.png"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { CarContext } from "../components/CarRentalProvider"


// const bookingData=[{
//     startingDay:"1-Mar-2023",
//     endingDay:"4-Mar-2023",
//     carType:"SUV",
//     carName:"Ford Mustang",
//     seat:4,
//     mileage:10,
//     rupeesPerKm:70,
//     carNumber:"KL 70 C 7015"
// },
// {
//     startingDay:"10-Mar-2023",
//     endingDay:"23-Mar-2023",
//     carType:"UV",
//     carName:"Honda City",
//     seat:6,
//     mileage:10,
//     rupeesPerKm:15,
//     carNumber:"KL 70 C 7015"
// }]
function MyBooking(){
    const [edit,setEdit]=useState(false)
    const [bookingData,setBookingData]=useState([])
    const [bookedCarDetails,setBookedCarDetails]=useState({})
    const[canceltrigger,setcanceltrigger]=useState(true)
    const{usertoken}=useContext(CarContext)
    useEffect(()=>{
        fetch("http://localhost:8000/bookings/getallbookings",{
            headers: {
                'Authorization': usertoken
              }
        })
        
        .then(res=>res.json()).then(data=>{setBookingData(data)}).catch(err=>console.log(err))
    },[canceltrigger])
    return<>
    {!edit && bookingData.map((item)=>{
        return <div id="my-booking-main-div" key={item._id}>
        <div id="img-div"><img src={img}/></div>
        <div id="car-details-div">
            <h2>{item.carName}</h2>
            <h2 id="car-number">{item.carNumber}</h2>
            <div id="car-spec">
                <div>Type :<span id="car-type">{item.carType}</span></div>
                <div>Seat :<span id="car-seat">{item.seat} seater</span></div>
                <div>Mileage :<span id="car-mileage">{item.mileage}Km/L</span></div>
                <div>Rs/ Km :<span id="car-rsperkm">{item.rupeesPerKm}Rs</span></div>
            </div>
        </div>
        <div id="car-rent-date">
            <div>start Date <span>{item.startingDay}</span></div>
            <div>End Date <span>{item.endingDay}</span></div>
            </div>
        <div id="car-booking-time">
            <div>Booking id <span id="span1">1</span></div>
        <div>Booking Date <span id="span2">20-Mar-2023</span></div>
        <div>Booking Time <span id="span3">28-Mar-2023</span></div>
        </div>
        <div id="button-div">
            <button id="edit-button" onClick={()=>{
                setBookedCarDetails(item)
                console.log(item)
                setEdit(true)
            }}>Edit</button>
            <button id="cancel-button" onClick={()=>{
                        fetch("http://localhost:8000/bookings/deletebooking",{
                        method:"DELETE",    
                        headers: {
                                "Content-Type": "application/json",
                                'Authorization': usertoken
                              },
                        body:JSON.stringify(item)
                        }).then(res=>res.json()).then(data=>{console.log(data)
                        setcanceltrigger(prev=>!prev)}).catch(err=>console.log(err))
            }}>Cancel</button>
        </div>
    </div>})
    
}
{
    edit &&<> <div className="booking-status-div">
    <h2>Booking Details</h2>
    
        <div className="car-status-div">
            <div >
            <div className="car-name-div">Car Name <span className="car-name">{`${bookedCarDetails.carName } ${bookedCarDetails.seat} seater`}</span></div>
            <div className="car-number-div">Car Number <span className="car-number">{`${bookedCarDetails.carNumber}`}</span></div>
            </div >
            <div className="img-div">
                <img src={img}/>
            </div>
        </div>
        <div className="car-rent-date-div">
        <div>Start Date <span className="start-date">{`${bookedCarDetails.startDate}`}</span></div>    
        <div>End Date <span className="end-date">{` ${bookedCarDetails.endDate}`}</span></div>  
        </div>
        <div id="car-booking-time-div">
            <div className="car-booking-id">Booking id <span className="booking-id">{bookedCarDetails.bookingId}</span></div>
            <div className="car-booking-date">Booking Date <span className="booking-date">{bookedCarDetails.bookingDate}</span></div>
            <div className="car-booking-time">Booking Time <span className="booking-time">{bookedCarDetails.bookingTime}</span></div>
        </div>
        <div className="button-div">
            <button className="cancel-btn" onClick={()=>{
                setEdit(false)
            }}>Close</button>
        </div>    
</div>
<div className="payment-div">
        <h2>Payment Details</h2>
        <div className="price-details-div">
            <div className="price-per-km-div">Price per Km <span className="price-per-km">{bookedCarDetails.pricePerKm}/Km</span></div>
            <div className="pricing-div">Pricing <span className="price">1500</span></div>
            <div className="tax-div">Tax charges <span className="tax">50</span></div>
        </div>
        <div className="sub-total-details-div">
            <div className="sub-total-div">Sub Total <span className="sub-total">1550 Rs</span></div>
            <div className="permission-div">
                 <div>Payment Completed !</div>   
            </div>
           
        </div>
    </div>
</>
}
</>
}
export default MyBooking 