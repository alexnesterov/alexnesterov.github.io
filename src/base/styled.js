import styled from 'styled-components';
import { rgba } from 'polished';

import { _color } from '../base/constants';

/**
 * Text Styled
 */
export const Text = styled.div`
  a {
    padding: 2px 0;
    box-shadow: inset 0 -1px 0 ${rgba(_color.accent, 0.2)};

    &:hover {
      color: ${_color.light};
      box-shadow: inset 0 -2em 0 ${_color.dark};
      transition: all .15s ease-in-out;
    }
  }
`;
