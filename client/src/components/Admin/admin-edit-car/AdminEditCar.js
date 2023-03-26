import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminEditCar = ({ carId, initialCarDetails, onCancel, setAuth  }) => {
    const navigate = useNavigate()
    const [carDetails, setCarDetails] = useState(initialCarDetails);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCarDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleSaveClick = () => {
        axios
            .put(`/api/cars/${carId}`, carDetails)
            .then((reponse) => {
                // handle successful save, such as showing a success message to the user
                console.log('Car added successfully');
            })
            .catch((error) => {
                // handle error, such as showing an error message to the user
                console.error(error.response.data);
                setErrors(error.response.data);
            });
    };
    return (
        <div>
            <h1>Edit Car Details</h1>
            <form  className="form-container">
                <div className='firstPart'>
                    <div>
                        <span htmlFor="name" className='leftHeadings'> Car Name</span><br />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={carDetails.name}
                            placeholder="Name"
                            onChange={handleInputChange}
                            className="name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className='leftHeaders'>
                        <div>
                            <span htmlFor="type" className='leftHeadings'>Type</span><br />
                            <select id="type" name="type" value={carDetails.type} onChange={handleInputChange} className="optionsSelector">
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
                                value={carDetails.capacity}
                                placeholder="Capacity"
                                onChange={handleInputChange}
                                className="optionsSelector"
                            />
                            {errors.capacity && <span className="error">{errors.capacity}</span>}

                        </div>
                        <div>
                            <span htmlFor='model' className='leftHeadings'>Model</span><br />
                            <select id='model' name='model' value={carDetails.model} onChange={handleInputChange} className="optionsSelector">
                                <option value=""></option>
                                <option value="Nexson">Nexon</option>
                                <option value="TataPunch">Tata Punch</option>
                                <option value="Tiago">Tiago</option>
                            </select>
                            {errors.model && <span className="error">{errors.model}</span>}
                        </div>
                    </div>
                    <div className='rightHeaders'>
                        <div>
                            <span htmlFor='milage' className='leftHeadings'>Milage</span><br />
                            <select id='milage' name='milage' value={carDetails.milage} onChange={handleInputChange} className="optionsSelector">
                                <option value=""></option>
                                <option value="10">10Km/lit</option>
                                <option value="15">15Km/lit</option>
                                <option value='morethan15'>&gt;15Km/hr</option>
                            </select>
                            {errors.milage && <span className="error">{errors.milage}</span>}
                        </div>
                        <div >
                            <span htmlFor='rentPerHour' className='leftHeadings'>Price Per Hour</span><br></br>
                            <input
                                type="number"
                                id='rentPerHour'
                                name="rentPerHour"
                                value={carDetails.rentPerHour}
                                placeholder="Rent/hr"
                                onChange={handleInputChange}
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
                                value={carDetails.availableFrom}
                                onChange={handleInputChange}
                                className="optionsSelector"
                            />
                            {errors.availableFrom && <span className='error'>{errors.availableFrom}</span>}
                        </div>
                    </div>
                    <div>
                        <span htmlFor='availableTill' className='leftHeadings'>Available Till</span><br />
                        <input
                            type="date"
                            id='availableTill'
                            name='avialbleTill'
                            placeholder='DD MM YYYY'
                            value={carDetails.availableTill}
                            onChange={handleInputChange}
                            className="optionsSelector"
                        />
                        {errors.availableTill && <span className='error'>{errors.availableTill}</span>}
                    </div>
                    <div>
                        <span htmlFor='description' className='leftHeadings'>Description </span><br />
                        <textarea
                            type="text"
                            id='description'
                            name="description"
                            value={carDetails.description}
                            onChange={handleInputChange}
                        />
                        {errors.description && <span className='error'>{errors.description}</span>}
                    </div>
                </div>
                <div className='secondPart'>
                    <div>
                        <span htmlFor='image'>Images</span><br />
                        <button>Add</button>
                        <input
                            type="image"
                            name="image"
                            id="image"
                            value={carDetails.images}
                            onChange={handleInputChange}
                        />
                        {errors.description && <span className='error'>{errors.description}</span>}
                    </div>
                    <div>
                        <span htmlFor='carDetails'>Car Details</span><br />
                        <textarea
                            type="text"
                            id="carDetails"
                            name="carDetails"
                            value={carDetails.carDetails}
                            onChange={handleInputChange}
                        />
                        {errors.carDetails && <span className='error'>{errors.carDetails}</span>}
                    </div>
                    <div>
                        <span htmlFor='details'>Details</span><br />
                        <textarea
                            type="text"
                            id="details"
                            name="details"
                            value={carDetails.details}
                            onChange={handleInputChange}
                        />
                        {errors.details && <span className='error'>{errors.details}</span>}
                    </div>
                </div>
            </form>
            
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default AdminEditCar;
