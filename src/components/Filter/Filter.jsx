import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, setSerch } from 'redux/filterSlice';
import style from '../Filter/Filter.module.css';

export const Filter = () => {
  const filterValue = useSelector(setFilterValue);
  const dispatch = useDispatch();
  const filterID = nanoid();
  return (
    <>
      <label className={style.label} htmlFor={filterID}>
        Find contact by name
        <input
          className={style.input}
          type="text"
          value={filterValue}
          name="filter"
          onChange={e => dispatch(setSerch(e.target.value))}
          id={filterID}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
