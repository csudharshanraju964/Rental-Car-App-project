import "../styles/CarTypeMileageSeating.css"
function Seating({seatingSelect,handleSeatingCheckboxChange}){
    return <div id="seating-div">
    <label>
        
        <input
          type="checkbox"
          checked={seatingSelect === 'Four seater'}
          onChange={() => handleSeatingCheckboxChange('Four seater')}
        />
        Four Seater
       </label>
       <label>
        
       <input
          type="checkbox"
          checked={seatingSelect === '6 seater'}
          onChange={() => handleSeatingCheckboxChange('6 seater')}
        />
        6 Seater
       </label>
       <label>
        
       <input
          type="checkbox"
          checked={seatingSelect === "More than 6 seat"}
          onChange={() => handleSeatingCheckboxChange('More than 6 seat')}
        />
        More than 6 Seat
        </label>   
    </div>
}
export default Seating;