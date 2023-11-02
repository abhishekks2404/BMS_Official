import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddForm from './addform'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject ,Selection,Toolbar} from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const gridOrderImage = (props) => (
  <div>
    <div className="flex items-center gap-2">
    <img
      className="rounded-xl h-7 w-7 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
    </div>
  </div>
);
export const ordersGrid = [
  // {
  //   headerText: 'Image',
  //   template: gridOrderImage,
  //   textAlign: 'Center',
  //   width: '70px',
    
  // },
  { type: 'checkbox', width: '50' },
  {
    field: 'employee_name',
    headerText: 'Employee Name',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'department',
    headerText: 'Department',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'project_name',
    headerText: 'Project Name',
    width: '180',
    textAlign: 'Center',
  },
  {
    field: 'portfolio_name',
    headerText: 'Portfolio',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'employee_role',
    headerText: 'Employee Role',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    field: 'availability',
    headerText: 'Availability',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '100',
  },
  {
    field: 'is_active',
    headerText: 'Is Active',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '100',
  },

  // {
  //   headerText: 'Status',
  //   template: gridOrderStatus,
  //   field: 'OrderItems',
  //   textAlign: 'Center',
  //   width: '120',
  // },
  
  
];


const Allocation = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAdd = (addedData) => {
    // Update the state with the added data
    setordersData((prevData) => [...prevData, addedData]);
  };

  const selectionsettings = { persistSelection: true };
  const [ordersDataa, setordersData] = useState([]);


  const toolbarOptions = ['Delete','Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5004/api/allocation', {
          query: 'SELECT designation FROM employee',
        }); // Replace with your backend API endpoint
        setordersData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Organisation" title="Allocation" />
      <button onClick={() => setIsFormVisible(true)}>Add</button>
      {isFormVisible && <AddForm onClose={() => setIsFormVisible(false)} onAdd={handleAdd} />}
      <GridComponent
        id="gridcomp"
        dataSource={ordersDataa}
        // allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        enableHover="True"
        contextMenuItems={contextMenuItems}
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Selection,Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Allocation;
