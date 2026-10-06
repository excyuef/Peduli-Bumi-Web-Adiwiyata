import { House, Search, Images, Gamepad, Gamepad2 } from "lucide-react";

import { Link } from "react-router-dom";

import Logo from "@/components/Logo";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
    { label: "Beranda", href: "/", icon: House },
    { label: "Tips Dan Aksi", href: "/tips-dan-aksi", icon: Search },
    { label: "Galeri", href: "/galeri", icon: Images },
];

const games = [
    { label: "Suit Alam", href: "/games/suit-alam", icon: Gamepad },
    {
        label: "Pilah Sampah",
        href: "https://game-pilah-sampah-swart.vercel.app/",
        icon: Gamepad2,
    },
];

const NavItem = ({ label, href, icon }) => (
    <NavigationMenuItem>
        <NavigationMenuLink className="" asChild>
            <Button icon={icon}>
                <Link to={href}>{label}</Link>
            </Button>
        </NavigationMenuLink>
    </NavigationMenuItem>
);

const GamesMenu = () => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>Games</NavigationMenuTrigger>

        <NavigationMenuContent>
            {games.map((g) => (
                <NavigationMenuLink key={g.href} asChild>
                    <Button icon={g.icon}>
                        <Link to={g.href}>{g.label}</Link>
                    </Button>
                </NavigationMenuLink>
            ))}
        </NavigationMenuContent>
    </NavigationMenuItem>
);

export default function NavBar() {
    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex md:fixed left-0 right-0 top-0 z-50 justify-between px-3 py-2 bg-background border-3 border-foreground shadow-[3px_3px_0_var(--ink)]">
                <Logo />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((item) => (
                            <NavItem key={item.href} {...item} />
                        ))}
                        <GamesMenu />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile */}
            <div className="md:hidden fixed flex left-3 right-3 top-3 z-50 items-center justify-between px-3 py-3 bg-background border-foreground border-3 shadow-[0_3px_0_var(--ink)] rounded-sm">
                <Logo />
                <Sheet>
                    <SheetTrigger aria-label="Open menu">
                        <Button>Menu</Button>
                    </SheetTrigger>
                    <SheetContent className="w-55! mt-3 mr-3 border-foreground border-3 shadow-[0_3px_0_var(--ink)] rounded-sm">
                        <SheetHeader>
                            <SheetTitle>
                                <Logo />
                            </SheetTitle>
                            {/* <SheetDescription>Take your time.</SheetDescription> */}
                        </SheetHeader>

                        <nav className="flex flex-col gap-2">
                            {[...menuItems, ...games].map((item) => (
                                <SheetClose asChild key={item.href}>
                                    <Button icon={item.icon}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </Button>
                                </SheetClose>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
