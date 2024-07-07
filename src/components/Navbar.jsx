import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import link from "@/constants/NavLink.js";

const Web = () => {
    return (
        <div>
            <div>Website</div>
            <p>Development</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <div>App</div>
            <p>Development</p>
        </div>
    );
};
const Business = () => {
    return (
        <div>
            <div>Business</div>
            <p>Development</p>
        </div>
    );
};

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const dropdownRef = useRef(null);
    const triggerRefs = useRef([]);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !triggerRefs.current.some(ref => ref && ref.contains(event.target))
        ) {
            setActiveIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleDropdownToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleContentChange = (content) => {
        setActiveContent(content);
    };
    
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <header className="flex justify-between items-center h-32 border-2 border-red-900 lg:px-20 px-5 w-full lg:gap-10 gap-5">
            <img src={Logo} alt="Company Logo" />

            <div className="flex flex-col justify-center items-center w-full">
                <div className="cursor-text text-base text-[#627792] py-3 max-md:hidden">
                    <span className="cursor-pointer text-[#0E2B5C] font-semibold">
                        Now Hiring:
                    </span>{" "}
                    Are you a driven and motivated 1st Line IT Support Engineer?
                </div>

                <nav className="flex gap-6 font-bold relative max-xl:hidden">
                    {link.map((item, index) =>
                        item.project ? (
                            <NavigationMenu key={index}>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className="relative group"
                                            onClick={() => handleDropdownToggle(index)}
                                            ref={el => triggerRefs.current[index] = el}
                                        >
                                            <span className="text-lg max-xl:px-3 max-2xl:text-sm px-5 py-4 font-semibold text-center">
                                                {item.title}
                                            </span>
                                            {activeIndex === index && (
                                                <div
                                                    ref={dropdownRef}
                                                    className="absolute top-full mt-2 bg-orange-400 py-3 px-5 rounded-lg shadow-lg z-10 w-[600px] h-[400px]"
                                                    onClick={stopPropagation}
                                                >
                                                    <div className="flex">
                                                        <div className="flex flex-col">
                                                            <div className="w-40">
                                                                <NavLink
                                                                    to="/example"
                                                                    className="block py-2 text-white hover:bg-white hover:text-black"
                                                                    onClick={() => handleContentChange(<Web />)}
                                                                >
                                                                    Website Link
                                                                </NavLink>
                                                            </div>

                                                            <NavLink
                                                                to="/another-example"
                                                                className="block py-2 text-white hover:bg-white hover:text-black"
                                                                onClick={() => handleContentChange(<App />)}
                                                            >
                                                                App Development
                                                            </NavLink>
                                                            <NavLink
                                                                to="/yet-another-example"
                                                                className="block py-2 text-white hover:bg-white hover:text-black"
                                                                onClick={() => handleContentChange(<Business />)}
                                                            >
                                                                Business Development
                                                            </NavLink>
                                                        </div>
                                                        <div className="ml-4">
                                                            {activeContent}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-transparent group-hover:bg-orange-400"></span>
                                        </NavigationMenuTrigger>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        ) : (
                            <NavLink
                                key={index}
                                to={item.link}
                                className="px-5 py-4 text-lg relative group font-semibold text-center max-xl:px-3 max-2xl:text-sm"
                            >
                                {item.title}
                            </NavLink>
                        )
                    )}
                </nav>
            </div>

            <Button
                className="uppercase max-sm:hidden"
                variant="destructive"
                size="lg"
            >
                GET STARTED
            </Button>

            <MobileNav triggerClassNames="xl:hidden px-4" />

        </header>
    );
}
