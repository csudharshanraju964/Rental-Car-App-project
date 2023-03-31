import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CarContext } from '../../CarRentalProvider';
import "./AdminEditCar.css"

const AdminEditCar = ({ setAuth }) => {
    const navigate = useNavigate()
    const { cars, setSelectedCar, selectedCar,admintoken } = useContext(CarContext);
    const timeoutIdRef = useRef(null);
    const { carId } = useParams();

    // const [carDetails, setCarDetails] = useState(initialCarDetails);
    const [errors, setErrors] = useState({});

    const[filterEditDate,setFilterEditDate]=useState({
        availableFrom:"",
        availableTill:""
    })
    const [selectedImage,setSelectedImage]=useState("")
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedCar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    async function cloudinaryFetch(value){
        const response=await fetch("https://api.cloudinary.com/v1_1/dql4bctke/image/upload",{
          method:"POST",
          body:value
        })
        const data = await response.json()
        return data.url
      }
    const handleSaveClick = () => {
        
            fetch(`http://localhost:8000/car/editcar`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":admintoken
                },
                body:JSON.stringify(selectedCar)

            })
            .then((response) => {
                // handle successful save, such as showing a success message to the user
                console.log('Car added successfully');
            })
            .catch((error) => {
                // handle error, such as showing an error message to the user
                console.error(error.response.data);
                setErrors(error.response.data);
            });
            navigate("/admin-home");
    };
    const handleDelete = () => {
        fetch(`http://localhost:8000/car/deletecar`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization":admintoken
            },
            body:JSON.stringify(selectedCar)

        })
            .then((response) => {
                console.log(response);

            }).then(console.log("car deleted successfully"))
            .catch((error) => {
                // handle error, such as showing an error message to the user
                console.error(error.response.data);
                setErrors(error.response.data);
            });
            navigate("/admin-home");
    }
    
    useEffect(()=>{
        if(filterEditDate.availableFrom && filterEditDate.availableTill){
         let dateFrom=new Date(filterEditDate.availableFrom)
         let dateTill=new Date(filterEditDate.availableTill)
         let options = { day: "2-digit", month: "short", year: "numeric" };
         let rentalStartDate = dateFrom.toLocaleDateString("en-GB", options).split(" ").join("-");
         let rentalEndDate = dateTill.toLocaleDateString("en-GB", options).split(" ").join("-");
         
         setTimeout(() => {
            setSelectedCar({...selectedCar,availableFrom:rentalStartDate,availableTill:rentalEndDate})
         },1000);
        
        }
    },[filterEditDate])

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
                                    <option value="SUV">SUV</option>
                                    <option value="UV">UV</option>
                                    <option value="Others">Others</option>

                                </select>
                                {errors.type && <span className="error">{errors.type}</span>}
                            </div>
                            <div>
                                <span htmlFor='capacity' className='leftHeadings'>Capacity</span><br />
                                <select id='capacity' name='capacity' value={selectedCar.capacity} onChange={handleInputChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="4">4 Seater</option>
                                    <option value="6">6 Seater</option>
                                    <option value="9">9 Seater</option>
                                </select>
                                {errors.capacity && <span className="error">{errors.capacity}</span>}

                            </div>
                            <div>
                                <span htmlFor='model' className='leftHeadings'>Model</span><br />
                                <select id='model' name='model' value={selectedCar.model} onChange={handleInputChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                </select>
                                {errors.model && <span className="error">{errors.model}</span>}
                            </div>


                            <div>
                                <span htmlFor='milage' className='leftHeadings'>Milage</span><br />
                                <select id='milage' name='milage' value={selectedCar.milage} onChange={handleInputChange} className="optionsSelector">
                                    <option value=""></option>
                                    <option value="8">8Km/lit</option>
                                    <option value="10">10Km/lit</option>
                                    <option value="12">12Km/lit</option>
                                    <option value="15">15Km/lit</option>
                                    
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
                                    //value={selectedCar.availableFrom}
                                    placeholder='DD MM YYYY'
                                    onChange={(e)=>{
                                        setFilterEditDate((prev)=>({...prev,availableFrom:e.target.value}))}}
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
                                    onChange={(e)=>{
                                        setFilterEditDate((prev)=>({...prev,availableTill:e.target.value}))}}
                                    //value={selectedCar.availableTill}
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
                            { <button className='img-addBtn' onClick={async(e)=>{
                                e.preventDefault()
                                    const data=new FormData()
                                    data.append("file",selectedImage)
                                   data.append("upload_preset","insta_clone_ragesh")
                                   data.append("cloud_name","dql4bctke")
                                   const imageUrl=await cloudinaryFetch(data) 
                                   setSelectedCar(prev=>({...prev,image:imageUrl}))}}>Add</button> }
                            <input
                                type="file"
                                name="image"
                                id="image"
                                value={selectedCar.images}
                                onChange={(e)=>{
                                    setSelectedImage(e.target.files[0])
                                }}
                                // className="imageinput"
                                alt="carimages"
                                // accept="image/*" multiple style={{ display: "none" }}
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
                    <button onClick={() => { 
                        setSelectedCar({
                            id:"",
                            name: "",
                            model: "",
                            capacity: "",
                            image: "",
                            type: "",
                            milage: "",
                            rentPerHour: "",
                            availableFrom: "",
                            availableTill: "",
                            carDetails: "",
                            description: "",
                            details: ""})
                        navigate("/admin-home") }} id="cancelBtn">Cancel</button>
                    <button onClick={handleDelete} id="delBtn">Delete</button>
                    <button onClick={handleSaveClick} id="saveBtn">Save</button>

                </div>
            </form>


        </div>
    );
};

export default AdminEditCar;
