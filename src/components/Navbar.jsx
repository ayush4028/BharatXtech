import { useState } from 'react';
import Logo from '/images/logo.png';
import open from '/components/Navbar/open.svg';
import close from '/components/Navbar/close.svg';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const link = [
        {
            title: 'Home',
            link: '#',
            active: false,
        },
        {
            title: 'About Us',
            link: '#',
            active: false,
        },
        {
            title: 'Solutions',
            link: '#',
            active: false,
        },
        {
            title: 'Projects',
            link: '#',
            active: false,
        },
        {
            title: 'Blogs',
            link: '#',
            active: false,
        },
        {
            title: 'Contact Us',
            link: '#',
            active: false,
        },
    ];

    function handleClick() {
        setToggle((value) => !value);
    }

    console.log(toggle);

    return (
        <div className="flex flex-col">
            <nav
                className={`relative z-20 bg-blue-500 flex flex-col justify-between px-8 lg:px-36 py-5`}
            >
                <div className="flex flex-row justify-between items-center z-10">
                    <a className="space-x-1" href="#">
                        <img
                            src={Logo}
                            className="aspect-square w-36 h-14 inline -translate-y-1"
                        />
                    </a>

                    {/* Desktop Navbar */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='hidden sm:block md:block lg:block xl:block border-black border-b pb-2 tracking-widest'>Now Hiring: Are you driven and motivated 1st Line IT Support Engineer?</div>
                        <div className=''></div>
                        <div className="hidden md:flex flex-row gap-20">
                            {link.map((item, index) => (
                                <a
                                    key={index}
                                    className={`cursor-pointer text-base tracking-wide hover:text-[#eff3f6] hover:border-red-500 hover:border-t-2 ${item.active
                                            ? 'font-semibold text-[#0283F3] '
                                            : 'text-black'
                                        }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="inline-flex md:hidden items-center justify-center p-2 -translate-y-1 rounded-lg [&>*]:aspect-square [&>*]:h-7"
                        onClick={handleClick}
                    >
                        {toggle ? (
                            <img src={close} alt="close" />
                        ) : (
                            <img src={open} alt="open" />
                        )}
                    </button>

                    <button className="hover:bg-red-400 bg-red-600 hidden md:inline uppercase px-4 py-2 md:px-6 md:py-3 lg:px-9 lg:py-4 rounded-2xl text-sm font-semibold text-white">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`bg-white absolute w-full flex flex-col items-center gap-2 py-5 text-center left-0 translation-all duration-500 md:hidden
                ${toggle ? 'translate-y-20 mt-2 border-t-2 border-gray-200' : ' -translate-y-80 '}`}
            >
                {link.map((item, index) => (
                    <a
                        key={index}
                        className={`text-center cursor-pointer py-2 text-sm tracking-wide select-none hover:text-[#0283F3] ${item.active
                            ? 'font-semibold text-[#0283F3]'
                            : 'text-black'
                            }`}
                    >
                        {item.title}
                    </a>
                ))}

                <button className="hover:bg-red-400 bg-red-600 md:hidden uppercase px-6 py-4 md:px-9 md:py-4 rounded-2xl text-sm font-semibold text-white">
                    Get the App
                </button>
            </div>
        </div>
    );
}
