"use client"

import '../styles/globals.scss'
import NextLink from 'next/link'
import { CacheProvider, Link } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CacheProvider>
        <ChakraProvider>
          <nav className="nav">
            <ul>
              <a href="#contact-me">contact me</a>
              <Link as={NextLink} _hover={{ color: 'blue.500' }} href="#demos" >Demos</Link>
              <Link as={NextLink} _hover={{ color: 'blue.500' }} href="#about-me">About Me</Link>
              <Link as={NextLink} _hover={{ color: 'blue.500' }} href="#contact-me">Contact Me</Link>
            </ul>
          </nav>
          {children}
        </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
