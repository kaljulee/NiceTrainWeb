import React from 'react';
/** @jsxImportSource @emotion/react */
import DatePicker from 'react-date-picker';
import { css, useTheme } from '@emotion/react';
import { formatDate } from '../../../utils';
import {
  AdminDateStyler,
  NTSubTitle
} from '../../../components/styledComponents';
// eslint-disable-next-line import/named
import { NTBox } from '../../../components/layoutComponents';

function AdminDatePicker(props) {
  const { value, onChange } = props;
  const dateValue = value ? new Date(value) : undefined;
  const theme = useTheme();
  return (
    <NTBox style={{ width: '100%', height: '100%' }}>
      <NTSubTitle>date</NTSubTitle>
      <AdminDateStyler theme={theme}>
        <DatePicker
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </AdminDateStyler>
    </NTBox>
  );
}

export default AdminDatePicker;
