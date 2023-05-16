import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { Button } from "react-bootstrap";

const DatePicker = ({ state, setState, handleApply }) => {
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);
  // let start = state[0]?.startDate;

  // console.log("start", start);
  // console.log("strStart", String(start));

  // let date = new Date();

  // console.log('state',state);
  // const handleApply = () => {
  //   let startTempStr = state[0]?.startDate;
  //   let endTempStr = state[0]?.endDate;
  //   // console.log('tempstr',state[0]?.startDate);
  //   let startString = String(startTempStr).split(" ");
  //   let endString = String(endTempStr).split(" ");

  //   console.log(
  //     "startString",
  //     `${startString[2]}/${startString[1]}/${startString[3]}`
  //   );
  //   console.log("endString", `${endString[2]}/${endString[1]}/${endString[3]}`);
  // };

  return (
    <div>
      <DateRangePicker
        ranges={state}
        onChange={(item) => {
          setState([item.selection]);
          console.log("item", item);
        }}
        // onChange={handleOnChange}
        months={2}
        direction="horizontal"
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        preventSnapRefocus={true}
        calendarFocus="backwards"
        startDatePlaceholder="12/12/2022"
      />
      <Button onClick={handleApply}>Apply</Button>
    </div>
  );
};

export default DatePicker;
