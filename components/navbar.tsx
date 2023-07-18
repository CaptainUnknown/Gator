import '@/components/navbar.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ isHome }: { isHome?: boolean }) {
    return <>
        <nav>
            {
                isHome ? <>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='mailto:captainunknown7@gmail.com'>Contact</a></li>
                    </ul>
                </> : <>
                    <button>
                        <Link href="/">
                            <Image src="/icons/leftArrow.svg" alt="Go Back" height={25} width={25}/>
                        </Link>
                    </button>
                </>
            }
        </nav>
    </>
}
