import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import LoginInput from '../components/component.loginInputs'
import * as Yup from 'yup'
import RegistrationForm from '../components/component.registrationform'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { loginApi } from '../api/auth'
import toast from 'react-hot-toast'
const loginValidation = Yup.object({
	email: Yup.string().required('Email is required').email('Enter a valid email'),
	password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
})
const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	})
	const { email, password } = loginInfo
	const [showRegistration, setShowRegistration] = useState(false)

	const handleChange = (e) => {
		setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		loginApi(loginInfo)
			.then((response) => {
				console.log(response.data)
				toast.success(response.data.message)
				dispatch(login({ user: response.data.user, token: response.data.token }))
				navigate('/')
			})
			.catch((error) => {
				console.log(error.response)
				toast.error(error.response.data.message)
			})
	}

	return (
		<div className='bg-lime-200 h-screen flex flex-col'>
			<div className='flex w-screen align-center justify-center'>
				<img className='w-[15rem] mb-4' src={logo} alt='logo' />
			</div>
			<h4 className='text-center text-xl -text--secondary'>
				<span className='text-lime-600 font-semibold'>yepSocial</span> helps to connect with your loved ones
			</h4>
			<div className='p-4 mx-auto my-auto'>
				<div className='flex flex-col px-3 py-6 w-[22.5rem] flex-1 rounded-lg shadow-lg bg-white'>
					<h1 className='text-center text-3xl mb-3 text-slate-600 font-semibold'>Login</h1>
					<Formik enableReinitialize initialValues={{ email, password }} validationSchema={loginValidation}>
						{(formik) => (
							<Form onSubmit={handleSubmit} className='flex flex-col w-full'>
								<LoginInput type='email' placeholder='Email address' name='email' onChange={handleChange} />
								<LoginInput type='password' placeholder='Password' name='password' onChange={handleChange} />
								<Link to='/' className='mt-2' style={{ color: '#0c8599', textDecoration: 'none' }}>
									Forgot Password?
								</Link>
								<button
									type='submit'
									className='bg-sky-700 border-none outline-none h-[2.5rem] w-3/4 mx-auto my-6 rounded-md shadow-lg'>
									Login
								</button>
							</Form>
						)}
					</Formik>
					<div className='w-full border-b-2' />
					<button
						onClick={() => setShowRegistration(true)}
						className='my-6 bg-lime-500 border-none h-[2.5rem] mx-auto w-3/4 rounded-md shadow-lg'>
						Register
					</button>
				</div>
			</div>
			{showRegistration && (
				<RegistrationForm setShowRegistration={setShowRegistration} showRegistration={showRegistration} />
			)}
		</div>
	)
}

export default Login
