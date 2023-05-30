import './Sidebar.scss';
import { LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, Receipt, BarChart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <h2 className='sidebarMainTitle'><img className='navbarLogo' src={"/assets/img/logo.png"} ></img>orienz <p>Shop</p></h2>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Dashboard
          </h3>
          <ul className="sidebarList">
            <Link to="/admin">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/admin/users">
              <li className="sidebarListItem">

                <PersonOutline className="sidebarIcon" />
                Users

              </li>
            </Link>
            <Link to="/admin/products" >
              <li className="sidebarListItem">

                <Storefront className="sidebarIcon" />
                Products

              </li>
            </Link>
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon" />
              Transactions
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar