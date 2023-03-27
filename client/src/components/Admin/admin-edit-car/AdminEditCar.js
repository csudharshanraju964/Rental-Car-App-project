import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CarContext } from '../../CarRentalProvider';
import "./AdminEditCar.css"

const AdminEditCar = ({ setAuth }) => {
    const navigate = useNavigate()
    const { cars, setSelectedCar, selectedCar } = useContext(CarContext);

    const { carId } = useParams();


    // const [carDetails, setCarDetails] = useState(initialCarDetails);
    const [errors, setErrors] = useState({});

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setCarDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    // };
    useEffect(() => {
        axios
            .get(`/api/cars/${carId}`)
            .then((response) => {
                setSelectedCar(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
                setErrors(error.response.data);
            });
    }, [cars, carId, setSelectedCar]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedCar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveClick = () => {
        axios
            .patch(`/api/cars/${carId}`, selectedCar)
            .then((response) => {
                // handle successful save, such as showing a success message to the user
                console.log('Car added successfully');
                navigate("/admin-home");
            })
            .catch((error) => {
                // handle error, such as showing an error message to the user
                console.error(error.response.data);
                setErrors(error.response.data);
            });
    };
    const handleDelete = () => {
        axios.delete(`/api/cars/${carId}`, selectedCar)
            .then((response) => {
                console.log("Car deleted successfully");
                navigate("/admin-home");

            })
            .catch((error) => {
                // handle error, such as showing an error message to the user
                console.error(error.response.data);
                setErrors(error.response.data);
            });
    }

    return (
        <div>
            <div className='header'>
                <h4>Edit Car Details</h4>
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
                                value={selectedCar.name}
                                placeholder="Name"
                                onChange={handleInputChange}
                                className="name"
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className='leftHeaders'>
                            <div>
                                <span htmlFor="type" className='leftHeadings'>Type</span><br />
                                <select id="type" name="type" value={selectedCar.type} onChange={handleInputChange} className="optionsSelector">
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
                                    value={selectedCar.capacity}
                                    placeholder="Capacity"
                                    onChange={handleInputChange}
                                    className="optionsSelector"
                                />
                                {errors.capacity && <span className="error">{errors.capacity}</span>}

                            </div>
                            <div>
                                <span htmlFor='model' className='leftHeadings'>Model</span><br />
                                <select id='model' name='model' value={selectedCar.model} onChange={handleInputChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="Nexson">Nexon</option>
                                    <option value="TataPunch">Tata Punch</option>
                                    <option value="Tiago">Tiago</option>
                                </select>
                                {errors.model && <span className="error">{errors.model}</span>}
                            </div>


                            <div>
                                <span htmlFor='milage' className='leftHeadings'>Milage</span><br />
                                <select id='milage' name='milage' value={selectedCar.milage} onChange={handleInputChange} className="optionsSelector">
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
                                    value={selectedCar.rentPerHour}
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
                                    value={selectedCar.availableFrom}
                                    placeholder='DD MM YYYY'
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
                                    value={selectedCar.availableTill}
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
                                value={selectedCar.description}
                                onChange={handleInputChange}
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
                                value={selectedCar.images}
                                onChange={handleInputChange}
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
                                value={selectedCar.carDetails}
                                onChange={handleInputChange}
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
                                value={selectedCar.details}
                                onChange={handleInputChange}
                                rows="5" cols="50"
                            />
                            {errors.details && <span className='error'>{errors.details}</span>}
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={() => { navigate("/admin-home") }} id="cancelBtn">Cancel</button>
                    <button onClick={handleDelete} id="delBtn">Delete</button>
                    <button onClick={handleSaveClick} id="saveBtn">Save</button>

                </div>
            </form>


        </div>
    );
};

export default AdminEditCar;