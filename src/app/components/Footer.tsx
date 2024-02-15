import React from 'react'
import { createClient } from "@/prismicio"
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from '@/app/components/Bounded'

async function Footer() {
    const client = createClient()
    const settings = await client.getSingle('settings')

  return (
    <Bounded as='footer' className='py-4 md:px-6 lg:py-6'>
        <div className="flex justify-between items-center">
            <Link href="/">
            {settings.data.site_title}
            </Link>
        
            <p>&copy;{new Date().getFullYear()} {settings.data.site_title}</p>
            <ul>
                {settings.data.navigation.map(({link,label})=>(
                    // <li>nav</li>
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>

        </div>
    </Bounded>
  )
}

export default Footer