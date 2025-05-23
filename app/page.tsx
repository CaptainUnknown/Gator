import '@/app/page.scss'
import Image from 'next/image'
import OpenButton from '@/components/openButton';
import Collage from '@/components/collage';

export const metadata = {
    title: 'Shehroz K.',
    description: 'Full-Stack Web3 Developer | Strap on as we chart the unknown of Web3.',
    image: '/squiggle.png'
}

export default function Home() {
    return <>
    <meta property="og:site_name" content="Shehrozk"/>
    <meta property="og:title" content="Shehroz K."/>
    <meta property="og:description" content="Full-Stack Web3 Developer | Strap on as we chart the unknown of Web3." />

        <section className='intro' id='hero'>
            <div className='introContent'>
                <h1>Shehroz K.</h1>
                <p>A Crazy Curious & Self-taught Full Stack Blockchain Developer, eager to join a team of innovators!</p>
            </div>
            <Image src='/squiggle.png' alt='squiggle' width={500} height={500}/>
        </section>

        <section className='post'>
            <div className='card' id='projects'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://whoopdoop.com" target="_blank">Whoopdoop Labs</a></h3>
                        <h1>A Raffle System</h1>
                        <p> Designed & developed a cross chain raffle system for ERC-721 tokens, that facilitated over 100k ticket purchases. </p>
                        <OpenButton title='Read Case Study' href='raffle-case-study'/>
                    </div>
                    <Image className='splash' src='/raffleCard.webp' alt='Raffle Cards' width={2810/*2635*/} height={1600} style={{aspectRatio: '2810/1600' }}/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://omibio.netlify.app/" target="_blank">Omibio</a></h3>
                        <h1>A Web3 Music Aggregator</h1>
                        <p> ⚠️ WIP: Developed a Music Distribution Service that allows artists to mint their songs as on-chain trade-able tokens.</p>
                        <OpenButton title='Read Case Study' href='omibio-case-study' />
                    </div>
                    <Image className='omibio' src='/omibio.webp' alt='Omibio App Screens' width={3188/*2635*/} height={2048} style={{aspectRatio: '3188/2048'}} />
                </div>
            </div>

        </section>

        <section>
            <Collage />
        </section>
    </>
}
