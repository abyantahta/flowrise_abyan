import React from 'react'
import { createClient } from "@/prismicio"
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from '@/app/components/Bounded'

async function Header() {
    const client = createClient()
    const settings = await client.getSingle('settings')

  return (
    <Bounded as='header' className=' py-4 md:px-6 lg:py-6'>
        <div className="flex justify-between">
            <Link href="/" className=''>
            {settings.data.site_title}
            </Link>
        
            <nav className=''>
                <ul className='flex gap-6'>
                    {settings.data.navigation.map(({link,label})=>(
                        // <li>nav</li>
                        <li key={label} className=''>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </Bounded>
  )
}

export default Header