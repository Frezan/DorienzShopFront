import { useContext } from 'react'
import { Outlet, Navigate  } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const PrivateRoutes: any = () => {
    const { user }: any = useContext(AuthContext)

    return (    
        user && user.userId ? <Outlet /> : <Navigate to='/connection' />
    )
}

export default PrivateRoutes