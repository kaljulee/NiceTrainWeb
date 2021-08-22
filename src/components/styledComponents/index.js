import styled from '@emotion/styled';
import { css } from '@emotion/react';

// export const AdminStyle = `
//   color: ${(props) => props.theme.onBackground};
// `;
export const adminStyles = (props) => ({
  color: props.theme.onBackground,
  background: props.theme.background
});

// export const AdminTitle = styled.h2(AdminStyle);
//
// export const AdminSubTitle = styled.h3(AdminStyle);

// export const AdminMiniTitle = styled.h4(AdminStyle);

const datePickerStyles = (props) => css`
  .react-date-picker {
    background: ${props.theme.primarySurface};
  }
  .react-date-picker__wrapper {
    border: 1px solid ${props.theme.accent};
  }
  input {
    color: ${props.theme.onPrimarySurface};
  }
`;

export const AdminDateStyler = styled.div`
  ${datePickerStyles}
`;

export const NTTitle = styled.h2`
  color: ${(p) => p.theme.accent};
`;

export const NTSubTitle = styled.h3`
  color: ${(p) => p.theme.accent};
  margin: 5px 0 5px 0;
`;

export const NTLabel = styled.h4`
  color: ${(p) => p.theme.accent};
  margin: 5px 0 5px 0;
`;

export const NTInput = styled.input`
  height: 30px;
  margin-bottom: 10;
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
  border: 1px solid ${(p) => p.theme.secondarySurface};
`;

export const NTText = styled.text`
  ${adminStyles}
  background: ${(p) => p.theme.surface};
  color: ${(p) => p.theme.onSurface};
`;

export const NTButton = styled.button`
  background: ${(p) => p.theme.accent};
  color: ${(p) => p.theme.onAccent};
  border: none;
  width: 100px;
  height: 30px;
`;

export const NTSaveButton = styled(NTButton)`
  background: ${(p) => p.theme.success};
  color: ${(p) => p.theme.onSuccess};
`;

export const NTDeleteButton = styled(NTButton)`
  background: ${(p) => p.theme.error};
  color: ${(p) => p.theme.onError};
`;

export const NTNewButton = styled(NTButton)`
  background: ${(p) => p.theme.warning};
  color: ${(p) => p.theme.onWarning};
`;

export const NTList = styled.div`
  max-height: 60vh;
  overflow: auto;
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
`;

export const NTListItem = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.secondarySurface};
  color: ${(p) => p.theme.onSecondarySurface};
  height: 5vh;
  border-top: 1px solid ${(p) => p.theme.primarySurface};
  border-bottom: 1px solid ${(p) => p.theme.primarySurface};
  margin: auto;
`;

export const NTListItemField = styled.div`
  width: 100%;
  background: ${(p) => (p.$isActive ? p.theme.accent : p.theme.surface)};
  color: ${(p) => (p.$isActive ? p.theme.onAccent : p.theme.onSurface)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabContainer = styled.div`
  background: ${(p) => p.theme.primarySurface};
  padding: 1vh 0 1vh 0;
  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid ${(p) => p.theme.accent};
    margin: 0 0 10px;
    padding: 0;
    color: ${(p) => p.theme.accent};
  }

  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    background: ${(p) => p.theme.accent};
    /*border-color: #aaa;*/
    color: ${(p) => p.theme.onAccent};
    font-weight: bold;
    border-radius: 5px 5px 0 0;
  }

  .react-tabs__tab--disabled {
    color: ${(p) => p.theme.secondarySurface};
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: '';
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;
