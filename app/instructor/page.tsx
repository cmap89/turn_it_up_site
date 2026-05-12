'use client'

import Image from "next/image";
import PageBody from "../components/PageBody";
import PageSection from "../components/PageSection";

export default function Instructor() {
    return <PageBody>
        <PageSection>
            <Image className="w-55 h-80" 
            src="/pics/Brian.avif" 
            alt="Brian Rossy"
            width={1000}
            height={1000}
            />
        </PageSection>
        <PageSection>
            <h2>Brian David Rossy</h2>
            <p>
                Hi! My name is Brian. I love to play the guitar and love to teach it! I&apos;ve been playing guitar for about 10 years and teaching for 7 years. I graduated Broward College in 2011 with a Degree in Jazz Guitar Performance. I love music, especially if there&apos;s lots of guitar in it! The Blues is my favorite musical genre. I have experience teaching students at all ages and skill levels. My job is to help you get to the place you want to be. I believe there is a great musician in you!
            </p>
        </PageSection>
    </PageBody>
}