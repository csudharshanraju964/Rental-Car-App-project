import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../component/CarRentalProvider";
import "../styles/DateSelect.css"
import img from "../image/self-drive-norwa-car-people.png"
function DateSelect(){
    const navigate=useNavigate()
    const [data,setData]=useState({
        startingDay:"",
        endingDay:""
    })
    const {setRentalDate}=useContext(CarContext)
    const [disabled,setDisabled]=useState(true)

    return<div id="main-div">
        <img src={img} />
    <div id="date-selection-div">
        <h1 id="heading">Select the starting and end date Rental</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            if(!data.endingDay){
                alert("Fill all fields")
            }
            else{
                const startDate=new Date(data.startingDay)
                const endDate=new Date(data.endingDay)
                if (startDate > endDate) {
                    alert("Enter valid date");
                  } else {
                     const options = { day: "2-digit", month: "short", year: "numeric" };
                     const rentalStartDate = startDate.toLocaleDateString("en-GB", options).split(" ").join("-");
                    const rentalEndDate = endDate.toLocaleDateString("en-GB", options).split(" ").join("-");
                    setRentalDate({ start: rentalStartDate, end: rentalEndDate });
                    navigate("/carbooking")
            }
        }
        }}>
        
            <div>
                <label>Starting day:</label>
                <input type="date" id="starting-day" className="input-fileds" placeholder="00-00-00" onChange={(e)=>{
                    setData({
                        ...data,
                        startingDay:e.target.value
                    })
                    setDisabled(false)

                    
                }}/>
            </div>
        <div>
        <label>Ending Date:</label>
        <input type="date" id="ending-day" className="input-fileds" onChange={(e)=>{
                    setData({
                        ...data,
                        endingDay:e.target.value
                    })}} disabled={disabled}/>
        </div> 
        <button id="check" type="submit">Check</button>
        </form>
    </div>
    </div>
}


export default DateSelect;