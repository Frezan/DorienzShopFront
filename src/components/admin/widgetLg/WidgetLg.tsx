import React from 'react'
import './WidgetLg.scss'
import userImg from '../../../../public/assets/img/Jaffar04.jpg';


const WidgetLg = () => {
  const Button = ({ type }: any) => {

    let typeNoSpace = type.replace(/ /g, "");
    return (
      <button className={"widgetLgButton " + typeNoSpace}>{type}</button>
    )
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Dernières Commandes</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Montant</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>



          <tr className="widgetLgTr">
            <td className="widgetLgTdUser">
              <img src={userImg} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jaffar</span>
            </td>
            <td className="widgetLgDate">01 Aôut 2022</td>
            <td className="widgetLgAmount">150€</td>
            <td className="widgetLgStatus">
              <Button type="Terminé" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgTdUser">
              <img src={userImg} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jaffar</span>
            </td>
            <td className="widgetLgDate">01 Aôut 2022</td>
            <td className="widgetLgAmount">150€</td>
            <td className="widgetLgStatus">
              <Button type="En Cours" />
            </td>
          </tr>


          <tr className="widgetLgTr">
            <td className="widgetLgTdUser">
              <img src={userImg} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Jaffar</span>
            </td>
            <td className="widgetLgDate">01 Aôut 2022</td>
            <td className="widgetLgAmount">150€</td>
            <td className="widgetLgStatus">
              <Button type="Annulé" />
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default WidgetLg