import React from 'react';
/** @jsxImportSource @emotion/react */
import DatePicker from 'react-date-picker';
import { formatDate } from '../../../utils';
import { NTDatePicker } from '../../styledComponents';
// eslint-disable-next-line import/named
import { NTBox } from '../../layoutComponents';

function AdminDatePicker(props) {
  const { value, onChange, onBlur } = props;
  const dateValue = value ? new Date(`${value}T00:00:00`) : undefined;
  return (
    <NTBox>
      <NTDatePicker onBlur={onBlur}>
        <DatePicker
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </NTDatePicker>
    </NTBox>
  );
}

export default AdminDatePicker;
