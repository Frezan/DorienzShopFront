import React, { useEffect } from 'react'
import Chart from '../../chart/Chart'
import FeatureInfo from '../../featureInfos/FeatureInfo'
import './AdminHome.scss'
//@ts-ignore
import {userData} from '../../../../services/dummyData/dummyData.js';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

const AdminHome = ()=> {
 useEffect(()=>{
 },[])
return (
  <div >
    <FeatureInfo />
    <Chart data={userData} title="Revenue" dataKey="Amount" grid />
    <div className='homeWidgets'>
      <WidgetSm />
      <WidgetLg />
    </div>
  </div>
)
}

export default AdminHome