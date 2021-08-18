import React from 'react';
import DatePicker from 'react-date-picker';
import { formatDate } from '../../../utils';

function AdminDatePicker(props) {
  const { value, onChange } = props;
  const dateValue = value ? new Date(value) : undefined;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <span style={{ color: 'goldenrod' }}>date</span>
      <div style={{ backgroundColor: 'white', width: 'max-content' }}>
        <DatePicker
          value={dateValue}
          onChange={(d) => onChange(formatDate(d))}
        />
      </div>
    </div>
  );
}

export default AdminDatePicker;
