import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

export const gridOrderImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 md:ml-3"
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );
  
  export const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="text-white py-1 px-2 capitalize rounded-2xl text-md"
    >
      {props.Status}
    </button>
  );

const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-7 h-7"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );
  
const gridEmployeeCountry= (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
);


export const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '150',
      textAlign: 'Center',
    },
    { field: 'POC_Name',
      headerText: 'POC Name',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },

    { field: 'Impact',
      headerText: 'Impact',
      width: '120',
      textAlign: 'Center' 
    },

    { field: 'Output/Blocker',
      headerText: 'Output/Blocker',
      width: '120',
      textAlign: 'Center' 
    },
    
    { field: 'Submission_Date',
      headerText: 'Submission Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    
    { field: 'Targeted_Portfolio',
      headerText: 'Targeted Portfolio',
      width: '125',
      textAlign: 'Center' },

    { field: 'Skill_Domain',
      headerText: 'Skill Domain',
      width: '125',
      textAlign: 'Center' },
  ];


  export const employeesData = [
    {
      EmployeeID: 1,
      Name: 'Naveed Asif',
      Title: 'Junior Data Scientist',
      Submission_Date: '12/06/2023',
      Skill_Domain: 'Python, GenAI',
      Targeted_Portfolio: 'BC India',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 3,
      Name: 'Akshay Rahul',
      Title: 'Junior Data Scientist',
      Submission_Date: '12/06/2023',
      Skill_Domain: 'Python, GenAI',
      Targeted_Portfolio: 'BC India',
      EmployeeImage:
      avatar3,
  
    },
    {
      EmployeeID: 2,
      Name: 'Shobhit Rajput',
      Title: 'Junior Data Scientist',
      Submission_Date: '12/06/2023',
      Skill_Domain: 'Python, GenAI',
      Targeted_Portfolio: 'BC India',
      EmployeeImage:
      avatar4,
  
    },
    {
      EmployeeID: 'D1',
      Name: 'Karan Choksi',
      Title: 'Senior Data Scientist',
      Submission_Date: '12/06/2020',
      Skill_Domain: 'Python, GenAI',
      Targeted_Portfolio: 'BC India',
      EmployeeImage:
      avatar4,
  
    },
    {
      EmployeeID: 1,
      Name: 'Sakshi Priya',
      Title: 'Junior Data Scientist',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar3,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Abhishek Kumar Singh',
      Title: 'Junior Data Scientist',
      Submission_Date: '12/06/2023',
      Skill_Domain: 'Python, GenAI',
      Targeted_Portfolio: 'BC India',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
      avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      Submission_Date: '01/02/2021',
      Skill_Domain: 'Prompt Eng, NLP',
      Targeted_Portfolio: 'Kloo',
      EmployeeImage:
        avatar2,
    },
  ];