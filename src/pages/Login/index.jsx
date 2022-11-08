import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const Login = () => {
	return (
		<>
			<img src={logo} alt='logo' className='absolute h-36 bottom-0 right-0' />
			<div className='flex items-center justify-center w-screen h-screen shadow-xl bg-login-bg bg-cover bg-center '>
				<div className='flex bg-gray-800 md:w-1/2 md:h-1/2 opacity-80 rounded-lg  overflow-hidden'>
					<div className='flex p-6 flex-col items-center justify-between w-full'>
						<h1 className='text-4xl text-white'>Login</h1>
						<form className='flex flex-col items-start gap-3 w-full p-6 h-full '>
							<input
								className='h-12 rounded-md shadow-md px-3 text-xl placeholder:text-xl font-light outline-none w-full'
								placeholder='Email'
								type='email'
							/>
							<input
								className='h-12 rounded-md shadow-md  text-xl px-3 placeholder:text-xl font-light outline-none w-full '
								placeholder='Password'
								type='password'
							/>
							<Link to='/forgot-password' className='text-xl text-blue-400'>
								Forgot password?
							</Link>
							<button className='bg-lime-400 text-xl  font-semibold p-2 px-8 rounded-lg shadow-lg'>Login</button>
							<span className='text-xl text-gray-400'>
								Don't have an account?&emsp;
								<Link to='/register' className='text-lime-400'>
									Register
								</Link>
							</span>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
