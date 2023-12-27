import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'leyla8hw@gmail.com',
      password: 'leyla8hw@gmail.com',
    }
  })
  const dispatch = useDispatch()
  const submit = (data) => {
    console.log(data)
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts')
        // toast.success(`Welcome ${res.user.name}`)
      }
      ).catch(() => {
        toast.error('Something wrong')
      })
  }
  return (
    <div className='flex justify-center items-center min-h-[80vh]' >
      <form onSubmit={handleSubmit(submit)} className='grid gap-4 border-2 border-black rounded-md shadow-md px-10 py-14'>
        <label className='flex flex-col gap-2'>
          <span>Email</span>
          <input {...register('email')} placeholder='Enter your Email' className='border-2 border-black p-1 rounded-md' type='text' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Password</span>
          <input {...register('password')} placeholder='Enter your Password' className='bor der-2 border-black p-1 rounded-md' type='password' />
        </label>
        <button className='border-2 border-black px-4 py-2 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login