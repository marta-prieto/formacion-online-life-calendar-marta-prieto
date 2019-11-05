import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Calendar = props => {
  const { editor } = props;

  return (
    <div className="app__calendar">
      <h1 className="main__title-plus">Estado de ánimo</h1>
      <Link className="app__calendar" to="/editor">
        <p>{editor}</p>
        <div className="plus__button-container">
          <button className="calendar__plus-button">+</button>
        </div>
      </Link>
    </div>
  );
};

Calendar.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default Calendar;
