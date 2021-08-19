import React from 'react';
import Select from 'react-select';
import { useTheme } from '@emotion/react';

function AdminSelect(props) {
  const { options, currentOption, label, onChange } = props;
  const theme = useTheme();
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    container: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    input: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    control: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background,
      border: 'none'
    }),
    indicatorSelector: (provided) => ({
      ...provided,
      color: theme.onBackground
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    menu: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    })
  };
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <span style={{ backgroundColor: theme.surface, color: theme.onSurface }}>
        {label}
      </span>
      <Select
        styles={customStyles}
        options={options}
        value={currentOption}
        onChange={onChange}
      />
    </div>
  );
}

export default AdminSelect;
