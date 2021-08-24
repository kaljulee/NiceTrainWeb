import React from 'react';
/** @jsxImportSource @emotion/react */
import DatePicker from 'react-date-picker';
import { formatDate } from '../../../../utils';
import {
  NTDatePicker,
  NTSubTitle
} from '../../../../components/styledComponents';
// eslint-disable-next-line import/named
import { NTBox } from '../../../../components/layoutComponents';

function AdminDatePicker(props) {
  const { value, onChange } = props;
  const dateValue = value ? new Date(value) : undefined;
  return (
    <NTBox style={{ width: '100%', height: '100%' }}>
      <NTSubTitle>date</NTSubTitle>
      <NTDatePicker>
        <DatePicker
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </NTDatePicker>
    </NTBox>
  );
}

export default AdminDatePicker;
