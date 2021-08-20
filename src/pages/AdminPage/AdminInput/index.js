import React from 'react';
import { jsx, useTheme } from '@emotion/react';

function AdminInput(props) {
  const { label, value, onChange } = props;
  const theme = useTheme();
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <span style={{ backgroundColor: theme.surface, color: theme.onSurface }}>
        {label}
      </span>
      <input
        type="text"
        style={{
          height: 30,
          marginBottom: 10,
          background: theme.background,
          color: theme.onBackground,
          border: 'none'
        }}
        value={value || value === 0 ? value : ''}
        onChange={onChange}
      />
    </div>
  );
}

AdminInput.defaultProps = {
  value: ''
};

export default AdminInput;
