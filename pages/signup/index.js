import Head from 'next/head';
import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';


export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Fundwise by Sakukurata Kurabatakada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-600'>Fund</span>wise
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>
                Sign Up
              </h2>
              <div className='bg-green-700 border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegUser className='text-gray-400 mr-2'/>
                  <input type='Name' name='Name' placeholder='Name' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 mr-2'/>
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 mr-2'/>
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <a href="#" className='border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign Up</a>
              </div>
            </div>
          </div>{/* Sign in section */}
          
          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hello Friend</h2>
            <div className='bg-white border-2 w-10 border-white inline-block mb-2'></div>        
            <p className='mb-2'>
              Fill up personal information and start  journey  with us.
            </p>
            
          </div>{/* Sign up section */}
        </div>
      </main>

    </div>
  )
}
