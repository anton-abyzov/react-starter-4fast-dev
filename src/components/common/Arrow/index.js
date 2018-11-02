import React from 'react';
import classNames from 'classnames';

const Arrow = props => {
  const { src, handleClick, arrowVisible } = props;

  return (
    <div
      className={classNames('center-all')}
      style={{ visibility: arrowVisible ? 'visible' : 'collapse' }}
    >
      <img alt="arrow" src={src} onClick={() => handleClick()} />
    </div>
  );
};

export default Arrow;
