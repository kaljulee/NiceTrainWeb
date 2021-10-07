import React from 'react';
/** @jsxImportSource @emotion/react */
import DatePicker from 'react-date-picker';
import { formatDate } from '../../../utils';
import { NTDatePicker } from '../../styledComponents';
// eslint-disable-next-line import/named
import { NTBox } from '../../layoutComponents';

function AdminDatePicker(props) {
  console.log('admindatepicker');
  const { value, onChange, onBlur } = props;
  console.log('recd value');
  console.log(value);
  const dateValue = value ? new Date(`${value}T00:00:00`) : undefined;
  console.log('date value: ');
  console.log(dateValue);
  // eslint-disable-next-line no-undef
  console.log(navigator.appVersion);
  // eslint-disable-next-line no-undef
  console.log(navigator.appVersion.indexOf('Mac') !== -1);
  // eslint-disable-next-line no-undef
  console.log(navigator.appVersion.indexOf('Win') !== -1);

  console.log('.....');
  return (
    <NTBox>
      <NTDatePicker onBlur={onBlur}>
        <DatePicker
          onCalendarClose={console.log('cal closed')}
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </NTDatePicker>
    </NTBox>
  );
}

export default AdminDatePicker;
