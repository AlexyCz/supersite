'use client'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-center">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <Image
            src="/full_name.png"
            width={350}
            height={350}
            alt="This is me, myself, and I. [Author's name]"
          />
        </Link>
      </div>
      <div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.25}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
