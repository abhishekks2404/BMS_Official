import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'employee_name',
    headerText: 'Employee Name ',
    width: '150',
    textAlign: 'Center',
  },
  { field: 'designation',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  // { headerText: 'Country',
  //   width: '120',
  //   textAlign: 'Center',
  //   template: gridEmployeeCountry },

  { field: 'manager',
    headerText: 'Manager',
    width: '135',
    
    textAlign: 'Center' },

  { field: 'department',
    headerText: 'Department',
    width: '120',
    textAlign: 'Center' },
  { field: 'employee_id',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];


const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);

  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/employees', {
          query: 'SELECT designation FROM employee',
        }); // Replace with your backend API endpoint
        setEmployeesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Organisation" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
