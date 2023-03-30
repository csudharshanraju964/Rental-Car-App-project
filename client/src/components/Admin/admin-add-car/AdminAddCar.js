import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminAddCar.css";
import { CarContext } from '../../CarRentalProvider';


function AdminAddCar({ setAuth }) {

    const{admintoken}=useContext(CarContext)    
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
        fetch('http://localhost:8000/car/addcar',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `${admintoken}`
            },
            body:JSON.stringify(car)
        })
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
                navigate("/admin-home");
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
            <form >
                <div className="form-container">
                    <div className='firstPart'>
                        <div>
                            <span htmlFor="name" className='leftHeadings'> Car Name</span><br />
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
                        <div className='leftHeaders'>
                            <div>
                                <span htmlFor="type" className='leftHeadings'>Type</span><br />
                                <select id="type" name="type" value={car.type} onChange={handleChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="type1">XUV</option>
                                    <option value="type2">UV</option>

                                </select>
                                {errors.type && <span className="error">{errors.type}</span>}
                            </div>
                            <div>
                                <span htmlFor='capacity' className='leftHeadings'>Capacity</span><br />
                                <input
                                    type="text"
                                    id="capacity"
                                    name="capacity"
                                    value={car.capacity}
                                    placeholder="Capacity"
                                    onChange={handleChange}
                                    className="optionsSelector"
                                />
                                {errors.capacity && <span className="error">{errors.capacity}</span>}

                            </div>
                            <div>
                                <span htmlFor='model' className='leftHeadings'>Model</span><br />
                                <select id='model' name='model' value={car.model} onChange={handleChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="Nexson">Nexon</option>
                                    <option value="TataPunch">Tata Punch</option>
                                    <option value="Tiago">Tiago</option>
                                </select>
                                {errors.model && <span className="error">{errors.model}</span>}
                            </div>


                            <div>
                                <span htmlFor='milage' className='leftHeadings'>Milage</span><br />
                                <select id='milage' name='milage' value={car.milage} onChange={handleChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="10">10Km/lit</option>
                                    <option value="15">15Km/lit</option>
                                    <option value='morethan15'>&gt;15Km/hr</option>
                                </select>
                                {errors.milage && <span className="error">{errors.milage}</span>}
                            </div>
                        </div>
                        <div className='rightHeaders'>
                            <div >
                                <span htmlFor='rentPerHour' className='leftHeadings'>Price Per Hour</span><br></br>
                                <input
                                    type="number"
                                    id='rentPerHour'
                                    name="rentPerHour"
                                    value={car.rentPerHour}
                                    placeholder="Rent/hr"
                                    onChange={handleChange}
                                    className="optionsSelector"
                                />
                                {errors.rentPerHour && <span className="error">{errors.rentPerHour}</span>}
                            </div>
                            <div >
                                <span htmlFor='availableFrom' className='leftHeadings'>Available From</span><br />
                                <input
                                    type="date"
                                    id='availableFrom'
                                    name='avialbleFrom'
                                    placeholder='DD MM YYYY'
                                    value={car.availableFrom}
                                    onChange={handleChange}
                                    className="optionsSelector"
                                />
                                {errors.availableFrom && <span className='error'>{errors.availableFrom}</span>}
                            </div>

                            <div>
                                <span htmlFor='availableTill' className='leftHeadings'>Available Till</span><br />
                                <input
                                    type="date"
                                    id='availableTill'
                                    name='avialbleTill'
                                    placeholder='DD MM YYYY'
                                    value={car.availableTill}
                                    onChange={handleChange}
                                    className="optionsSelector"
                                />
                                {errors.availableTill && <span className='error'>{errors.availableTill}</span>}
                            </div>
                        </div>
                        <div className='description'>
                            <span htmlFor='description'>Description </span><br />
                            <textarea
                                type="text"
                                id='description'
                                name="description"
                                onChange={handleChange}
                                value={car.description}
                                rows="5" cols="50"
                                className='descriptionBlock'
                            />
                            {errors.description && <span className='error'>{errors.description}</span>}
                        </div>
                    </div>
                    <div className='secondPart'>
                        <div>
                            <span htmlFor='image' className='images'>Images</span><br />
                            <button className='img-addBtn'>Add</button>
                            <input
                                type="image"
                                name="image"
                                id="image"
                                value={car.image}
                                onChange={handleChange}
                                className="imageinput"
                                alt="carimages"
                            />
                            {errors.description && <span className='error'>{errors.description}</span>}
                        </div>
                        <div className='carDetails'>
                            <span htmlFor='carDetails'>Car Details</span><br />
                            <textarea
                                type="text"
                                id="carDetails"
                                name="carDetails"
                                value={car.carDetails}
                                onChange={handleChange}
                                rows="5" cols="50"
                            />
                            {errors.carDetails && <span className='error'>{errors.carDetails}</span>}
                        </div>
                        <div className='details'>
                            <span htmlFor='details'>Details</span><br />
                            <textarea
                                type="text"
                                id="details"
                                name="details"
                                value={car.details}
                                onChange={handleChange}
                                rows="5" cols="50"
                            />
                            {errors.details && <span className='error'>{errors.details}</span>}
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <div>
                        <button className='cancelBtn' onClick={() => { navigate("/admin-home") }}>Cancel</button>
                    </div>
                    <div>
                        <button className='addBtn' onClick={handleSubmit}>Add</button>
                    </div>
                </div>

            </form>



        </>
    )
}

export default AdminAddCar