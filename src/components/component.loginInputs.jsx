import { ErrorMessage, useField } from 'formik'
import React from 'react'
import { ErrorIcon } from '../assets/icons/'
import { OkIcon } from '../assets/icons/'
const LoginInput = ({ placeholder, ...props }) => {
	const [field, meta] = useField(props)

	return (
		<div className='flex flex-col relative '>
			<input
				style={meta.touched && meta.error ? { borderColor: '#a50100' } : { borderColor: '#9483b8' }}
				className='my-2 text-lg text-slate-600 border-solid border-2 p-2 rounded-md'
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
				<img src={ErrorIcon} alt='error-icon' className='w-[2rem] absolute top-4  right-0 opacity-75' />
			)}
			{meta.touched && !meta.error && (
				<img src={OkIcon} alt='ok-icon' className=' w-[1.5rem]  absolute top-5  right-1 opacity-75' />
			)}
		</div>
	)
}

export default LoginInput
