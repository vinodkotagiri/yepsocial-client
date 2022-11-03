import { ErrorMessage, useField } from 'formik'
import React from 'react'
import { Container, FormControl } from 'react-bootstrap'
import { ErrorIcon } from '../../assets/icons/'
import { OkIcon } from '../../assets/icons/'
const LoginInput = ({ placeholder, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<Container style={{ position: 'relative' }}>
			<FormControl
				style={meta.touched && meta.error ? { borderColor: '#a50100' } : { borderColor: '' }}
				className='my-2'
				placeholder={placeholder}
				type={field.type}
				name={field.name}
				{...field}
				{...props}
			/>
			{meta.touched && meta.error && (
				<>
					<span style={{ color: '#a50100', fontWeight: '200' }}>
						<em>
							<sup>*</sup>
							<ErrorMessage name={field.name} />
						</em>
					</span>
				</>
			)}
			{meta.touched && meta.error && (
				<img
					src={ErrorIcon}
					alt='error-icon'
					width='32px'
					style={{ position: 'absolute', top: ' 10px', right: '10px', opacity: '0.75' }}
				/>
			)}
			{meta.touched && !meta.error && (
				<img
					src={OkIcon}
					alt='ok-icon'
					width='32px'
					style={{ position: 'absolute', top: ' 10px', right: '10px', opacity: '0.75', transform: 'scale(0.75)' }}
				/>
			)}
		</Container>
	)
}

export default LoginInput
