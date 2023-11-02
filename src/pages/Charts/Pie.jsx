import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

// const pieChartDataa = [
//   { 
//     x: 'Kloo', 
//     y: 18, 
//     text: '18%' },
//   { x: 'Agilysis', y: 8, text: '8%' },
//   { x: 'Koodoo', y: 15, text: '15%' },
//   { x: 'Contentive', y: 11, text: '11%' },
//   { x: 'Intentpro', y: 18, text: '18%' },
//   { x: 'English Score', y: 14, text: '14%' },
//   { x: 'Instrumental', y: 16, text: '16%' },
// ];

const Pie = () => {
  const [pieChartDataa, setpieChartDataa] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/pie_portfolio', {
          query: 'SELECT designation FROM employee',
        }); // Replace with your backend API endpoint
        setpieChartDataa(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



return (
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Allocation as per portfolio" />
    <div className="w-full">
      <PieChart namee="Allocated" id="chart-pie" data={pieChartDataa} legendVisiblity height="full" />
    </div>
  </div>
);
};

export default Pie;
