import * as React from 'react';
import styled, { themed } from '../../utils/styled';
import { StandardProps } from '../../common';
import { distance } from '../../distance';
import { remCalc } from '../../utils/remCalc';

export interface InputErrorProps extends StandardProps {
  /**
   * The content of input error (error to display).
   */
  children?: React.ReactNode;
}

const StyledError = styled<InputErrorProps, 'div'>('div')`
  color: ${themed(props => props.theme.inputError)};
    ${getFontStyle({ size: 'xSmall' })}

  padding: ${distance.xsmall} 0;
`;

/**
 * Input error component.
 */
export class InputError extends React.PureComponent<InputErrorProps> {
  render() {
    const { children } = this.props;
    return children ? <StyledError {...this.props} /> : false;
  }
}
