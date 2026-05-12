'use client'

import PageBody from "./components/PageBody";
import PageSection from "./components/PageSection";

export default function Home() {
  return (
    <PageBody 
    bodyWrapperStyles="bg-[url('/pics/kpereira52291-guitar-4087877.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed"
    mainWrapperStyles="bg-white/0 w-full"
     >
      <PageSection customSectionStyles="w-1/2" >
            <h2 className="text-5xl" >We Come To You!</h2>
            *Zoom lessons also available
            &quot;Developing people as musicians to comprehend and articulate music, awaken creativity, and be confident in their skill and knowledge of the guitar.&quot;
      </PageSection>
      <PageSection customSectionStyles="bg-white">
          <h2>Click here to sign up for Summer Sessions!</h2>
          [Images Here]
      </PageSection>
    </PageBody>
  );
}
