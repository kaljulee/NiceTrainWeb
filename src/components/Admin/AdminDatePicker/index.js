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
  console.log(`is mac? ${navigator.appVersion.indexOf('Mac') !== -1}`);
  console.log('.....');
  return (
    <NTBox>
      <NTDatePicker onBlur={onBlur}>
        <DatePicker
          onBlur={() => {
            console.log('bottom date picker blur');
          }}
          onCalendarClose={console.log('cal closed')}
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </NTDatePicker>
    </NTBox>
  );
}

export default AdminDatePicker;
