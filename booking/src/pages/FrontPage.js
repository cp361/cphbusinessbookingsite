import React from 'react'
import frontPageImg from '../assets/home-background.png'

const FrontPage = () => {
  return (
    <>

    {/* Styler ydre sectionen, så den på medium skærme vil være i 2 coloumns */}
    <section className=' md:grid-cols-2'>


      {/* Giver styling til billede / figuren til venstre for login-formen + fjerner den på mobilskærm */}
      <div className='w-[468.7px] h-[600px] md:ms-auto justify-center bg-[var(--cphYellow)] hidden md:flex'>
        <img src={frontPageImg} className='' alt=''></img>
      </div>
      
      {/* Styler formen */}
      <div class="max-w-[468.7px] md:h-[600px] md:grid  text-[var(--textColor)] bg-white flex flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">

          {/* Laver CPH Business logo ud af span's */}
          <div className='relative mb-20 top-5'>
            <span className='w-[10px] h-20 block bg-[var(--cphYellow)] absolute top-[-25px] left-[75px]'></span>
            <span className='w-[10px] h-20 block bg-[var(--cphYellow)] absolute top-[-60px] left-[110px] rotate-90'></span>
            <span className='w-[10px] h-20 block bg-[var(--cphYellow)] absolute top-[10px] left-[110px] rotate-90'></span>
            <span className='w-[10px] h-20 block bg-[var(--cphYellow)] absolute top-[-25px] left-[145px]'></span>
          </div>

          {/* CPH Business teksten */}
          <p className='flex justify-center cphFont pt-2 text-[var(--cphBlue)]'><span className='text-[var(--cphYellow)]'>cph</span>business</p>

          {/* Siger sig selv */}
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
        </div>

        <div class="md:-mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium leading-6">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--cphYellow)] sm:text-sm sm:leading-6"></input>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6">Password</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-[var(--cphYellow)] hover:text-[var(--cphYellow)] hover:opacity-70 ease-in-out duration-100">Forgot password?</a>
                </div>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--cphYellow)] sm:text-sm sm:leading-6"></input>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-[var(--cphYellow)] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[var(--cphYellow)] hover:opacity-70 ease-in-out duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cphYellow)]">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
    </>
  )
}

export default FrontPage