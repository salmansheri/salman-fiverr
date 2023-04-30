import Image from 'next/image'
import { Inter } from 'next/font/google'
import Featured from '@/components/featured/Featured'
import TrustedBy from '@/components/TrustedBy/TrustedBy'
import Slide from '@/components/slider/Slider'
import Feature from '@/components/featured/Feature'
import BusinessSection from '@/components/featured/BusinessSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Featured />
      <TrustedBy />
      <Slide />
      <Feature />
      <BusinessSection />
      <div className='mt-10'>

      <Slide />
      </div>
      
    </main>
    
  )
}
