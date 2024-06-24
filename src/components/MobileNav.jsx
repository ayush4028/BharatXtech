import React, { useState } from 'react';
import PropTypes from 'prop-types';
import link from '@/constants/NavLink.js';
import { Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import { IoMdMenu } from '@/icons';
import { Button } from '@/components/ui/button';

export default function MobileNav({ triggerClassNames = '' }) {
    const [showMenubar, setShowMenubar] = useState(false);

    const toggleMenubar = () => {
        setShowMenubar(!showMenubar); 
    };

    return (
        <Sheet>
            <SheetTrigger className={cn('', triggerClassNames)} asChild>
                <Button size="lg" onClick={toggleMenubar}>
                    <IoMdMenu className="text-2xl" />
                </Button>
            </SheetTrigger>
            <SheetContent className="pt-16">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        <nav>
                            {link.map((item, index) =>
                                item.navMenu ? (
                                    <Menubar key={index} style={{ display: showMenubar ? 'block' : 'none' }}>
                                        <MenubarMenu>
                                            <MenubarTrigger>{item.title}</MenubarTrigger>
                                            <MenubarContent>
                                                {item.navMenu.map((menuItem, subIndex) => (
                                                    <MenubarItem key={subIndex} className={cn(
                                                        "p-4",
                                                        item.mobNavClassNames
                                                            ? item.mobNavClassNames
                                                            : "",
                                                    )}>
                                                        {menuItem.title}
                                                    </MenubarItem>
                                                ))}
                                                
                                            </MenubarContent>
                                        </MenubarMenu>
                                    </Menubar>
                                ) : (
                                    <div key={index} className="w-[14.7rem] px-1 ">
                                        <div className="py-5 border border-black rounded-md my-2 text-xl ">
                                            <Link to={item.link}>{item.title}</Link>
                                        </div>
                                    </div>
                                )
                            )}
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

MobileNav.propTypes = {
    triggerClassNames: PropTypes.string,
};
