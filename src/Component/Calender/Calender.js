//import React from 'react';
import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calender.css';

const Calender = () => {

    const [date, setDate] = useState(new Date());
    return (
      <div className="calender">
        <DayPicker
        mode="single"
         selected={date} 
         onSelect={setDate} />
         <p>You picked {format(date, 'PP')}.</p>
      </div>
    );
    // return (
    //     <div>
            
    //     </div>
    // );
};

export default Calender;