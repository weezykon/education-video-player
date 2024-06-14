import React from 'react'
import { Paragraph } from 'ui/atoms/paragraph'
import { LayoutProps } from './types';
import { Heading } from 'ui/atoms/heading';
import { MENU_ITEMS } from 'constants/menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from 'constants/routes';

const Layout = (props: LayoutProps) => {
  const navigate = useNavigate();
  
  const goToHome = () => {
    navigate(PAGE_ROUTES.HOME, {
      replace: true,
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="w-full flex justify-between items-center h-[80px] xl:h-[100px] px-6">
        {/* logo */}
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <Paragraph size="b3" className="tracking-[10px]" color="text-gray-400">
            EDU
          </Paragraph>
        </div>
      </header>
      <main className="flex-grow">
        {/* Add main content here */}
        <div className='w-full flex'>
          <div className='flex flex-col w-3/12 py-12 px-8 space-y-7'>
            <Heading
              variant='h1'
              size='h6'
              weight="bold"
              className=""
            >
              Explore
            </Heading>

            <nav className="w-full">
              <ul className="w-full flex flex-col justify-start items-start space-y-4">
                {Array.isArray(MENU_ITEMS) && MENU_ITEMS.length > 0 ? MENU_ITEMS.map((menu) => {
                  return (
                    <li key={menu?.slug} className="w-full">
                      <NavLink to={menu?.link} className="text-gray-800 hover:text-gray-800">
                        {menu?.name}
                      </NavLink>
                    </li>
                  )
                }) : null}
              </ul>
            </nav>
          </div>
          <div className='w-9/12 h-[calc(100vh_-_80px)] xl:h-[calc(100vh_-_100px)] scroll-smooth overflow-y-scroll'>
            {props.children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout
