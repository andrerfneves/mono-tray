// @flow

import React, { PureComponent } from 'react';
import cx from 'classnames';
import { FoldingCube } from 'better-react-spinkit';

const SPINNER_COLOR = '#000';
const SPINNER_SIZE = 60;

type Props = {
  isFullBleed: boolean,
}

export default class Spinner extends PureComponent<Props> {
  render() {
    const { isFullBleed } = this.props;

    const className = cx({
      spinner: true,
      'spinner--full': isFullBleed,
    });

    return (
      <div className={className}>
        <FoldingCube
          size={SPINNER_SIZE}
          color={SPINNER_COLOR}
        />
      </div>
    );
  }
}

