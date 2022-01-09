import React, { Component, ReactNode } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Header from '../Header/Header';

import './Home.css';

import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Nurse } from '../../images/star.svg';
import { ReactComponent as House } from '../../images/house.svg';
import { ReactComponent as Clients } from '../../images/star.svg';
import { ReactComponent as Messages } from '../../images/star.svg';
import { ReactComponent as Broadcast } from '../../images/star.svg';
import { ReactComponent as Employees } from '../../images/star.svg';
import { ReactComponent as Appointment } from '../../images/star.svg';

const SECTIONS = [
  { title: 'Приёмы', href: '/appointments', Icon: Appointment },
  { title: 'События', href: '/events', Icon: Star },
  { title: 'Оповещения', href: '/notifications', Icon: Broadcast },
  { title: 'Сообщения', href: '/messages', Icon: Messages },
  { title: 'Клиенты', href: '/clients', Icon: Clients },
  { title: 'Сотрудники', href: '/employees', Icon: Employees },
];

const TITLE = 'Домашняя';

interface IHomeProps {}
interface IHomeState {}

export default class Home extends Component<IHomeProps, IHomeState> {
  render(): ReactNode {
    return (
      <div className="Home">
        <Header
          title={TITLE}
          userName="Кряжев Олег Юрьевич"
          className="Home-Header"
          renderIcon={<House className="Header-Icon" />}
        />
        <div className="Home-Body">
          <div className="SectionNavigation">
            {SECTIONS.map(
              ({ title, href, Icon }): ReactNode => (
                <Link className="SectionNavigation-Item Section" to={href}>
                  <Icon className="Section-Icon" />
                  <span className="Section-Title">{title}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
