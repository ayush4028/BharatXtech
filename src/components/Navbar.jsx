import { Link } from "react-router-dom";
import Logo from "/logo.png";

import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import link from "@/constants/NavLink.js";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <header className="flex flex-row justify-between items-center h-32 border-2 border-red-900 lg:px-20 px-5 w-full lg:gap-10 gap-5">
            <img src={Logo} alt="Company Logo" />

            <div className="flex flex-col justify-center items-center w-full">
                <div className="cursor-text text-base text-[#627792] py-3 max-md:hidden">
                    <span className="cursor-pointer text-[#0E2B5C] font-semibold">
                        Now Hiring:
                    </span>{" "}
                    Are you a driven and motivated 1st Line IT Support Engineer?
                </div>

                <nav className="flex flex-row gap-6 font-bold relative border-t max-xl:hidden">
                    {link.map((item, index) =>
                        item.subMenu ? (
                            <NavigationMenu key={index}>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="[&>svg]:h-5 m-0 h-full [&>svg]:w-5 w-full text-lg max-xl:px-3 max-2xl:text-sm px-5 py-4 relative group hover:bg-white data-[state=open]:bg-inherit data-[active]:bg-inherit focus:bg-white font-semibold">
                                            {item.title}
                                            <span className="absolute top-0 left-0 bg-[#FC5546] w-0 h-0.5 rounded-sm group-hover:w-full transition-all duration-300"></span>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent
                                            className={cn(
                                                "p-4",
                                                item.additionClassNames
                                                    ? item.additionClassNames
                                                    : "",
                                            )}
                                        >
                                            {item.subMenu.map(
                                                (subItem, index) => (
                                                    <NavigationMenuLink
                                                        asChild
                                                        key={index}
                                                    >
                                                        <Link
                                                            key={index}
                                                            to={subItem.link}
                                                            className="hover:bg-slate-300 rounded-md p-4"
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ),
                                            )}
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        ) : (
                            <Link
                                key={index}
                                to={item.link}
                                className="px-5 py-4 text-lg relative group font-semibold text-center max-xl:px-3 max-2xl:text-sm"
                            >
                                {item.title}
                                <span className="absolute top-0 left-0 bg-[#FC5546] w-0 h-0.5 rounded-sm group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ),
                    )}
                </nav>
            </div>

            <Button className="uppercase max-sm:hidden" variant="destructive" size="lg">
                GET STARTED
            </Button>

            <MobileNav triggerClassNames="xl:hidden px-4" />
        </header>
    );
}