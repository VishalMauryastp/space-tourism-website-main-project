import ComingSoon from '@/components/ComingSoon'
import React from 'react'

const page = () => {
  return (
    <section className=" h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/starter-code/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/starter-code/assets/crew/background-crew-desktop.jpg')]">
       <div className="pt-[74.4px]">
        <ComingSoon />
      </div>
    </section>
  )
}

export default page