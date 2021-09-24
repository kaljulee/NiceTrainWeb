import styled from '@emotion/styled';
import flipConstants from '../FlipText/flipConstants';

export const FlipLine = styled.div`
  position: relative;
  background: ${(p) => p.theme.background};
  height: 1px;
  width: 100%;
  top: ${(p) =>
    (/\S/.test(p.value) ? -1 : 1) * Math.ceil(flipConstants.height / 2)}px;
  border-left: 1px solid ${(p) => p.theme.background};
  border-right: 1px solid ${(p) => p.theme.background};
`;

export const FlipBoxContainer = styled.div`
  height: ${flipConstants.height}px;
  width: 100%;
  box-sizing: border-box;
`;

export const FlipBackdrop = styled.div`
  height: 100%;
  width: ${flipConstants.width}px;
  position: relative;
  border: ${flipConstants.border}px solid ${(p) => p.theme.background};
  background: ${(p) => p.theme.primarySurface};
  margin: auto;
`;

export const FlipText = styled.span`
  font-family: helvetica;
  line-height: ${flipConstants.height}px;
  font-size: ${flipConstants.fontSize}px;
  color: ${(p) => p.$color || 'white'};
  vertical-align: middle;
`;
