import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setfilterContacts, setIsLoading } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { getContactsThunk, deleteContactsThunk } from 'redux/contacts.thunk';
import style from '../Contacts/Contacts.module.css';

import { BallTriangle } from 'react-loader-spinner';

export const Contacts = () => {
  const contactLoading = useSelector(setIsLoading);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContactsThunk(id));
  const filterContacts = useSelector(setfilterContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ul className={style.list}>
        {contactLoading ? (
          <div className="loader">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
        ) : (
          filterContacts.map(({ name, id, phone }) => {
            return (
              <li className={style.item} key={id}>
                {name}: {phone}
                <button
                  className={style.btn}
                  key={id}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
