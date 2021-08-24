import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mq } from '../../styles/breakpoints';

// export const AdminStyle = `
//   color: ${(props) => props.theme.onBackground};
// `;
export const adminStyles = (props) => ({
  color: props.theme.onBackground,
  background: props.theme.background
});

export const NTDatePicker = styled.div`
  .react-date-picker {
    display: inline-flex;
    position: relative;
    color: ${(p) => p.onPrimarySurface};
  }
  .react-date-picker,
  .react-date-picker *,
  .react-date-picker *:before,
  .react-date-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-date-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-date-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: thin solid ${(p) => p.theme.secondarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-date-picker__inputGroup {
    min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);
    flex-grow: 1;
    padding: 0 2px;
    box-sizing: content-box;
    background: ${(p) => p.theme.primarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-date-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-date-picker__inputGroup__input {
    min-width: 0.54em;
    height: 100%;
    position: relative;
    padding: 0 1px;
    border: 0;
    background: ${(p) => p.theme.primarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-date-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }
  .react-date-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
    stroke: ${(p) => p.theme.onPrimarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-date-picker__button:enabled {
    cursor: pointer;
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: ${(p) => p.theme.accent};
  }
  .react-date-picker__button:disabled .react-date-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-date-picker__button svg {
    display: inherit;
    stroke: ${(p) => p.theme.onPrimarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-date-picker__calendar {
    width: 350px;
    max-width: 100vw;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-date-picker__calendar--closed {
    display: none;
  }
  .react-date-picker__calendar .react-calendar {
    border-width: thin;
  }
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
  ${true && 'margin: 5px 0 5px 0;'}
`;

export const NTInput = styled.input`
  height: 30px;
  margin-bottom: 10;
  background: ${(p) => p.theme.secondarySurface};
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
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    min-width: 5vw;
    ${mq({
      padding: ['2px 4px', '2px 4px', '6px 12px', '6px 12px', '6px 12px']
    })};
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

export const NTTimePicker = styled.div`
  width: max-content;

  .react-time-picker {
    display: inline-flex;
    position: relative;
  }
  .react-time-picker,
  .react-time-picker *,
  .react-time-picker *:before,
  .react-time-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-time-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-time-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: thin solid ${(p) => p.theme.secondarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-time-picker__inputGroup {
    min-width: calc((4px * 3) + 0.54em * 6 + 0.217em * 2);
    flex-grow: 1;
    padding: 0 2px;
    box-sizing: content-box;
    background: ${(p) => p.theme.primarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-time-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-time-picker__inputGroup__input {
    min-width: 0.54em;
    height: 100%;
    position: relative;
    padding: 0 1px;
    border: 0;
    background: ${(p) => p.theme.primarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-time-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-time-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-time-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-time-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }
  .react-time-picker__inputGroup__amPm {
    font: inherit;
    -moz-appearance: menulist;
  }
  .react-time-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
    stroke: ${(p) => p.theme.onPrimarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-time-picker__button:enabled {
    cursor: pointer;
  }
  .react-time-picker__button:enabled:hover .react-time-picker__button__icon,
  .react-time-picker__button:enabled:focus .react-time-picker__button__icon {
    stroke: ${(p) => p.theme.accent};
  }
  .react-time-picker__button:disabled .react-time-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-time-picker__button svg {
    display: inherit;
    stroke: ${(p) => p.theme.onPrimarySurface};
    color: ${(p) => p.theme.onPrimarySurface};
  }
  .react-time-picker__clock {
    width: 200px;
    height: 200px;
    max-width: 100vw;
    padding: 25px;
    background-color: white;
    border: thin solid #a0a096;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-time-picker__clock--closed {
    display: none;
  }
`;
