import React, { Component, ReactNode } from 'react';
import cn from 'classnames';

import './Header.css';

interface IHeaderProps {
  title: string;
  userName: string;
  className: string;
  renderIcon: ReactNode;
}

interface IHeaderState {}

export default class Header extends Component<IHeaderProps, IHeaderState> {
  render(): ReactNode {
    const { title, userName, className, renderIcon } = this.props;
    return (
      <div className={cn('Header', className)}>
        <div className="Header-Body">
          <div className="flex-1 d-flex flex-row justify-content-start align-items-center">
            {renderIcon}
            <div className="Header-Title">{title}</div>
          </div>
          <div className="flex-1 d-flex flex-row justify-content-end align-items-center">
            {userName && <div className="Header-UserName">{userName}</div>}
          </div>
          <a className="btn btn-primary Header-ExitBtn" href="/login">
            Выйти
          </a>
        </div>
      </div>
    );
  }
}
