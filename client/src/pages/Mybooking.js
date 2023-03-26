import "../styles/MyBooking.css"
import img from "../image/self-drive-norwa-car-people.png"


const bookingData=[{
    startingDay:"1-Mar-2023",
    endingDay:"4-Mar-2023",
    carType:"SUV",
    carName:"Ford Mustang",
    seat:4,
    mileage:10,
    rupeesPerKm:70,
    carNumber:"KL 70 C 7015"
},
{
    startingDay:"10-Mar-2023",
    endingDay:"23-Mar-2023",
    carType:"UV",
    carName:"Honda City",
    seat:6,
    mileage:10,
    rupeesPerKm:15,
    carNumber:"KL 70 C 7015"
}]
function MyBooking(){
    return<>
    {bookingData.map((item)=>{
        return <div id="my-booking-main-div">
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
            <button id="edit-button">Edit</button>
            <button id="cancel-button">Cancel</button>
        </div>
    </div>})
    
}
</>
}
export default MyBooking 