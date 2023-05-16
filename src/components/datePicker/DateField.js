import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import DatePicker from "./DatePicker";
import { addDays } from "date-fns";

const DateField = () => {
  const [showDateRange, setShowDateRange] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    startDate: '',
    endDate: '',
  });
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  let startString='';
  let endString='';
  let startDates='';
  let endDates='';

  const handleApply = () => {
    let startTempStr=state[0]?.startDate;
    let endTempStr=state[0]?.endDate;
    // console.log('tempstr',state[0]?.startDate);
    startString=String(startTempStr).split(' ');
    endString=String(endTempStr).split(' ');

    startDates=`${startString[2]}/${startString[1]}/${startString[3]}`
    endDates=`${endString[2]}/${endString[1]}/${endString[3]}`
    
    setSelectedDate({startDate:startDates,endDate:endDates})
    console.log('startString',`${startString[2]}/${startString[1]}/${startString[3]}`);
    console.log('endString',`${endString[2]}/${endString[1]}/${endString[3]}`);
    
  };
  let monthArr=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",'Oct','Nov','Dec'];
  const useMonthNumber=()=>{
    monthArr?.forEach((itm,index)=>{
      if(itm===startString[1]){
        return index+1;
      }
    })
  }
  
  console.log(useMonthNumber());

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center  mt-4">
        <input
          style={{ height: "40px", width: "600px" }}
          onClick={() => setShowDateRange(!showDateRange)}
          type="text"
          // value={`${startDates}-${endDates}`}
          value={selectedDate.startDate && `${selectedDate.startDate}-${selectedDate.endDate}`}
          onChange={() => {}}
        />
      </div>
      {showDateRange && <DatePicker state={state} setState={setState} handleApply={handleApply} />}
    </div>
  );
};

export default DateField;
