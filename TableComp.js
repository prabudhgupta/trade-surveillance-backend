import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Table2 = () => {
  const data = {
    columns: [
      {
        label: 'Customer/Firm',
        field: 'customer',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      
    ],
    rows: [
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
       customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
        customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
       customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      },
      {
       customer: 'Tiger Nixon',
        name: 'System Architect',
        type: 'Edinburgh',
        status: '61'
      }
    ]
  };

  return (
    <MDBDataTable
      scrollY
      maxHeight="20vh"
      
      borderless
      responsive
      small 
      data={data}
      hover
    />
  );
}

export default Table2;