import React from 'react'
import { createClient } from "@/prismicio"
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

async function Footer() {
    const client = createClient()
    const settings = await client.getSingle('settings')

  return (
    <footer>
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
    </footer>
  )
}

export default Footer