

import React from 'react'

function Navbar() {
  return (
    <section class="bg-black">
  <nav className='fixed top-0 left-0 w-full z-10 bg-pink-900'>
    <div class="flex py-6 px-4 md:px-14 items-center">
      <a class="inline-block text-2xl font-bold mr-16 xl:mr-24" href="#">
        <img src="suncealand-assets/logos/suncealand-white.svg" alt="" />
      </a>
      <div class="hidden lg:block">
        <ul class="flex items-center">
          <li class="relative group mr-16">
            <button class="inline-block text-left text-base font-medium text-white">
              <div class="flex items-center">
                <span class="mr-3">Resources</span>
                <svg width="12" height="7" viewbox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <div class="hidden group-hover:block absolute z-20 bottom-0 left-0 w-52 pt-4 transform translate-y-full">
              <div class="py-4 px-6 bg-white rounded-lg border-2 border-blueGray-900"><a class="block mb-2 text-xs" href="#">Link 1</a><a class="block mb-2 text-xs" href="#">Link 1</a><a class="block text-xs" href="#">Link 1</a></div>
            </div>
          </li>
          <li class="mr-16"><a class="inline-block text-base font-medium text-white" href="#">Community</a></li>
          <li class="mr-16"><a class="inline-block text-base font-medium text-white" href="#">Story</a></li>
          <li><a class="inline-block text-base font-medium text-white" href="#">Pricing</a></li>
        </ul>
      </div>
      <div class="hidden lg:block ml-auto">
        <a class="relative group inline-flex h-8 w-20 items-center justify-center border border-white rounded-lg overflow-hidden" href="#about">
          <span class="relative z-10 font-semibold text-white group-hover:text-black transition duration-500">About Us</span>
          <div class="absolute top-0 left-0 h-full w-28 transform -translate-x-full -ml-1 group-hover:-translate-x-0 bg-white transition duration-500 ease-linear"></div>
        </a>
      </div>
      <button class="lg:hidden ml-auto navbar-burger flex p-1 items-center text-white">
        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
  </nav>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
    <nav class="relative pt-8 pb-8 bg-white h-full overflow-y-auto">
      <div class="flex flex-col px-6 h-full">
        <a class="inline-block text-2xl font-bold ml-8 mb-16" href="#">
          <img src="suncealand-assets/logos/suncealand-dark.svg" alt="" />
        </a>
        <ul class="w-full mb-auto pb-16">
          <li class="group mb-6">
            <button class="inline-block text-left text-base font-medium text-black">
              <div class="flex items-center">
                <span class="mr-3">Resources</span>
                <svg width="12" height="7" viewbox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <div class="hidden group-hover:block pt-4">
              <div class="pl-6"><a class="block mb-2 text-black" href="#">Link 1</a><a class="block mb-2 text-black" href="#">Link 1</a><a class="block text-black" href="#">Link 1</a></div>
            </div>
          </li>
          <li class="mb-6"><a class="inline-block text-base font-medium text-black" href="#">Community</a></li>
          <li class="mb-6"><a class="inline-block text-base font-medium text-black" href="#">Story</a></li>
          <li><a class="inline-block text-base font-medium text-black" href="#">Pricing</a></li>
        </ul>
        <div class="w-full">
          <a class="relative group inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-white border border-black" href="#">
            <span class="text-black">Login</span>
          </a>
          <a class="relative inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-blue-500" href="#">
            <span class="text-black">Logout</span>
          </a>
          <p class="pl-2 text-sm">2022 © Shuffle</p>
        </div>
      </div>
    </nav>
  </div>
</section>
  )
}

export default Navbar