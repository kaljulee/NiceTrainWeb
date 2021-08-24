import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateStation,
  callDeleteStation,
  callUpdateStation
} from '../../../../redux/thunks/station';
import { stationValidator } from '../../../../redux/validators';
import AdminInput from '../../components/AdminInput';
import AdminSubmitButtonBar from '../../components/AdminSubmitButtonBar';
import {
  NTBox,
  NTColumn,
  NTSection
} from '../../../../components/layoutComponents';
import { NTLabel } from '../../../../components/styledComponents';

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
    <NTBox style={{ display: 'flex' }}>
      <NTSection>
        <NTColumn>
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
        </NTColumn>
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </NTSection>
      <Toaster />
    </NTBox>
  );
}

StationForm.defaultProps = { currentDatum: {} };

export default StationForm;
