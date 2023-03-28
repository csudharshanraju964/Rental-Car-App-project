import "../styles/CarTypeMileageSeating.css"
 function Milleage({mileageSelect,handleMileageCheckboxChange}){
    return <div id="mileage-div">
    <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === 8}
          onChange={() => handleMileageCheckboxChange(8)}
        />
        8KM
        </label>
        <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === 10}
          onChange={() => handleMileageCheckboxChange(10)}
        />
         10KM
        </label>
        <label>
        
       <input
          type="checkbox"
          checked={mileageSelect === 12}
          onChange={() => handleMileageCheckboxChange(12)}
        />
          12KM
        </label>  
        <label>
        
        <input
           type="checkbox"
           checked={mileageSelect === 15}
           onChange={() => handleMileageCheckboxChange(15)}
         />
           15KM
         </label> 
        </div>
 }
 export default Milleage;