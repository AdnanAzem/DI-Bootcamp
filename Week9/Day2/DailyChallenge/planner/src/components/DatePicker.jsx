// DatePicker.js
import React from "react";
import { connect } from "react-redux";
import { selectDay } from "../app/action";

const DatePicker = ({ selectedDay, selectDay }) => {
  const handleDateChange = (e) => {
    selectDay(e.target.value);
  };

  return (
    <div className="date-picker">
      <h2>Select Date</h2>
      <input type="date" value={selectedDay} onChange={handleDateChange} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedDay: state.planner.selectedDay,
});

export default connect(mapStateToProps, { selectDay })(DatePicker);
