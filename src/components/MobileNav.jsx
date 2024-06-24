import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";

import { cn } from "@/lib/utils";
import link from "@/constants/NavLink.js";
import { IoChevronDown, IoMdMenu } from "@/icons";

export default function MobileNav({ triggerClassNames = "" }) {
    return (
        <Sheet>
            <SheetTrigger className={cn("", triggerClassNames)} asChild>
                <Button size="lg">
                    <IoMdMenu className="text-2xl" />
                </Button>
            </SheetTrigger>
            <SheetContent className="[&_svg]:h-8 [&_svg]:w-8 pt-14 flex flex-col gap-5 justify-between">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    This is the menubar for our website
                </SheetDescription>
                <nav className="flex flex-col w-full">
                    {link.map((item, index) =>
                        item.subMenu ? (
                            <Menubar
                                key={index}
                                className="h-auto border-none dark:border-none p-0 space-x-0"
                            >
                                <MenubarMenu className>
                                    <MenubarTrigger
                                        asChild
                                        className="w-full py-5 border group border-black rounded-md my-2 text-xl px-1 font-normal"
                                    >
                                        <NavLink
                                            to={item.link}
                                            className={
                                                cn(
                                                    "text-center flex flex-row justify-between",
                                                )
                                            }
                                        >
                                            {item.title}
                                            <IoChevronDown className="mr-2 w-10 h-10 font-thin group-data-[state=open]:rotate-180 transition-all" />
                                        </NavLink>
                                    </MenubarTrigger>
                                    <MenubarContent className="sm:w-[21rem] min-[500px]:w-[21rem]">
                                        {item.subMenu.map(
                                            (menuItem, subIndex) => (
                                                <MenubarItem
                                                    key={subIndex}
                                                    className={cn(
                                                        "p-4 py-5 w-full",
                                                        item.mobNavClassNames
                                                            ? item.mobNavClassNames
                                                            : "",
                                                    )}
                                                >
                                                    {menuItem.title}
                                                </MenubarItem>
                                            ),
                                        )}
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        ) : (
                            <div
                                key={index}
                                className="py-5 border border-black rounded-md my-2 text-xl px-1"
                            >
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        ),
                    )}
                </nav>
                <Button
                    className="uppercase max-sm:block hidden"
                    variant="destructive"
                    size="lg"
                >
                    GET STARTED
                </Button>
            </SheetContent>
        </Sheet>
    );
}

MobileNav.propTypes = {
    triggerClassNames: PropTypes.string,
};

MobileNav.propTypes = {
    triggerClassNames: PropTypes.string,
};
