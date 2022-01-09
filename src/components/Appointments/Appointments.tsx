import React, { Component } from 'react';

import Moment from 'react-moment';

import './Appointments.css';

import Table from '../Table/Table';
import Header from '../Header/Header';

import { ReactComponent as Appointment } from '../../images/star.svg';

import { appointment as data } from '../../lib/MockData';

const TITLE = 'Приёмы';

interface IAppointmentsProps {}

export default class Appointments extends Component<IAppointmentsProps> {
  render(): React.ReactNode {
    return (
      <div className="Appointments">
        <Header
          title={TITLE}
          userName="Кряжев Олег Юрьевич"
          className="Appointments-Header"
          renderIcon={<Appointment className="Header-Icon" />}
        />
        <div className="Appointments-Body">
          <Table
            data={data}
            columns={[
              {
                dataField: 'date',
                text: 'Дата',
                headerStyle: {
                  width: '200px',
                },
                formatter: (v, row) => {
                  return <Moment date={v} format="DD.MM.YYYY HH.mm" />;
                },
              },
              {
                dataField: 'clientName',
                text: 'Клиент',
              },
              {
                dataField: 'status',
                text: 'Статус',
              },
              {
                dataField: 'holderName',
                text: 'Принимающий',
              },
              {
                dataField: 'compliences',
                text: 'Жалобы',
              },
              {
                dataField: 'diagnosis',
                text: 'Диагноз',
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
