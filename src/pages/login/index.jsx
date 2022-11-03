import React from 'react'
import logo from '../../assets/images/logo.png'
import Container from 'react-bootstrap/Container'
import { Formik, Form } from 'formik'
import { Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = () => {
	return (
		<Container fluid style={{ backgroundColor: '#e9fac8', height: '100vh' }}>
			<Container className='d-flex justify-content-center align-items-center flex-column gap-2'>
				<img
					className='mb-3'
					src={logo}
					alt='logo'
					style={{ width: '15rem' }}
				/>
				<h4 className='text-muted'>
					<span style={{ color: '#75B118', fontWeight: 'bold' }}>
						yepSocial
					</span>{' '}
					helps to connect with your loved ones
				</h4>
			</Container>
			<Container
				className='p-5 py-2 my-5'
				style={{ width: '50rem', maxWidth: '22rem' }}>
				<Formik>
					{(formik) => (
						<Form
							className='d-flex flex-column p-3'
							style={{
								border: '1px solid #d6d6d6',
								borderRadius: '0.5rem',
								backgroundColor: '#fff',
								boxShadow: '4px 4px 16px 4px #d6d6d6',
							}}>
							<FormControl
								type='email'
								className='my-2'
								placeholder='Email address'
							/>
							<FormControl
								type='password'
								className='my-2'
								placeholder='password'
							/>
							<Link
								to='/'
								className='mt-2'
								style={{ color: '#0c8599', textDecoration: 'none' }}>
								Forgot Password?
							</Link>
							<Button
								type='submit'
								className='my-3'
								style={{ backgroundColor: '#0c8599', border: 'none' }}>
								Login
							</Button>
							<hr />
							<Button
								type='submit'
								className='my-3'
								style={{ backgroundColor: '#66cd00', border: 'none' }}>
								Register
							</Button>
						</Form>
					)}
				</Formik>
			</Container>
		</Container>
	)
}

export default Login
