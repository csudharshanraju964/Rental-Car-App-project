
import { createContext, useState} from "react"

const CarContext=createContext()
function CarRentalProvider({children}){
    const [RentalDate,setRentalDate]=useState({
        start:"",
        end:""
    })
    const [carBooking,setCarBooking]=useState({
        startingDay:"",
        endingDay:"",
        carType:"",
        carName:"",
        seat:"",
        mileage:"",
        rupeesPerKm:"",
        carNumber:""
    })
    
    
    return <CarContext.Provider value={{RentalDate,setRentalDate,carBooking,setCarBooking}}>
        {children}
    </CarContext.Provider>
}

export {
    CarContext,
    CarRentalProvider
};