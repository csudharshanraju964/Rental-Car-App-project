import { useContext, useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { CarContext } from "../components/CarRentalProvider";
import CarType from "../components/CarType";
import Milleage from "../components/Mileage";
import Seating from "../components/Seating";
import "../styles/Carbooking.css"
import img from "../image/self-drive-norwa-car-people.png"
// const data=[{
//     _id:"1",
//     startingDay:"10-Mar-2023",
//     endingDay:"4-Mar-2023",
//     carType:"SUV",
//     carName:"Ford Mustang",
//     seat:4,
//     mileage:10,
//     rupeesPerKm:70,
//     carNumber:"KL 70 C 7015"
// },
// {
//     _id:"2",
//     startingDay:"10-Mar-2023",
//     endingDay:"23-Mar-2023",
//     carType:"UV",
//     carName:"Honda City",
//     seat:6,
//     mileage:10,
//     rupeesPerKm:15,
//     carNumber:"KL 70 C 7015"
// },{
//     _id:"3",
//     startingDay:"10-Mar-2023",
//     endingDay:"22-Mar-2021",
//     carType:"SUV",
//     carName:"Tata Harrier",
//     seat:9,
//     mileage:12,
//     rupeesPerKm:30,
//     carNumber:"KL 70 C 7015"
// },
// {
//     _id:"4",
//     startingDay:"10-Mar-2023",
//     endingDay:"22-Mar-2021",
//     carType:"UV",
//     carName:"Tata Nexon",
//     seat:6,
//     mileage:15,
//     rupeesPerKm:25,
//     carNumber:"KL 70 C 7015"
// },
// {
//     _id:"5",
//     startingDay:"10-Mar-2023",
//     endingDay:"17-Mar-2023",
//     carType:"UV",
//     carName:"Toyota Fortuner",
//     seat:6,
//     mileage:15,
//     rupeesPerKm:30,
//     carNumber:"KL 70 C 7015"
// },
// {
//     _id:"6",
//     startingDay:"10-Mar-2023",
//     endingDay:"22-Mar-2023",
//     carType:"SUV",
//     carName:"Suzuki Swift",
//     seat:6,
//     mileage:8,
//     rupeesPerKm:10,
//     carNumber:"KL 70 C 7015"
// }]
function CarBooking(){
    const {RentalDate}=useContext(CarContext)
    const[carTypeToggle,setCarTypeToggle]=useState(false)
    const[seatingToggle,setSeatingToggle]=useState(false)
    const[mileageToggle,setMileageToggle]=useState(false)
    const {carBooking,setCarBooking,usertoken}=useContext(CarContext)
    const navigate=useNavigate()
    const[carDetails,setCarDetails]=useState({
        startingDate:RentalDate.start,
        endingDate:RentalDate.end,
        selected: null,
        seatingSelect: null,
        mileageSelect: null
    })
    const [filteredData, setFilteredData] = useState([]);
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/bookings/getallcars",{
            headers:{
                "Authorization":usertoken
            }
        }).then(res=>res.json()).then(data=>{
            
            setdata(data)})
    },[])
  


const handleCarTypeCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, selected: prev.selected === value ? "" : value}));
  };
  
  const handleSeatingCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, seatingSelect: prev.seatingSelect === value ? "" : value}));
    
};
  
  const handleMileageCheckboxChange = (value) => {
    setCarDetails(prev => ({...prev, mileageSelect: prev.mileageSelect === value ? "" : value}));
    
};

let carNumber="KL 70 5897"
useEffect(()=>{
if(data.length){
    let datas
    if(carDetails.startingDate){
         datas=data.filter(item=>new Date(carDetails.startingDate) >= new Date(item.availableFrom))
    }

    if(!carDetails.mileageSelect && !carDetails.seatingSelect && !carDetails.selected){
        setFilteredData(datas)
    }else{
        let filtered = datas;
    
        if (carDetails.selected) {
            if(carDetails.selected==="ALL"){
                filtered=datas
            }
            else{
                filtered = filtered.filter(item => item.type === carDetails.selected);
            }
        }
      
        if (carDetails.seatingSelect) {
          filtered = filtered.filter(item => item.capacity === carDetails.seatingSelect);
        }
    
        if (carDetails.mileageSelect) {
          filtered = filtered.filter(item => item.milage === carDetails.mileageSelect);
        }
      
        setFilteredData(filtered);
    }
    }
        
},[data,carDetails])
    if(usertoken){
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
        {filteredData.map(data=>{
        return <div id="data-div" key={data._id}>
                <div id="img-div">
                    <img src={data.image}/>
                </div>
                <div id="details-div">
                    <div>{data.name}</div>
                    <div>{`${data.rentPerHour} Rs/Km`}</div>
                </div>
                <div id="button-div"><button>Fare Details</button>
                    <button onClick={()=>{
                        setCarBooking({
                            startingDay:data.availableFrom,
                            endingDay:data.availableTill,
                            carType:data.type,
                            carName:data.name,
                            seat:data.capacity,
                            mileage:data.milage,
                            rupeesPerKm:data.rentPerHour,
                            carNumber:carNumber,
                            image:data.image,
                            currentTime:"",
                            currentDate:"",
                            bookingId:`CAR${data._id}`
                        })
                        navigate("/bookingdetails")
                    }}>Book Now</button>
                </div>
                
        </div>
    })}
    </div>
    }
    </div>}else{
         return <h1>Login to access this page<Link to="/"> <span>Login</span></Link></h1>
    }
}

export default CarBooking;
