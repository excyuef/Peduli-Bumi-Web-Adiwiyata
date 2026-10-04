function NavBar() {
    return (
        <nav  id="menuNavigasi" class="nav-link">
            <div class="navmobcontainer">
                <div class="navmobjdl">
                    <h1>Navigasi</h1>
                    <i id="xNavigasi" class="fa-solid fa-xmark"></i>
                </div>

                <ul class="navlist">
                    <li id="navhome">
                        <a>
                            <i class="fa-solid fa-house house"></i>
                            Beranda
                        </a>
                    </li>
                    <li id="navtisi">
                        <a>
                            <i class="fa-solid fa-hand-point-up"></i>
                            Tips & Aksi
                        </a>
                    </li>
                    <li id="navgaleri">
                        <a>
                            <i class="fa-solid fa-image images"></i>
                            Galeri
                        </a>
                    </li>
                    <li id="navtim">
                        <a>
                            <i class="fa-solid fa-users teams"></i>
                            Tim Kami
                        </a>
                    </li>
                    <li id="navgame">
                        <div id="listnavgame" class="navgim min">
                            <p id="pNavGame">
                                <i class="fa-solid fa-gamepad"></i>
                                Eko Gim
                                <i id="navcepron" class="fa-solid fa-chevron-right"></i>
                            </p>
                            <ul>
                                <li id="navsuit">
                                    <a>
                                    <i class="fa-solid fa-hand-scissors"></i>
                                    Eko Suit
                                    </a>
                                </li>
                                <li id="navsortir">
                                    <a>
                                    <i class="fa-solid fa-sort"></i>
                                    Eko Sortir
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar