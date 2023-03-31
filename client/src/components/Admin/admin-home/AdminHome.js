import React, { useState,useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CarContext } from '../../CarRentalProvider';
import "./AdminHome.css";


function AdminHome({ setAuth }) {
    const{admintoken,selectedCar,setSelectedCar}=useContext(CarContext)
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    

    // Fetch car data from database on component mount
    useEffect(() => {
        fetch('http://localhost:8000/car/getallcars',{
            headers: {
                'Authorization': admintoken
              }
        })
            .then(response => response.json())
            .then(data => {setCars(data)
                console.log(data)});
    }, []);

    return (
        <>
            <div className='adminHeading'>
                <h3 >Hello Admin...</h3>
            </div>
            <br />
            <div className='headerSection2'>
                <div className='carHeading'>Cars</div>
                <button className='addButton' onClick={() => {navigate("/admin-home/addCar") }}>Add</button>
            </div>
            <div className='cars-container'>
                <div className='cards-grid'>
                    {cars.map(car => (
                        <div className="car-card" key={car._id} onClick={() => {
                            setSelectedCar({name:car.name, model: car.model,
                            capacity:car.capacity,
                            image: car.image,
                            type:car.type,
                            milage:car.milage,
                            rentPerHour:car.rentPerHour ,
                            availableFrom: car.availableFrom,
                            availableTill: car.availableTill,
                            carDetails: car.carDetails,
                            description:car.description,
                            details: car.details,
                            id:car._id})
                            navigate(`/admin-home/editCar`)}}>
                            <div className='image-div'>
                               <img src={car.image} alt="car"/>
                            </div>
                            <h5 className='car-capacity'>{`${car.capacity} Seater`}</h5>
                            <span className='car-name'>{car.name}</span>
                            <span className='car-rent'>{`${car.rentPerHour} Rs/Hr`}</span>
                            <div className='car-info'>{car.availableFrom}</div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AdminHome