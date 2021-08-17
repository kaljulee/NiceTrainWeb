import React from 'react';
import DateTimePicker from 'react-datetime-picker';

function AdminDateTimePicker(props) {
  const { value, onChange } = props;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <span style={{ color: 'goldenrod' }}>date and time</span>
      <div style={{ backgroundColor: 'white', width: 'max-content' }}>
        <DateTimePicker value={value} onChange={onChange} />
      </div>
    </div>
  );
}

export default AdminDateTimePicker;
