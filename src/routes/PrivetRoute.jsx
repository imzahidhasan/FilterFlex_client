import React, { useContext } from 'react'
import { AuthContext } from '../firebase/FirebaseProvider'
import Loading from '../components/Loading'

function PrivetRoute({ children }) {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default PrivetRoute