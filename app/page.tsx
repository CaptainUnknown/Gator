import '@/app/page.scss'
import Image from 'next/image'
import Link from 'next/link'
import ReadCaseStudyButton from "@/components/readCaseStudyButton";

export default function Home() {
    return <>
        <section className='intro'>
            <div className='introContent'>
                <h1>Shehroz K.</h1>
                <p>A Crazy Curious & Self-taught Web3 Frontend Developer, eager to join a team of innovators!</p>
            </div>
            <Image src='/squiggle.png' alt='squiggle' width={500} height={500}/>
        </section>

        <section className='post'>
            <div className='card' id='projects'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://whoopdoop.com" target="_blank">Whoopdoop Labs</a></h3>
                        <h1>A Raffle System</h1>
                        <p> Developing an efficient raffle system for ERC-721 tokens that seamlessly handles multiple concurrent raffles.</p>
                        <ReadCaseStudyButton href='raffle-case-study'/>
                    </div>
                    <Image className='splash' src='/raffleCS.webp' alt='Raffle Cards' width={2810/*2635*/} height={1600} style={{aspectRatio: '2810/1600' }}/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://omibio.netlify.app/" target="_blank">Omibio</a></h3>
                        <h1>A Web3 Music Aggregator</h1>
                        <p> ⚠️ WIP: Developing a Music Distribution Service that allows artists to mint their songs as on-chain trade-able tokens.</p>
                        <ReadCaseStudyButton href='' />
                    </div>
                    <Image src='/raffleCS2.webp' alt='Raffle Cards' width={2810/*2635*/} height={1600} style={{aspectRatio: '2810/1600', width: '70%', height: '70%'}} />
                </div>
            </div>

        </section>
    </>
}
