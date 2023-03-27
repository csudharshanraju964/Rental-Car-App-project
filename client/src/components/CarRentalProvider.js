
import { createContext, useState } from "react"

const CarContext = createContext()
function CarRentalProvider({ children }) {
    const [auth, setAuth] = useState("");
    const [RentalDate, setRentalDate] = useState({
        start: "",
        end: ""
    })
    const [carBooking, setCarBooking] = useState({
        startingDay: "",
        endingDay: "",
        carType: "",
        carName: "",
        seat: "",
        mileage: "",
        rupeesPerKm: "",
        carNumber: ""
    })
    const [selectedCar,setSelectedCar ] = useState({
        name: "",
        model: "",
        capacity: "",
        image: "",
        type: "",
        milage: "",
        rentPerHour: "",
        availableFrom: "",
        availableTill: "",
        carDetails:"",
        description: "",
        details: ""
    });


    return <CarContext.Provider value={{ auth, setAuth, RentalDate, setRentalDate, carBooking, setCarBooking,selectedCar,setSelectedCar }}>
        {children}
    </CarContext.Provider>
}

export {
    CarContext,
    CarRentalProvider
};