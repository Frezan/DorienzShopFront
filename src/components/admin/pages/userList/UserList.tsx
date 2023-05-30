import './UserList.scss';
import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// @ts-ignore
import { userRows } from '../../../../services/dummyData/dummyData.js'


const UserList = () => {

    const [rows, setRows] = useState(userRows);


    const handleDelete = (id: any) => {
        if (confirm('Voulez vous vraiment supprimer cet utilisateur ?')) {
            let newRow = rows.filter((item: any) => {
                if (item.id !== id) {
                    return item;
                }
            })

            setRows([...newRow]);
        }
        else {
            return '';
        }

    }

    const columns: any = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params: any) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.avatar} className='userListImg' />
                        <span>{params.row.firstName} </span>
                        <span>{params.row.lastName}</span>

                    </div>


                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            sortable: false,
            width: 200
        },
        { field: 'depense', headerName: 'Dépenses Total', width: 200 },
        { field: 'role', headerName: 'Role', width: 200 },
        {
            field: 'actions', headerName: 'Actions', width: 150, renderCell: (params: any) => {
                return (
                    <>
                        <Link to={"/admin/users/" + params.row.id}>
                            <button className="userListEdit" >Edit</button>
                        </Link>

                        <DeleteOutline className="userListDelete" onClick={() => { handleDelete(params.row.id) }} />
                    </>
                )
            }
        }

    ];

    return (
        <div>


            <div className='userList'>

                <h1 className='userListMainTitle'>Liste des Utilisateurs</h1>
                {/* @ts-ignore */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[2]}
                    disableSelectionOnClick

                >
                    {({ registerChild }: any) => (
                        <div ref={registerChild}></div>
                    )}
                </DataGrid>
            </div>
        </div>
    )
}

export default UserList