import PropTypes from "prop-types";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { IoMdMenu } from "@/icons";
import { Button } from "@/components/ui/button";

export default function MobileNav({ className = "", triggerClassNames = "" }) {
    return (
        <Sheet>
            <SheetTrigger className={cn("", triggerClassNames)} asChild>
                <Button size="lg">
                    <IoMdMenu className="text-2xl" />
                </Button>
            </SheetTrigger>
            <SheetContent className={cn("", className)}>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

MobileNav.propTypes = {
    className: PropTypes.string,
    triggerClassNames: PropTypes.string,
};
