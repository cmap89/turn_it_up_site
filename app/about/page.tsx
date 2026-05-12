'use client'

import Image from "next/image";
import PageBody from "../components/PageBody";
import PageSection from "../components/PageSection";
import Banner from "../components/Banner";

export default function About() {
    return <PageBody>
                <Banner>
                    <p>hello world</p>
                <Image className="w-90 h-90 border-red-500 border-1" 
                src="/pics/freestocks-photos-musician-2943109_1920.jpg" 
                alt="Live music performance image"
                width={1080}
                height={1080}
                 />
                </Banner>
            <PageSection>
                <h3>Hello and welcome to Turn It Up Guitar Lessons!</h3>
                <p>
                    We believe in offering the best in quality and satisfaction on your journey to learn guitar. We offer lessons in the convenience of your own home. Whether beginner or advanced we can help you get to the place you want to be!
                </p>
                <br />
                <p>
                  Our mission is developing people as musicians to comprehend and articulate music, awaken creativity, and be confident in their skill and knowledge of the guitar.
                </p>
                <br />
                <p>
                    There are 4 main core values we base our lessons on:
                </p>

                <h2>ARTISTRY</h2>
                <p>
                    &quot;I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it.&quot; Jimmy Page (Led Zeppelin)
                </p>
                <br />
                <p>
                    Creativity and expression are about exploration and experience. Recognizing and developing our &quot;sound&quot; is one of the most exciting parts of learning guitar and one we aim to develop in each student. No one has a voice like yours and the world is waiting to hear it!
                </p>
                <br />
                <h2>MUSICIANSHIP</h2>
                <p>
                    Becoming a musician is the core ingredient to becoming a successful guitar player. That&apos;s why we strive to incorporate the key elements of music in every lesson we teach. Music is a language, our goal is that you learn to speak it. We are passionate about developing people as musicians who are able to both comprehend and articulate music. 
                </p>
                ​<br />
                <h2>PERFORMANCE</h2>
                <p>
                    A motto of ours is, &quot;The more you know, the more you grow.&quot; 
                </p>
                <br />
                <p>
                    Every lesson we plan is based on your performance. We believe in growth and prepare each lesson with your growth in mind. Learning to practice efficiently and develop better methods to improve learning are also implemented in our lessons. We help you to reach and maintain your goals and well as set you up for continued success.
                </p>
                ​<br />
                <h2>SKILL</h2> 
                <p>
                    The guitar is a massively diverse and expressive instrument. We help to develop the core knowledge and skills that are required to be successful on the instrument as well as to specialize in the style or styles you are most interested in.
                </p>
            </PageSection>
            <PageSection>
                <h2>I&apos;d love to hear from you!</h2>
                [SIGN UP FORM]
            </PageSection>
    </PageBody>
}