import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Formik, Form } from 'formik'
import RegistrationInput from '../components/component.registrationInputs'
import * as Yup from 'yup'
import { registerApi } from '../api/auth'
import toast from 'react-hot-toast'

const RegistrationValidation = Yup.object({
	firstName: Yup.string().required('First Name is required').min(4, 'First Name should be atleast 4 chars long'),
	lastName: Yup.string().required('Last Name is required').min(4, 'Last Name should be atleast 4 chars long'),
	email: Yup.string().required('Email is required').email('Enter a valid email'),
	password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
})

const RegistrationForm = ({ setShowRegistration }) => {
	const [registrationInfo, setRegistrationInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		gender: 'male',
		birthDay: '',
		birthMonth: '',
		birthYear: '',
	})

	const { firstName, lastName, email, password, gender, birthDay, birthMonth, birthYear } = registrationInfo
	const handleDateChange = (e) => {
		const dateArr = e.target.value.split('-')
		const day = dateArr[2]
		const month = dateArr[1]
		const year = dateArr[0]
		setRegistrationInfo({ ...registrationInfo, birthDay: day, birthMonth: month, birthYear: year })
	}

	const handleChange = (e) => {
		setRegistrationInfo({ ...registrationInfo, [e.target.name]: e.target.value })
	}

	const handleRegistration = () => {
		registerApi(registrationInfo)
			.then((response) => {
				toast.success('Registration successful!')
				console.log(response)
				setShowRegistration(false)
			})
			.catch((error) => {
				toast.error(error.response.data.message)
				console.log(error.response.data)
				setTimeout(() => {
					setShowRegistration(false)
				}, 2500)
			})
	}
	return (
		<div className='absolute z-100 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-3/4 h-5/6 p-6 rounded-xl'>
			<div>
				<img className='mb-3 w-[6rem] absolute' src={logo} alt='logo' />
				<h2 className='text-center py-3 text-3xl font-bold text-slate-500' style={{ margin: '0 auto' }}>
					Register
				</h2>
			</div>
			<div>
				<Formik
					enableReinitialize
					initialValues={{
						firstName,
						lastName,
						email,
						password,
						gender,
						birthDay,
						birthMonth,
						birthYear,
					}}
					validationSchema={RegistrationValidation}>
					{(formik) => (
						<Form>
							<div className='grid grid-flow-col gap-1'>
								<RegistrationInput type='text' name='firstName' placeholder='First Name' onChange={handleChange} />
								<RegistrationInput type='text' name='lastName' placeholder='Last Name' onChange={handleChange} />
							</div>
							<RegistrationInput type='email' name='email' placeholder='Email' onChange={handleChange} />
							<RegistrationInput type='password' name='password' placeholder='Password' onChange={handleChange} />
							<div className='mx-3 mt-3'>
								<h6 className='text-muted'>Date of Birth</h6>
							</div>
							<RegistrationInput
								type='date'
								min='1970-01-01'
								max='2000-12-31'
								name='date'
								onChange={handleDateChange}
							/>
							<div className='mx-3 mt-3'>
								<h6 className='font-bold text-slate-500 mb-3'>Gender</h6>
							</div>
							<div
								className='mx-3 py-1 flex justify-evenly'
								name='gender'
								onChange={(e) => setRegistrationInfo({ ...registrationInfo, gender: e.target.value })}>
								<label htmlFor='gender-male' className='flex mb-2'>
									<input
										inline
										type='radio'
										name='gender'
										value='male'
										className='mx-2 cursor-pointer'
										defaultChecked={true}
									/>
									Male
								</label>
								<label htmlFor='gender-female' className='flex mb-2'>
									<input inline type='radio' name='gender' value='female' className='mx-2 cursor-pointer' />
									Female
								</label>
								<label htmlFor='gender-other' className='flex mb-2'>
									<input inline type='radio' name='gender' value='other' className='mx-2 cursor-pointer' />
									Other
								</label>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<div>
				<div className='flex gap-5'>
					<button
						onClick={() => setShowRegistration(false)}
						className='my-6 bg-slate-500 border-none h-[2.5rem] mx-auto w-1/2 rounded-md shadow-lg'>
						Cancel
					</button>
					<button
						onClick={handleRegistration}
						className='my-6 bg-lime-500 border-none h-[2.5rem] mx-auto w-1/2 rounded-md shadow-lg'>
						Register
					</button>
				</div>
			</div>
		</div>
	)
}

export default RegistrationForm
