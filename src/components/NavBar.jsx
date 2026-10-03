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
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const NavItem = ({ label }) => (
    <NavigationMenuItem>
        <NavigationMenuLink>
            {label}
        </NavigationMenuLink>
    </NavigationMenuItem>
)

const GamesMenu = () => (
    <NavigationMenuItem>
        <NavigationMenuTrigger>
            Games
        </NavigationMenuTrigger>

        <NavigationMenuContent>
            <NavigationMenuLink>
                Eko Suit
            </NavigationMenuLink>

            <NavigationMenuLink>
                Olah Pilih Sampah
            </NavigationMenuLink>
        </NavigationMenuContent>
    </NavigationMenuItem>
)

function NavBar() {
    let menuItems = [
        { label: "Home", href: "/" },
        { label: "Tips Dan Aksi", href: "/tips" },
        { label: "Galeri", href: "/galeri" },
    ]

    return (
        <>
            <div className="hidden md:block">
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((item) => {
                            return (
                                <NavItem 
                                key={item.label}
                                label={item.label} />
                            )
                        })}
                        
                        <GamesMenu />           
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        =
                    </SheetTrigger>

                    <SheetContent
                    className="w-50!">
                        <SheetHeader>
                            <SheetTitle>
                                Navigation Menu
                            </SheetTitle>
                            <SheetDescription>
                                Take your time.
                            </SheetDescription>
                        </SheetHeader>
                        
                        <div
                        className="flex justify-center">
                            <NavigationMenu>
                                <NavigationMenuList
                                className="flex flex-col gap-2">
                                    {menuItems.map((item) => {
                                        return (
                                            <NavItem 
                                            label={item.label} 
                                            key={item.label} />
                                        )
                                    })}

                                    <GamesMenu />      
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default NavBar