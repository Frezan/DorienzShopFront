import './ProductList.scss';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// @ts-ignore
import { products } from '../../../../services/products/products.js';

const ProductList = () => {

  const [data, setData] = useState(products);

  const handleDelete = (id: any) => {
    if (confirm('Voulez vous vraiment supprimer ce produit ?')) {
      let newRow = data.filter((item: any) => {
        if (item.id !== id) {
          return item;
        }
      })

      setData([...newRow]);
    }
    else {
      return '';
    }

  };

  const columns: any = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name', headerName: 'Produit', width: 200, renderCell: (params: any) => {
        return (
          <div className='adminProductListItem'>
            <img src={"/assets/img/" + params.row.img1} className='adminProductListImg' />
            <span>{params.row.name} </span>
          </div>
        )
      }
    },
    {
      field: 'subCat',
      headerName: 'Catégorie',
      sortable: false,
      width: 200
    },
    {
      field: 'brand',
      headerName: 'Marque',
      sortable: false,
      width: 200
    },

    { field: 'price', headerName: 'Prix', width: 200 },
    { field: 'promotion', headerName: 'Promotion', width: 200 },

    {
      field: 'stock',
      headerName: 'Stock',
      sortable: false,
      width: 200
    },
    {
      field: 'actions', headerName: 'Actions', width: 150, renderCell: (params: any) => {
        return (
          <>
            <Link to={"/admin/products/" + params.row.id}>
              <button className="adminProductListEdit" >Edit</button>
            </Link>

            <DeleteOutline className="productistDelete" onClick={() => { handleDelete(params.row.id) }} />
          </>
        )
      }
    }

  ];

  return (
    <div className='adminProductList'>
      {/* @ts-ignore */}
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[2]}
        disableSelectionOnClick
      >
      </DataGrid>
    </div>
  )
}

export default ProductList
