import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import LoginInput from '../../components/loginInputs'
import * as Yup from 'yup'

const loginValidation = Yup.object({
	email: Yup.string().required('Email is required').email('Enter a valid email'),
	password: Yup.string().required('Password is required').min('Password must be at least 6 characters long'),
})

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	})
	const { email, password } = loginInfo
	const navigate = useNavigate()

	const handleChange = (e) => {
		setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Container fluid style={{ backgroundColor: '#e9fac8', height: '100vh' }}>
			<Container className='d-flex justify-content-center align-items-center flex-column gap-2'>
				<img className='mb-3' src={logo} alt='logo' style={{ width: '15rem' }} />
				<h4 className='text-muted'>
					<span style={{ color: '#75B118', fontWeight: 'bold' }}>yepSocial</span> helps to connect with your loved ones
				</h4>
			</Container>
			<Container
				className='mt-5 pt-2 px-4 d-flex flex-column align-content-center'
				style={{
					width: '50rem',
					maxWidth: '22rem',
					border: '1px solid #d6d6d6',
					borderRadius: '0.5rem',
					backgroundColor: '#fff',
					boxShadow: '4px 4px 16px 4px #d6d6d6',
				}}>
				<h1 className='text-center text-muted mb-3'>Login</h1>
				<Formik enableReinitialize initialValues={{ email, password }} validationSchema={loginValidation}>
					{(formik) => (
						<Form onSubmit={handleSubmit} className='d-flex flex-column' style={{ width: '100%' }}>
							<LoginInput type='email' placeholder='Email address' name='email' onChange={handleChange} />
							<LoginInput type='password' placeholder='Password' name='password' onChange={handleChange} />
							<Link to='/' className='mt-2' style={{ color: '#0c8599', textDecoration: 'none' }}>
								Forgot Password?
							</Link>
							<Button type='submit' className='my-3' style={{ backgroundColor: '#0c8599', border: 'none' }}>
								Login
							</Button>
						</Form>
					)}
				</Formik>
				<hr />
				<Button onClick={() => navigate('/')} className='my-3' style={{ backgroundColor: '#66cd00', border: 'none' }}>
					Register
				</Button>
			</Container>
		</Container>
	)
}

export default Login
