'use client'
import '@/components/navbar.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Navbar({ isHome }: { isHome?: boolean }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollToProjects = () => {
        const anchor = document.getElementById('projects');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const scrollToAbout = () => {
        const anchor = document.getElementById('projects');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return <>
        <nav>
            {
                isHome ? <>
                    <ul>
                        <li><a onClick={scrollToAbout}>About</a></li>
                        <li><a onClick={scrollToProjects}>Projects</a></li>
                        <li><a href='mailto:captainunknown7@gmail.com'>Contact</a></li>
                    </ul>
                </> : <>
                    <motion.button
                        whileHover={{ scale: 1.2}}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/">
                            <Image src="/icons/leftArrow.svg" alt="Go Back" height={25} width={25}/>
                        </Link>
                    </motion.button>
                </>
            }
        </nav>
    </>
}
