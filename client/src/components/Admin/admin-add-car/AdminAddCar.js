import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminAddCar.css";


function AdminAddCar({ setAuth }) {


    const navigate = useNavigate()
    const [car, setCar] = useState({
        name: '',
        model: '',
        capacity: '',
        image: '',
        type: '',
        milage: '',
        rentPerHour: '',
        availableFrom: '',
        availableTill: '',
        carDetails: '',
        description: '',
        details: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make a POST request to the backend with the car details
        axios.post('/api/cars', car)
            .then(response => {
                // Update the UI with the response from the backend
                console.log(response.data);
                setCar({
                    name: '',
                    model: '',
                    capacity: '',
                    image: '',
                    type: '',
                    milage: '',
                    rentPerHour: '',
                    availableFrom: '',
                    availableTill: '',
                    carDetails: '',
                    description: '',
                    details: ''
                });
                setErrors({});
            })
            .catch(error => {
                // Update the UI with the error messages
                console.error(error.response.data);
                setErrors(error.response.data);
            });
    };


    return (
        <>
            <div className='header'>
                <h4>Add Car Details</h4>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <div className='firstPart'>
                    <div>
                        <label htmlFor="name"> Car Name:</label><br/>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={car.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="type">Type:</label><br/>
                        <select id="type" name="type" value={car.type} onChange={handleChange}>
                            <option value=""></option>
                            <option value="type1">XUV</option>
                            <option value="type2">UV</option>

                        </select>
                        {errors.type && <span className="error">{errors.type}</span>}
                    </div>
                    <div>
                        <label htmlFor='model'>Model:</label><br/>
                        <select id='model' name='model' value={car.model} onChange={handleChange}>
                            <option value=""></option>
                            <option value="Nexson">Nexon</option>
                            <option value="TataPunch">Tata Punch</option>
                            <option value="Tiago">Tiago</option>
                        </select>
                        {errors.model && <span className="error">{errors.model}</span>}
                    </div>
                    <div>
                        <label htmlFor='milage'>Milage:</label><br/>
                        <select id='milage' name='milage' value={car.milage} onChange={handleChange}>
                            <option value=""></option>
                            <option value="10">10Km/lit</option>
                            <option value="15">15Km/lit</option>
                            <option value='morethan15'>&gt;15Km/hr</option>
                        </select>
                        {errors.milage && <span className="error">{errors.milage}</span>}
                    </div>
                    <div>
                        <label htmlFor='capacity'>Capacity :</label><br/>
                        <input
                            type="text"
                            id="capacity"
                            name="capacity"
                            value={car.capacity}
                            placeholder="Capacity"
                            onChange={handleChange}
                        />
                        {errors.capacity && <span className="error">{errors.capacity}</span>}

                    </div>
                    <div>
                        <label htmlFor='rentPerHour'>Price Per Hour:</label><br/>
                        <input
                            type="number"
                            id='rentPerHour'
                            name="rentPerHour"
                            value={car.rentPerHour}
                            placeholder="Rent/hr"
                            onChange={handleChange}
                        />
                        {errors.rentPerHour && <span className="error">{errors.rentPerHour}</span>}
                    </div>
                    <div>
                        <label htmlFor='availableFrom'>Available From:</label><br/>
                        <input
                            type="date"
                            id='availableFrom'
                            name='avialbleFrom'
                            placeholder='DD MM YYYY'
                            onChange={handleChange}
                        />
                        {errors.availableFrom && <span className='error'>{errors.availableFrom}</span>}
                    </div>
                    <div>
                        <label htmlFor='availableTill'>Available Till:</label><br/>
                        <input
                            type="date"
                            id='availableTill'
                            name='avialbleTill'
                            placeholder='DD MM YYYY'
                            onChange={handleChange}
                        />
                        {errors.availableTill && <span className='error'>{errors.availableTill}</span>}
                    </div>
                    <div>
                        <label htmlFor='description'>Description :</label><br/>
                        <textarea
                            type="text"
                            id='description'
                            name="description"
                            onChange={handleChange}
                        />
                        {errors.description && <span className='error'>{errors.description}</span>}
                    </div>
                </div>
                <div className='secondPart'>
                    <div>
                        <label htmlFor='image'>Images :</label><br/>
                        <button>Add</button>
                        <input
                            type="image"
                            name="image"
                            id="image"
                            onChange={handleChange}
                        />
                        {errors.description && <span className='error'>{errors.description}</span>}
                    </div>
                    <div>
                        <label htmlFor='carDetails'>Car Details:</label><br/>
                        <textarea
                            type="text"
                            id="carDetails"
                            name="carDetails"
                            onChange={handleChange}
                        />
                        {errors.carDetails && <span className='error'>{errors.carDetails}</span>}
                    </div>
                    <div>
                        <label htmlFor='details'>Details:</label><br/>
                        <textarea
                            type="text"
                            id="details"
                            name="details"
                            onChange={handleChange}
                        />
                        {errors.details && <span className='error'>{errors.details}</span>}
                    </div>
                </div>

            </form>
            <div>
                <button className='cancelBtn'>Cancel</button>
            </div>
            <div>
                <button className='addBtn'>Add</button>
            </div>

        </>
    )
}

export default AdminAddCar