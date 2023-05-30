import React from 'react'
import './FeatureInfo.scss'

import { ArrowDownward, ArrowUpward } from '@material-ui/icons'


const FeatureInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">2.14€</span>
                <span className="featuredMoneyRate">
                    -10.5 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">4.14€</span>
                <span className="featuredMoneyRate">
                    -1.5 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featureMoney">2.25€</span>
                <span className="featuredMoneyRate">
                    +2.5 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
    </div>
  )
}

export default FeatureInfo