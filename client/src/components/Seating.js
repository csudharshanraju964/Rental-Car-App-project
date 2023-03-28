import "../styles/CarTypeMileageSeating.css"
function Seating({seatingSelect,handleSeatingCheckboxChange}){
    return <div id="seating-div">
    <label>
        
        <input
          type="checkbox"
          checked={seatingSelect === 4}
          onChange={() => handleSeatingCheckboxChange(4)}
        />
        4 Seater
       </label>
       <label>
        
       <input
          type="checkbox"
          checked={seatingSelect === 6}
          onChange={() => handleSeatingCheckboxChange(6)}
        />
        6 Seater
       </label>
       <label>
        
       <input
          type="checkbox"
          checked={seatingSelect === 9}
          onChange={() => handleSeatingCheckboxChange(9)}
        />
        9 Seater
        </label>   
    </div>
}
export default Seating;