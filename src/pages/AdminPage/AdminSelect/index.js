import React from 'react';
import Select from 'react-select';
import { useTheme } from '@emotion/react';
import { NTColumn } from '../../../components/layoutComponents';
import { NTLabel } from '../../../components/styledComponents';

function AdminSelect(props) {
  const { options, value, label, onChange } = props;
  const theme = useTheme();
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    singleValue: (provided) => ({
      color: theme.onBackground
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
    <NTColumn>
      <NTLabel>{label}</NTLabel>
      <Select
        styles={customStyles}
        options={options}
        value={value}
        onChange={onChange}
      />
    </NTColumn>
  );
}

export default AdminSelect;
