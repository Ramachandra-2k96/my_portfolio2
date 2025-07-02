import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Navbar";
import MobileNav from "./MobileNavbar";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold">
                <h1 className="text-3xl md:text-5xl">Ramachandra<span className="text-accent">.</span></h1>
            </Link>
            <div className="hidden xl:flex gap-8 items-center">
              <Nav />

              <Link href="/contact">
                  <Button>Hire me</Button>
              </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  );
};

export default Header;
