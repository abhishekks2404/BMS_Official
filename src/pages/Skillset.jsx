import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Header } from '../components';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData,pieChartDataa,GenAI} from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';


export const Skillset = () => {
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Organisation" title="Research and Development" />
      
            <div>
              <p className="font-bold text-gray-400 item-center">Python</p>
              
              <div className="w-60">
              <Pie namee = "Python" id="pie-chart" data={GenAI} legendVisiblity height="300px" />
                </div>
            </div>
            


        </div>
        
         
         
         
       
        
  )
}

export default Skillset