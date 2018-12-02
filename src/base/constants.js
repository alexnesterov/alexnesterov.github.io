import { css } from 'styled-components';

export const _color = {
  primary: '#0B0B0F',
  secondary: '#D0CFD5',
  accent: '#b32027',
  dark: '#0B0B0F',
  light: '#FFFFFF',
  black: '#000',
  white: '#FFF'
};

export const _font = {
  primary:
    '"Fira Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  secondary:
    '"Exo 2", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
};

export const _breakpoint = {
  phone: 576,
  mobile: 768,
  tablet: 992,
  desktop: 1200
};

export const _media = Object.keys(_breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${_breakpoint[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const _mediaUp = Object.keys(_breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${_breakpoint[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
