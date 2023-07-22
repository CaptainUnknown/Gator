'use client'

import '@/components/readCaseStudyButton.scss'
import Image from 'next/image'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function ReadCaseStudyButton({ href }: { href: string }) {
    return <>
        <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={href}>
                <button className='readCaseStudyButton'>Read Case Study
                    <Image src='/icons/rightArrow.svg' alt='left arrow' width={25} height={25}/>
                </button>
            </Link>
        </motion.div>
    </>
}
