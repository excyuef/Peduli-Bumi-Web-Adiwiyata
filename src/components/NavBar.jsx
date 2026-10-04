import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tips Dan Aksi", href: "/tips" },
    { label: "Galeri", href: "/galeri" },
]

const games = [
    { label: "Eko Suit", href: "/games/eko-suit" },
    { label: "Olah Pilih Sampah", href: "/games/olah-pilih-sampah" },
]

const NavItem = ({ label, href }) => (
    <NavigationMenuItem>
        <NavigationMenuLink asChild>
            <a href={href}>{label}</a>
        </NavigationMenuLink>
    </NavigationMenuItem>
)

const GamesMenu = () => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>Games</NavigationMenuTrigger>
        <NavigationMenuContent>
            {games.map((g) => (
                <NavigationMenuLink key={g.href} asChild>
                    <a href={g.href}>{g.label}</a>
                </NavigationMenuLink>
            ))}
        </NavigationMenuContent>
    </NavigationMenuItem>
)

export default function NavBar() {
    return (
        <>
            {/* Desktop */}
            <div className="hidden md:block">
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
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        =
                    </SheetTrigger>

                    <SheetContent
                    className="w-50!">
                        <SheetTrigger aria-label="Open menu">☰</SheetTrigger>
                    </SheetContent>
                    <SheetTrigger aria-label="Open menu">☰</SheetTrigger>
                    <SheetContent
                    className="w-50!">
                        <SheetHeader>
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <SheetDescription>Take your time.</SheetDescription>
                        </SheetHeader>

                        <nav className="flex flex-col gap-2">
                            {[...menuItems, ...games].map((item) => (
                                <SheetClose asChild key={item.href}>
                                    <a href={item.href}>{item.label}</a>
                                </SheetClose>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}