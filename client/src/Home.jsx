import React from "react";
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <Link to='/login' className='btn btn-default border bg-danger rounded-0 text-light   text-decoration-none'>Sign out</Link>

        </div>
    )
}
export default Home
