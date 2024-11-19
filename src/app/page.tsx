import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <Image
          className="dark:invert"
          src="/work-in-progress.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="max-w-[650px]">
          <h1 className="text-2xl font-bold mb-4">Hi 👋, I’m Feriansyah!</h1>
          <p>
            This website is still under development, but feel free to explore
            what I have so far. <br />
            In the meantime, you can check out my CV{' '}
            <a
              href="/Feriansyah-cv.pdf"
              className="text-blue-500 hover:text-blue-700 underline"
              target="_blank"
            >
              here
            </a>{' '}
            or connect with me on:
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="rounded-full p-1 text-gray-100">
            <a
              href="https://github.com/dev-feriansyah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/github.svg"
                alt="GitHub logo"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="rounded-full p-1">
            <a
              href="https://gitlab.com/dev-feriansyah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo/gitlab.svg"
                alt="Gitlab logo"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="rounded-full p-1">
            <a
              href="https://www.linkedin.com/in/feriansyah-a07080210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/logo/linkedin.svg"
                alt="LinkedIn logo"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
