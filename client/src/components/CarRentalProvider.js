
import { createContext, useState } from "react";

const CarContext = createContext()
function CarRentalProvider({ children }) {
    const usertoken=localStorage.getItem('token')
    const admintoken=localStorage.getItem("admintoken")
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
            carNumber: "",
            currentTime: "",
            currentDate: "",
            bookinId:""
        })
    const [selectedCar, setSelectedCar] = useState({
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
            details: ""
        });


        return<CarContext.Provider value={{ auth, setAuth, RentalDate, setRentalDate, carBooking, setCarBooking, selectedCar, setSelectedCar,usertoken,admintoken }}>
            { children }
    </CarContext.Provider >
}

export {
    CarContext,
    CarRentalProvider
};