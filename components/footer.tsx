import '@/components/footer.scss'
import Image from 'next/image'

export default function Footer() {
    const iconSize = 30;
    return <>
        <div className='footer'>
            <div className='socials'>
                <a href="https://github.com/CaptainUnknown/" target="_blank">
                    <Image src='/icons/github.svg' alt='github' width={iconSize} height={iconSize}/>
                </a>
                <a href="https://twitter.com/CaptainUnknown5" target="_blank">
                    <Image src='/icons/twitter.svg' alt='twitter' width={iconSize} height={iconSize}/>
                </a>
                <a href="mailto:captainunknown7@gmail.com">
                    <Image src='/icons/mail.svg' alt='email' width={iconSize} height={iconSize}/>
                </a>
            </div>
            <div className='copyrightDisclaimer'>
                <p>Copyright © 2023 Shehroz K. All Rights Reserved.</p>
            </div>
        </div>
    </>
}
