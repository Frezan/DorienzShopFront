import './Product.scss'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Chart from '../../chart/Chart';
{/* @ts-ignore */ }
import { productsData, products } from '../../../../services/products/products.js';
import { Publish } from '@material-ui/icons';


const Product = () => {

  const { id } = useParams();
  const [data, setData] = useState(products[3]);

  return (
    <div className='adminProduct'>
      <div className="adminProductTitleContainer">
        <div className="adminProductTitle">
          <h1>
            {data.name}
          </h1>

          <small className='adminProductCat'>{data.subCat}</small>
        </div>
        <Link to="/newProduct">
          <button className='adminProductAddButton'>Create</button>
        </Link>
      </div>

      <div className="adminProductTop">
        <div className="adminProductTopLeft">
          <Chart data={productsData} dataKey="Sales" title="Performances des Ventes" />
        </div>
        <div className="adminProductTopRight">
          <div className="adminProductInfoTop">
            <img src={"/assets/img/" + data.img1} className='adminProductImg' />

          </div>
          <div className="adminProductInfoBottom">
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">Product Id:</span>
              <span className="adminProductInfoValue">{data.id}</span>
            </div>
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">Sales:</span>
              <span className="adminProductInfoValue">4596</span> {/* A ajouter avec les commandes*/}
            </div>
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">Active:</span>
              <span className="adminProductInfoValue">{data.active ? 'Oui' : 'Non'}</span>
            </div>
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">En stock:</span>
              <span className="adminProductInfoValue">{data.stock > 0 ? 'Oui' : 'Non'}</span>
            </div>
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">En Promotions:</span>
              <span className="adminProductInfoValue">{data.promotion ? 'Oui' : 'Non'}</span>
            </div>
            <div className="adminProductInfoItem">
              <span className="adminProductInfoKey">Promotions de :</span>
              <span className="adminProductInfoValue">{data.promotion ? data.promotionPercentage + '%' : '--'}</span>
            </div>

          </div>
        </div>
      </div>
      <div className="adminProductBottom">
        <form className='adminProductForm'>
          <div className="adminProductFormLeft">
            <label >Product Name</label>
            <input type="text" placeholder={data.name} />

            <select name='active' id="active">
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>



          </div>
          <div className="adminProductFormRight">
            <div className="adminProductUpload">
              <div className="adminProductUploadImgContainer">
                <img src={"/assets/img/" + data.img1} alt={data.summarize} className='adminProductUploadImg' />
                <label htmlFor="file" className='adminProductFileInput'>
                  <Publish /> Image 1
                </label>
                <input type="file" id='file' style={{ display: "none" }} />
              </div>
              <div className="adminProductUploadImgContainer">
                <img src={"/assets/img/" + data.img1} alt={data.summarize} className='adminProductUploadImg' />
                <label htmlFor="file" className='adminProductFileInput'>
                  <Publish /> Image 2
                </label>
                <input type="file" id='file' style={{ display: "none" }} />
              </div>
              <div className="adminProductUploadImgContainer">
                <img src={"/assets/img/" + data.img1} alt={data.summarize} className='adminProductUploadImg' />
                <label htmlFor="file" className='adminProductFileInput'>
                  <Publish /> Image 3
                </label>
                <input type="file" id='file' style={{ display: "none" }} />
              </div>
            </div>
            <button className="adminProductButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product