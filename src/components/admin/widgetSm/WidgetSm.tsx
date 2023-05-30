import React from 'react'
import './WidgetSm.scss';
import userImg from '../../../../public/assets/img/Jaffar04.jpg';
import { Pageview } from '@material-ui/icons';
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Nouveaux Utilisateurs</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={userImg} alt="User Profil" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Jaffar Hamzah</span>
                    <span className="widgetSmUserEmail">jaffar.hamzah@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Pageview/>
                    Details
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={userImg} alt="User Profil" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Jaffar Hamzah</span>
                    <span className="widgetSmUserEmail">jaffar.hamzah@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Pageview/>
                    Details
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={userImg} alt="User Profil" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Jaffar Hamzah</span>
                    <span className="widgetSmUserEmail">jaffar.hamzah@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Pageview/>
                    Details
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={userImg} alt="User Profil" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Jaffar Hamzah</span>
                    <span className="widgetSmUserEmail">jaffar.hamzah@gmail.com</span>
                </div>
                <button className="widgetSmButton">
                    <Pageview/>
                    Details
                </button>
            </li>

        </ul>
    </div>
  )
}

export default WidgetSm