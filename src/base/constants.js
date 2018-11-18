import { css } from 'styled-components';

export const _color = {
  primary: '#2253A2',
  secondary: '#372A56',
  accent: '#D43C43',
  dark: '#152140',
  light: '#D9D6D8',
  black: '#111',
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
