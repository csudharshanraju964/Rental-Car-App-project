import "../styles/CarTypeMileageSeating.css"
 function Milleage({mileageSelect,handleMileageCheckboxChange}){
    return <div id="mileage-div">
    <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === "Less than 10KM"}
          onChange={() => handleMileageCheckboxChange('Less than 10KM')}
        />
        Less than 10KM
        </label>
        <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === "15KM"}
          onChange={() => handleMileageCheckboxChange('15KM')}
        />
         15KM
        </label>
        <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === "More than 15KM"}
          onChange={() => handleMileageCheckboxChange('More than 15KM')}
        />
        More than 15KM
        </label>  
        </div>
 }
 export default Milleage;