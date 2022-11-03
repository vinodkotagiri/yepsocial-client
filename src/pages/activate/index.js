import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import spinner from '../../assets/icons/spinner.gif'
import { activateEmailApi } from '../../api/auth'

const Activate = () => {
	const { token } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [message, setMessage] = useState('')
	console.log(token)
	const verifyEmail = () => {
		activateEmailApi(token)
			.then((response) => {
				console.log(response.data)
				setLoading(false)
				setSuccess(true)
				setTimeout(() => {
					navigate('/login')
				}, 500)
			})
			.catch((error) => {
				console.log(error.response.data.message)
				setLoading(false)
				setError(true)
				setMessage(error.response.data.message)
				setTimeout(() => {
					// navigate('/login')
				}, 5000)
			})
	}
	useEffect(() => {
		verifyEmail(token)
	}, [])
	return (
		<Container fluid className='pt-2' style={{ position: 'relative', backgroundColor: '#e9fac8', height: '100vh' }}>
			<Container className='d-flex justify-content-center align-items-center flex-column gap-2 pb-5 mb-5'>
				<img className='mb-3' src={logo} alt='logo' style={{ width: '15rem' }} />
				<h4 className='text-muted text-center' style={{ fontWeight: 200 }}>
					<span style={{ color: '#75B118', fontWeight: 'normal' }}>yepSocial</span> helps to connect with your loved
					ones
				</h4>
			</Container>
			<Container className='d-flex justify-content-center align-items-center pt-5 mt-5 pb-5'>
				{loading && <img src={spinner} alt='loader' />}
				{!loading && success && (
					<Container className='text-center'>
						<h2 style={{ fontWeight: 600, color: '#66cd00' }}>🎉🎉Congratulations!🎉🎉</h2>
						<h3 className='mt-4 text-muted' style={{ fontWeight: 200, color: '#66cd00' }}>
							your email is verified. Please login to your account.
						</h3>
					</Container>
				)}
				{!loading && error && (
					<Container className='text-center'>
						<h2 style={{ fontWeight: 600, color: '#a50100' }}>😞Something went wrong!</h2>
						<h3 className='mt-4 text-muted' style={{ fontWeight: 200 }}>
							{message}
						</h3>
					</Container>
				)}
			</Container>
		</Container>
	)
}

export default Activate
