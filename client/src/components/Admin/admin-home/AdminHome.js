import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AdminHome.css";


function AdminHome({ setAuth }) {

    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    // Fetch car data from database on component mount
    useEffect(() => {
        fetch('http://localhost:8000/car/getallcars')
            .then(response => response.json())
            .then(data => setCars(data));
    }, []);

    return (
        <>
            <div className='adminHeading'>
                <h3 >Hello Admin...</h3>
            </div>
            <br />
            <div className='headerSection2'>
                <div className='carHeading'>Cars</div>
                <button className='addButton' onClick={() => { navigate("/admin-home/addCar") }}>Add</button>
            </div>
            <div className='cars-container'>
                <div className='car-card'>
                    {cars.map(car => (
                        <div className="car-card" key={car.id} onClick={() => navigate(`/admin-home/editCar`)}>
                            <div className='image'>
                               <img src={car.image} alt="car"/>
                            </div>
                            <h5 className='car-capacity'>{car.capacity}</h5>
                            <span className='car-name'>{car.name}</span>
                            <span className='car-rent'>{car.rentPerHour}</span>
                            <div className='car-info'>{car.availableFrom}</div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AdminHome