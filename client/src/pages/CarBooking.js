import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarContext } from "../component/CarRentalProvider";
import CarType from "../component/CarType";
import Milleage from "../component/Mileage";
import Seating from "../component/Seating";
import "../styles/Carbooking.css"
import img from "../image/self-drive-norwa-car-people.png"
const data=[{
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
},{
    startingDay:"20-Mar-2023",
    endingDay:"22-Mar-2021",
    carType:"SUV",
    carName:"Tata Harrier",
    seat:8,
    mileage:10,
    rupeesPerKm:30,
    carNumber:"KL 70 C 7015"
},
{
    startingDay:"10-Mar-2021",
    endingDay:"22-Mar-2021",
    carType:"UV",
    carName:"Tata Nexon",
    seat:6,
    mileage:10,
    rupeesPerKm:25,
    carNumber:"KL 70 C 7015"
},
{
    startingDay:"15-Mar-2023",
    endingDay:"17-Mar-2023",
    carType:"UV",
    carName:"Toyota Fortuner",
    seat:6,
    mileage:15,
    rupeesPerKm:30,
    carNumber:"KL 70 C 7015"
},
{
    startingDay:"20-Mar-2023",
    endingDay:"22-Mar-2023",
    carType:"SUV",
    carName:"Suzuki Swift",
    seat:6,
    mileage:10,
    rupeesPerKm:10,
    carNumber:"KL 70 C 7015"
}]
function CarBooking(){
    const {RentalDate}=useContext(CarContext)
    const[carTypeToggle,setCarTypeToggle]=useState(false)
    const[seatingToggle,setSeatingToggle]=useState(false)
    const[mileageToggle,setMileageToggle]=useState(false)
    const {carBooking,setCarBooking}=useContext(CarContext)
    const navigate=useNavigate()
    const[carDetails,setCarDetails]=useState({
        startingDate:RentalDate.start,
        endingDate:RentalDate.end,
        selected: null,
        seatingSelect: null,
        mileageSelect: null
    })
    
const handleCarTypeCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, selected: prev.selected === value ? "" : value}));
  };
  
  const handleSeatingCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, seatingSelect: prev.seatingSelect === value ? "" : value}));
  };
  
  const handleMileageCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, mileageSelect: prev.mileageSelect === value ? "" : value}));
  };

useEffect(()=>{
    console.log(carDetails)
},[carDetails])

    return <div>
        <div id="car-booking-div">
        <div>
            Origin name - Ending name
        </div>
        <div id="modify-div">
            {`${RentalDate.start} -  ${RentalDate.end}`}
        </div>
        <div>
            <Link to="/dateselect"><button>Modify</button></Link>
        </div>
    </div>
    <div  id="filter-div"> 
        <button id="car-type" onClick={()=>{setCarTypeToggle(prev=>!prev)}}>Car Type</button>
        <button id="seating" onClick={()=>setSeatingToggle(prev=>!prev)}>Seating</button>
        <button id="mileage" onClick={()=>setMileageToggle(prev=>!prev)}>Milleage</button>
    </div>
    {carTypeToggle && <CarType selected={carDetails.selected} handleCarTypeCheckboxChange={handleCarTypeCheckboxChange}/>}
    {seatingToggle && <Seating seatingSelect={carDetails.seatingSelect} handleSeatingCheckboxChange={handleSeatingCheckboxChange} /> }
    {mileageToggle && <Milleage mileageSelect={carDetails.mileageSelect} handleMileageCheckboxChange={handleMileageCheckboxChange}/>}
    {!RentalDate.start ? <h1>Please enter a date </h1>:
    <div id="car-detail-div">
        {data.map(data=>{
        return <div id="data-div">
                <div id="img-div">
                    <img src={img}/>
                </div>
                <div id="details-div">
                    <div>{data.carName}</div>
                    <div>{`${data.rupeesPerKm} Rs/Km`}</div>
                </div>
                <div id="button-div"><button>Fare Details</button>
                    <button onClick={()=>{
                        setCarBooking({
                            startingDay:data.startingDay,
                            endingDay:data.endingDay,
                            carType:data.carType,
                            carName:data.carName,
                            seat:data.seat,
                            mileage:data.mileage,
                            rupeesPerKm:data.rupeesPerKm,
                            carNumber:data.carNumber
                        })
                        navigate("/bookingdetails")
                    }}>Buy Now</button>
                </div>
                
        </div>
    })}
    </div>
    }
    </div>
}

export default CarBooking;