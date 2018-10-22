import React from 'react';
import classNames from 'classnames';
import './StandardFormRow.less';

const StandardFormRow = ({ title, children, last, block, grid, ...rest }) => {
  const cls = classNames("standardFormRow", {
    ["standardFormRowBlock"]: block,
    ["standardFormRowLast"]: last,
    ["standardFormRowGrid"]: grid,
  });
  return (
    <div className={cls} {...rest}>
      {title && (
        <div className="label">
          <span>{title}</span>
        </div>
      )}
      <div className="content">{children}</div>
    </div>
  );
};

export default StandardFormRow;
