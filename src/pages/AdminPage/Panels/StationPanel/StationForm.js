import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateStation,
  callDeleteStation,
  callUpdateStation
} from '../../../../redux/thunks/station';
import { stationValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';
import { Box, Column } from '../../../../components/layoutComponents';

function StationForm(props) {
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
    <Box>
      <h2 style={{ color: 'goldenrod' }}>{`Edit ${title}`}</h2>
      <Column>
        <Column>
          <AdminInput
            label="name"
            value={nameValue}
            onChange={handleNameChange}
          />
          <AdminInput
            label="abbrev"
            value={abbrevValue}
            onChange={handleAbbrevChange}
          />
        </Column>
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Column>
      <Toaster />
    </Box>
  );
}

StationForm.defaultProps = { currentDatum: {} };

export default StationForm;
