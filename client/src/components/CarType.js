
import "../styles/CarTypeMileageSeating.css"
function CarType({selected,handleCarTypeCheckboxChange}){
    return <div id="car-type-inputfield">
    <label>
   <input
     type="checkbox"
     checked={selected === 'SUV'}
     onChange={() => handleCarTypeCheckboxChange('SUV')}
   />
   SUV
  </label>
  <label>
   
  <input
     type="checkbox"
     checked={selected === 'UV'}
     onChange={() => handleCarTypeCheckboxChange('UV')}
   />
   UV
  </label>
  <label>
   
  <input
     type="checkbox"
     checked={selected === 'ALL'}
     onChange={() => handleCarTypeCheckboxChange('ALL')}
   />
   ALL
   </label>                    
   </div>

}

export default CarType;