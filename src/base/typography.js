import Typography from 'typography';
import grandViewTheme from 'typography-theme-grand-view';
import { _color } from './constants';

grandViewTheme.googleFonts = [
  {
    name: 'Fira Mono',
    styles: ['400', '500', '700'],
  },
];

grandViewTheme.headerFontFamily = [
  'Fira Mono',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];

grandViewTheme.bodyFontFamily = [
  'Fira Mono',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];

grandViewTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  a: {
    color: _color.accent,
  },
});

// console.log(grandViewTheme);

const typography = new Typography(grandViewTheme);

export default typography;
