import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
    axios.post('https://mern-server-api-phi.vercel.app/register',{name,email,password})
    .then(result =>{
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
           <div className='bg-white p-3 rounded w-25'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit} >
               <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder='Enter Name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>setName(e.target.value)} />
               </div>
               <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="Password" placeholder='Enter Password' autoComplete='off' name='Password' className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)} />
               </div>
               <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
            </form>
               <p>Already have a account</p>
               <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
           </div>
        </div>
    )
}

export default Signup
