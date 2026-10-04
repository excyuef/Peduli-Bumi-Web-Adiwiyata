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
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "Tips Dan Aksi", href: "/tips" },
    { label: "Galeri", href: "/galeri" },
];

const games = [
    { label: "Eko Suit", href: "/games/eko-suit" },
    { label: "Olah Pilih Sampah", href: "/games/olah-pilih-sampah" },
];

const NavItem = ({ label, href }) => (
    <NavigationMenuItem>
        <NavigationMenuLink className="" asChild>
            <Button href={href}>{label}</Button>
        </NavigationMenuLink>
    </NavigationMenuItem>
);

const GamesMenu = () => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>Games</NavigationMenuTrigger>

        <NavigationMenuContent>
            {games.map((g) => (
                <NavigationMenuLink key={g.href} asChild>
                    <Button href={g.href}>{g.label}</Button>
                </NavigationMenuLink>
            ))}
        </NavigationMenuContent>
    </NavigationMenuItem>
);

const logoChildStyle =
    "border-3 shadow-[0_3px_0_var(--ink)] border-foreground rounded-sm p-1";

const Logo = () => (
    <>
        <div className="flex items-center gap-2" id="titleBins">
            <span className={`bg-[#4caf50] rotate-6 ${logoChildStyle}`}>
                <svg viewBox="0 0 64 64" aria-hidden="true" className="size-6">
                    <g
                        fill="none"
                        stroke="#2b2118"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    >
                        <path
                            d="M12 52 C12 26 30 10 54 10 C54 36 38 52 12 52 Z"
                            fill="#fff8e7"
                        />
                        <path d="M12 52 L42 22" />
                    </g>
                </svg>
            </span>

            <span className={`bg-[#f6c026] rotate-6 ${logoChildStyle}`}>
                <svg viewBox="0 0 64 64" aria-hidden="true" className="size-6">
                    <g
                        fill="none"
                        stroke="#2b2118"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    >
                        <path
                            d="M20 22 A16 16 0 0 1 46 20"
                            fill="none"
                            strokeWidth="5"
                        />
                        <path d="M48 10 V22 H36" fill="none" strokeWidth="5" />
                        <path
                            d="M44 42 A16 16 0 0 1 18 44"
                            fill="none"
                            strokeWidth="5"
                        />
                        <path d="M16 54 V42 H28" fill="none" strokeWidth="5" />
                    </g>
                </svg>
            </span>

            <span className={`bg-[#e5484d] rotate-6 ${logoChildStyle}`}>
                <svg viewBox="0 0 64 64" aria-hidden="true" className="size-6">
                    <g
                        fill="none"
                        stroke="#2b2118"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    >
                        <path d="M32 6 L59 54 H5 Z" fill="#fff8e7" />
                        <path d="M32 24 V38" strokeWidth="5" />
                        <circle cx="32" cy="46" r="3" fill="#2b2118" />
                    </g>
                </svg>
            </span>

            <span className={`bg-[#7b8794] rotate-355 ${logoChildStyle}`}>
                <svg viewBox="0 0 64 64" aria-hidden="true" className="size-6">
                    <g
                        fill="none"
                        stroke="#2b2118"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    >
                        <path d="M10 18 H54 M24 18 V12 H40 V18" />
                        <path d="M15 18 H49 L45 58 H19 Z" fill="#fff8e7" />
                        <path
                            d="M26 26 V50 M32 26 V50 M38 26 V50"
                            strokeWidth="2.5"
                        />
                    </g>
                </svg>
            </span>
        </div>
        <h1
		className="font-['Lilita_One'] font-normal text-[clamp(30px,5vw,35px)] leading-none text-(--organik) [text-shadow:3px_3px_0_var(--ink)] tracking-[1px]">
			Peduli Bumi
		</h1>
    </>
);

export default function NavBar() {
    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex md:fixed left-0 right-0 top-0 z-50 justify-between px-3 py-2 bg-background">
                <div className="flex justify-center items-center gap-2">
                    <Logo />
                </div>
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
            <div className="md:hidden flex items-end justify-end px-3 py-2">
                <Sheet>
                    <SheetTrigger aria-label="Open menu">☰</SheetTrigger>
                    <SheetContent className="w-50!">
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
    );
}
