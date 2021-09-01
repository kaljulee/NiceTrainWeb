import React from 'react';
import TimePicker from 'react-time-picker';
import { NTTimePicker } from '../../styledComponents';
import { NTBox } from '../../layoutComponents';

function AdminTimePicker(props) {
  const { value, onChange } = props;
  return (
    <NTBox>
      <NTTimePicker>
        <TimePicker value={value} onChange={onChange} locale="sv-sv" />
      </NTTimePicker>
    </NTBox>
  );
}

export default AdminTimePicker;
