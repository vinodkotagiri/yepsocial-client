/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import spinner from '../assets/spinners/spinner.gif'
import { activateEmailApi } from '../api/auth'

const Activate = () => {
	const { token } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [message, setMessage] = useState('')
	const verifyEmail = () => {
		activateEmailApi(token)
			.then((response) => {
				console.log(response.data)
				setLoading(false)
				setSuccess(true)
				setTimeout(() => {
					navigate('/login')
				}, 5000)
			})
			.catch((error) => {
				console.log(error.response.data.message)
				setLoading(false)
				setError(true)
				setMessage(error.response.data.message)
				setTimeout(() => {
					navigate('/login')
				}, 5000)
			})
	}
	useEffect(() => {
		verifyEmail(token)
	}, [])
	return (
		<div className='pt-2 relative h-screen bg-lime-200'>
			<div className='flex flex-col justify-center items-center  gap-2 pb-5 mb-5'>
				<img className='mb-3' src={logo} alt='logo' style={{ width: '15rem' }} />
				<h4 className='text-slate-500 text-center font-thin text-2xl'>
					<span className='text-lime-600 font-semibold'>yepSocial</span> helps to connect with your loved ones
				</h4>
			</div>
			<div className='flex justify-center align-center pt-5 mt-5 pb-5'>
				{loading && <img src={spinner} alt='loader' />}
				{success && (
					<div className='text-center'>
						<h2 className='font-semibold text-3xl text-green-700'>🎉🎉Congratulations!🎉🎉</h2>
						<h3 className='mt-4 text-slate-500 text-2xl font-thin'>
							your email is verified. Please login to your account.
						</h3>
					</div>
				)}
				{error && (
					<div className='text-center'>
						<h2 className='font-semibold text-3xl text-red-700'>😞Something went wrong!</h2>
						<h3 className='mt-4 text-2xl text-slate-500 font-thin'>{message}</h3>
					</div>
				)}
			</div>
		</div>
	)
}

export default Activate
