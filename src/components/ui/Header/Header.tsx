'use client';

import Link from 'next/link';
import { Button } from '../button';
import { HeroCarousel } from './HeroCarousel';

export const Header = () => {
    return (
        <header className="flex flex-col py-2 gap-2 justify-center items-center">
            <nav className="flex justify-between py-2 px-10 w-full">
                <div>
                    <span>NavBar</span>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/movies">Movies</a>
                    </li>
                    <li>
                        <a href="/cinemas">Cinemas</a>
                    </li>
                </ul>
                <div>
                    {/* <Button>
                        <Link href="/login">Log In</Link>
                    </Button> */}
                    <Button className="bg-blue-900/50 hover:bg-sky-600">
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                </div>
            </nav>
            <section className="flex flex-col w-full">
                <HeroCarousel />
            </section>
        </header>
    );
};
