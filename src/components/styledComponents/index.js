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

export const AdminTitle = styled.h1`
  ${adminStyles}
`;

export const AdminSubTitle = styled.h2`
  ${adminStyles}
`;

export const AdminLabel = styled.h3`
  ${adminStyles}
`;

export const AdminText = styled.text`
  ${adminStyles}
`;

export const AdminButton = styled.button((props) => ({
  background: props.accent,
  color: props.onAccent,
  border: 'none'
}));

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
