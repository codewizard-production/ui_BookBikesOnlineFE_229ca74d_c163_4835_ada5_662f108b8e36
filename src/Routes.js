import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
BikeCreate, BikeEdit, BikeView, 
BookingCreate, BookingEdit, BookingView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/BookBikesOnlineFE/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Bikes/view/:id" element={<BikeView {...props} title={'View Bike'} />} />
                        <Route path="Bikes/edit/:id" element={<BikeEdit {...props} title={'Edit Bike'} />} />
                        <Route path="Bikes/create" element={<BikeCreate {...props} title={'Create Bike'} />} />
                                            <Route path="Bookings/view/:id" element={<BookingView {...props} title={'View Booking'} />} />
                        <Route path="Bookings/edit/:id" element={<BookingEdit {...props} title={'Edit Booking'} />} />
                        <Route path="Bookings/create" element={<BookingCreate {...props} title={'Create Booking'} />} />

        </Routes>
    )

};

export default Component;
