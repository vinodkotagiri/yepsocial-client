import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import logo from '../../assets/images/logo.png'
import { Formik, Form } from 'formik'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegistrationInput from '../registrationInputs'
import * as Yup from 'yup'
import { Container, FormCheck, FormGroup } from 'react-bootstrap'
import { registerApi } from '../../api/auth'
import toast from 'react-hot-toast'

const RegistrationValidation = Yup.object({
	firstName: Yup.string().required('First Name is required').min(4, 'First Name should be atleast 4 chars long'),
	lastName: Yup.string().required('Last Name is required').min(4, 'Last Name should be atleast 4 chars long'),
	email: Yup.string().required('Email is required').email('Enter a valid email'),
	password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
})

const RegistrationForm = (props) => {
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
				props.onHide()
			})
			.catch((error) => {
				toast.error(error.response.data.message)
				console.log(error.response.data)
			})
	}
	return (
		<Modal {...props} size='lg' centered>
			<Modal.Header closeButton>
				<img className='mb-3' src={logo} alt='logo' style={{ width: '6rem' }} />
				<h2 className='text-muted' style={{ margin: '0 auto' }}>
					Register
				</h2>
			</Modal.Header>
			<Modal.Body>
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
							<Row>
								<Col sm={12} md={6}>
									<RegistrationInput type='text' name='firstName' placeholder='First Name' onChange={handleChange} />
								</Col>
								<Col sm={12} md={6}>
									<RegistrationInput type='text' name='lastName' placeholder='Last Name' onChange={handleChange} />
								</Col>
							</Row>
							<Row>
								<Col>
									<RegistrationInput type='email' name='email' placeholder='Email' onChange={handleChange} />
								</Col>
							</Row>
							<Row>
								<Col>
									<RegistrationInput type='password' name='password' placeholder='Password' onChange={handleChange} />
								</Col>
							</Row>
							<Row>
								<Container className='mx-3 mt-3'>
									<h6 className='text-muted'>Date of Birth</h6>
								</Container>
								<Col>
									<RegistrationInput
										type='date'
										min='1970-01-01'
										max='2000-12-31'
										name='date'
										onChange={handleDateChange}
									/>
								</Col>
							</Row>
							<Row>
								<Container className='mx-3 mt-3'>
									<h6 className='text-muted'>Gender</h6>
								</Container>
								<Col>
									<FormGroup
										className='mx-3 py-1'
										name='gender'
										onChange={(e) => setRegistrationInfo({ ...registrationInfo, gender: e.target.value })}>
										<FormCheck inline type='radio' name='gender' label='Male' value='male' defaultChecked={true} />
										<FormCheck inline type='radio' name='gender' label='Female' value='female' />
										<FormCheck inline type='radio' name='gender' label='Other' value='other' />
									</FormGroup>
								</Col>
							</Row>
						</Form>
					)}
				</Formik>
			</Modal.Body>
			<Modal.Footer>
				<Container className='d-flex justify-content-center'>
					<Button onClick={handleRegistration} style={{ width: '20rem', backgroundColor: '#66cd00', border: 'none' }}>
						Register
					</Button>
				</Container>
			</Modal.Footer>
		</Modal>
	)
}
export default RegistrationForm
