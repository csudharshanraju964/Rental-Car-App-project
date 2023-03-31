import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarContext } from "../components/CarRentalProvider";
import {useEffect}from "react"
import img from "../image/self-drive-norwa-car-people.png"
import "../styles/BookingDetail.css"
function BookingDetails(){
    
    const {carBooking,setCarBooking,usertoken}=useContext(CarContext)
    const navigate=useNavigate()
    const currentDate=new Date().toDateString().split(" ")
    const currentTime=new Date().toLocaleTimeString().split(":")
    const [week,month,date,year]=currentDate
    const Today=`${date}-${month}-${year}`
    const [hr,min,sec]=currentTime
    const DorN=sec.split(" ")
    const[secs,ANorFN]=DorN
    const Time=`${hr}:${min} ${ANorFN}`
    useEffect(()=>{
        setCarBooking({...carBooking,currentDate:Today,currentTime:Time})

    },[])
    if(usertoken){
    return <><div id="booking-status-div">
        <h2>Booking Details</h2>
        
            <div id="car-status-div">
                <div >
                <div id="car-name-div">Car Name <span id="car-name">{`${carBooking.carName } ${carBooking.seat} seater`}</span></div>
                <div id="car-number-div">Car Number <span id="car-number">{`${carBooking.carNumber}`}</span></div>
                </div >
                <div id="img-div">
                    <img src={carBooking.image}/>
                </div>
            </div>
            <div id="car-rent-date-div">
            <div>Origin <span id="origin">Mysore</span></div>
            <div>Destination<span id="destination">Banglore</span></div>
            <div>Start Date <span id="start-date">{`${carBooking.startingDay}`}</span></div>    
            <div>End Date <span id="end-date">{` ${carBooking.endingDay}`}</span></div>
            <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3618.3280597402077!2d84.04830495125768!3d24.92089173394706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x398db10689c9b687%3A0x451f59283c560da1!2sMahindra%20Bombay%20Automobiles!3m2!1d24.9195!2d84.0546!4m5!1s0x398db1cb49448895%3A0x3ba298dc09aa0d8e!2sKaimur%20Wildlife%20Sanctuary%20Gate%2C%20W29W%2BJJ2%2C%20Sikaria%2C%20Bihar%20821115!3m2!1d24.9198187!2d84.0463017!5e0!3m2!1sen!2sin!4v1679992531424!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>  
            </div>
            <div id="car-booking-time-div">
                <div id="car-booking-id">Booking id <span id="booking-id">{carBooking.bookingId}</span></div>
                <div id="car-booking-date">Booking Date <span id="booking-date">{Today}</span></div>
                <div id="car-booking-time">Booking Time <span id="booking-time">{Time}</span></div>
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
                        carNumber:"",
                        currentDate:"",
                        currentTime:"",
                        bookingId:"",
                        image:""
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
                <button onClick={()=>{
                    fetch("http://localhost:8000/bookings/addbooking",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json",
                            "Authorization": `${usertoken}`
                        },
                        body:JSON.stringify(carBooking)
                    }).then(res=>{console.log("hi")
                        navigate("/mybookings")}).catch(err=>console.log(err))
                    
                }}>Proceed</button>
            </div>
        </div>
    </div>
    </>}else{
        return <h1>Login to access this page<Link to="/"> <span>Login</span></Link></h1>
    }
}
export default BookingDetails;