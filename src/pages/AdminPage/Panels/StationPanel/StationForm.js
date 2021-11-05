import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateStation,
  callDeleteStation,
  callUpdateStation,
} from '../../../../redux/thunks/station';
import { stationValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin_Old/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin_Old/AdminSubmitButtonBar';
import {
  NTBox,
  NTColumn,
  NTSection,
} from '../../../../components/layoutComponents';
import { adminUpdator } from '../../../../redux/thunks';

function StationForm(props) {
  const { title, currentDatum, clearCurrentDatum } = props;
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

  function saveInput(newData) {
    adminUpdator(
      newData,
      currentDatum.id,
      (d) => dispatch(callUpdateStation(d)),
      stationValidator,
      (m) => toast.error(m)
    );
    const updatedStation = {
      name: nameValue,
      abbrev: abbrevValue,
      id: currentDatum.id,
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
    if (stationValidation.error) {
      toast.error(stationValidation.error);
    }
    if (!stationValidation.isOk) {
      return;
    }
    dispatch(callCreateStation(newStation));
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteStation({ id: currentDatum.id }));
    clearCurrentDatum();
  }
  return (
    <NTBox style={{ display: 'flex' }}>
      <NTSection>
        <NTColumn>
          <AdminInput
            label='name'
            value={nameValue}
            onChange={handleNameChange}
            onBlur={() => {
              saveInput({ name: nameValue });
            }}
          />
          <AdminInput
            label='abbrev'
            value={abbrevValue}
            onChange={handleAbbrevChange}
            onBlur={() => {
              saveInput({ abbrev: abbrevValue });
            }}
          />
        </NTColumn>
        <AdminSubmitButtonBar
          hasCurrentDatum={!!currentDatum.id}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          clearCurrentDatum={clearCurrentDatum}
        />
      </NTSection>
      <Toaster />
    </NTBox>
  );
}

StationForm.defaultProps = { currentDatum: {} };

export default StationForm;
