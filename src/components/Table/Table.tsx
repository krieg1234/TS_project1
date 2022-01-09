import React, { Component, ReactNode, ReactPropTypes } from 'react';

import cn from 'classnames';
import BootstrapTable from 'react-bootstrap-table-next';
import PropTypes from 'prop-types';

import './Table.css';

const NO_DATA_TEXT = 'Нет данных';

type Data = {
  date: number;
  clientName: string;
  status: string;
  holderName: string;
  compliences: string;
  diagnosis: string;
};

type Column = {
  dataField: string;
  text: string;
  headerStyle?: any;
  formatter?: (v: number, row: string) => ReactNode;
};

interface ITableProps {
  columns: Column[];
  data: Data[];
  keyField?: string;
  noDataText?: string;

  hasHover?: boolean;
  hasOptions?: boolean;
  hasBorders?: boolean;

  isStriped?: boolean;

  //expandRow?:object

  className?: string;
  containerClass?: string;

  getRowStyle: (row: object, rowIndex: number) => any;
}

export default class Table extends Component<ITableProps> {
  static propTypes = {
    getRowStyle: PropTypes.func,
  };
  static defaultProps = {
    data: [],
    columns: [],
    keyField: 'id',
    noDataText: NO_DATA_TEXT,

    isRemote: true,
    isStriped: true,
    isLoading: false,

    hasHover: false,
    hasHeader: false,
    hasBorders: false,

    getRowStyle: function () {
      return null;
    },
  };
  getRowStyle = (row: object, rowIndex: number) => {
    return this.props.getRowStyle(row, rowIndex);
  };
  render(): ReactNode {
    const {
      data,
      columns,
      keyField,
      //expandRow,
      className,
      containerClass,
      isStriped,
      hasBorders,
      hasHover,
      noDataText,
    } = this.props;

    return (
      <div className={cn('TableContainer', containerClass)}>
        <BootstrapTable
          // expandRow={expandRow}
          data={data}
          columns={columns}
          keyField={keyField?keyField:'id'}
          classes={cn('Table', className)}
          headerClasses={'Table-Header'}
          striped={isStriped}
          hover={hasHover}
          bordered={hasBorders}
          rowStyle={this.getRowStyle}
          noDataIndication={noDataText}
        />
      </div>
    );
  }
}
