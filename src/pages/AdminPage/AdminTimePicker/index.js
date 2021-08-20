import React from 'react';
import TimePicker from 'react-time-picker';

function AdminTimePicker(props) {
  const { value, onChange } = props;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <span style={{ color: 'goldenrod' }}>time</span>
      <div style={{ backgroundColor: 'white', width: 'max-content' }}>
        <TimePicker value={value} onChange={onChange} locale="sv-sv" />
      </div>
    </div>
  );
}

export default AdminTimePicker;
