import React from 'react'
import './User.scss';
import userImg from '../../../../../public/assets/img/Jaffar04.jpg';
import { CalendarToday, LocationSearching, MailOutline, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/admin/user/newUser">
          <button className='userAddbutton'>Create</button>
        </Link>

      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src={userImg} alt="" className='userShowImg' />
            <span className="userShowUserName">Jaffar Hamzah</span>
          </div>
          <div className='userShowBottom'>
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">18/04/1998</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon' />
              <span className="userShowInfoTitle">email.email@email.com</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+33 07 69 00 14 51 52</span>
            </div>

            <span className="userShowTitle">Address Details</span>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon' />
              {/*  <span className="userShowInfoTitle">18 rue de Paris</span>
               <span className="userShowInfoTitle">75001,</span>*/}
              <span className="userShowInfoTitle">Paris |</span>
              <span className="userShowInfoTitle">France</span>
            </div>

          </div>
        </div>
        <div className='userUpdate'>
          <span className="userUpdateTitle">Edit</span>
          <form className='userUpdateForm'>
            <div className="userUpdateLeft">

              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >First Name</label>
                  <input type="text" placeholder='Jaffar' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem  col-sm-4">
                  <label >Last Name</label>
                  <input type="text" placeholder='Hamzah' className='userUpdateInput' />
                </div>

              </div>
              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >Email</label>
                  <input type="text" placeholder='email.email@email.com' className='userUpdateInput' />
                </div>


                <div className="userUpdateItem col-sm-4">
                  <label >Phone</label>
                  <input type="text" placeholder='+33 07 69 00 14 51 52' className='userUpdateInput' />
                </div>
              </div>

              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >Birthday</label>
                  <input type="date" className='userUpdateInput' />
                </div>


                <div className="userUpdateItem col-sm-4">
                  <label >Title : </label>
                  <div className="radio-inline">
                    <label >
                      <input type="radio" name="title" value="mr" />Mr
                    </label>
                    <label>
                      <input type="radio" name="title" value="mme" />Mme
                    </label>
                  </div>

                </div>
              </div>




              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >Street</label>
                  <input type="text" placeholder='18 rue de Paris' className='userUpdateInput' />
                </div>

                <div className="userUpdateItem col-sm-4">
                  <label >Zip Code</label>
                  <input type="text" placeholder='75001' className='userUpdateInput' />
                </div>
              </div>



              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >City</label>
                  <input type="text" placeholder='Paris' className='userUpdateInput' />
                </div>

                <div className="userUpdateItem col-sm-4">
                  <label >Region</label>
                  <input type="text" placeholder='Ile de France' className='userUpdateInput' />
                </div>
              </div>


              <div className='row'>
                <div className="userUpdateItem col-sm-4">
                  <label >Country</label>
                  <input type="text" placeholder='France' className='userUpdateInput' />
                </div>

                <div className="userUpdateItem col-sm-4">
                  <label >Others</label>
                  <input type="text" placeholder='France' className='userUpdateInput' />
                </div>
              </div>

            </div>
            <div className="userUpdateRigth">
              <div className="userUpdateUpload">
                <img src={userImg} alt="updatedImg" className="userUpdateImg" />
                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default User