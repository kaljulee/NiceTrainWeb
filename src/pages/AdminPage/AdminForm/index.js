import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  callDeleteStation,
  callUpdateStation
} from '../../../redux/thunks/station';

function AdminForm(props) {
  const { title, currentDatum } = props;
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState(currentDatum.name);
  const [abbrevValue, setAbbrevValue] = useState(currentDatum.abbrev);

  useEffect(() => {
    setNameValue(currentDatum.name);
    setAbbrevValue(currentDatum.abbrev);
  }, [title, currentDatum]);

  function handleNameChange(event) {
    setNameValue(event.target.value);
  }

  function handleAbbrevChange(event) {
    setAbbrevValue(event.target.value);
  }

  function handleSubmit() {
    dispatch(
      callUpdateStation({
        name: nameValue,
        abbrev: abbrevValue,
        id: currentDatum.id
      })
    );
  }

  function handleDelete() {
    console.log('would delete');
    dispatch(callDeleteStation({ id: currentDatum.id }));
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h2 style={{ color: 'goldenrod' }}>{`Edit ${title}`}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <span style={{ color: 'goldenrod' }}>name</span>
          <input
            type="text"
            style={{ height: 30, marginBottom: 10 }}
            value={nameValue}
            onChange={handleNameChange}
          />
          <span style={{ color: 'goldenrod' }}>abbrev</span>
          <input
            type="text"
            style={{ height: 30, marginBottom: 10 }}
            value={abbrevValue}
            onChange={handleAbbrevChange}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            style={{
              width: 150,
              height: 30,
              alignSelf: 'flex-end',
              marginBottom: 10
            }}
            type="submit"
            onClick={handleSubmit}
          >
            save
          </button>
          <button
            style={{
              width: 150,
              height: 30,
              alignSelf: 'flex-end',
              marginBottom: 10,
              color: 'white',
              backgroundColor: 'red'
            }}
            onClick={handleDelete}
            type="button"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

AdminForm.defaultProps = {
  currentDatum: { name: '', abbrev: '' }
};

export default AdminForm;
