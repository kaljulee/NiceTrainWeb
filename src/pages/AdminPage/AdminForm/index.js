import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateStation,
  callDeleteStation,
  callUpdateStation
} from '../../../redux/thunks/station';
import { stationValidator } from '../../../redux/validators';

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

  function handleUpdate() {
    const updatedStation = {
      name: nameValue,
      abbrev: abbrevValue,
      id: currentDatum.id
    };
    const stationValidation = stationValidator(updatedStation);
    if (!stationValidation.isOk) {
      toast.error(stationValidation.error);
      return;
    }
    dispatch(callUpdateStation(updatedStation));
  }

  function handleCreate() {
    const newStation = { name: nameValue, abbrev: abbrevValue };
    const stationValidation = stationValidator(newStation);
    if (!stationValidation.isOk) {
      toast.error(stationValidation.error);
      return;
    }
    dispatch(callCreateStation(newStation));
  }

  function handleDelete() {
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
              width: 100,
              height: 30,
              marginBottom: 10
            }}
            type="submit"
            onClick={handleUpdate}
          >
            save
          </button>
          <button
            style={{
              width: 100,
              height: 30,
              marginBottom: 10,
              color: 'white',
              backgroundColor: 'green'
            }}
            onClick={handleCreate}
            type="button"
          >
            new
          </button>
          <button
            style={{
              width: 100,
              height: 30,
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
      <Toaster />
    </div>
  );
}

AdminForm.defaultProps = {
  currentDatum: { name: '', abbrev: '' }
};

export default AdminForm;
