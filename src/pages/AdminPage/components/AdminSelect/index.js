import React from 'react';
import Select from 'react-select';
import { useTheme } from '@emotion/react';
import { NTColumn } from '../../../../components/layoutComponents';
import { NTLabel } from '../../../../components/styledComponents';

function AdminSelect(props) {
  const { options, value, label, onChange } = props;
  const theme = useTheme();
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface,
      backgroundColor: theme.primarySurface
    }),
    singleValue: (provided) => ({
      background: theme.primarySurface,
      color: theme.onPrimarySurface
    }),
    container: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface,
      backgroundColor: theme.primarySurface
    }),
    input: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface,
      backgroundColor: theme.primarySurface
    }),
    control: (provided, selectState) => ({
      ...provided,
      color: theme.onPrimarySurface,
      boxShadow: 0,
      backgroundColor: theme.primarySurface,
      borderColor: selectState.isFocused
        ? theme.accent
        : theme.secondarySurface,
      '&:hover': {
        borderColor: theme.accent
      }
    }),
    indicatorSelector: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface,
      backgroundColor: theme.primarySurface
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: theme.onPrimarySurface,
      backgroundColor: theme.primarySurface
    }),
    menu: (provided) => ({
      ...provided,
      color: theme.onSecondarySurface,
      backgroundColor: theme.secondarySurface
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
