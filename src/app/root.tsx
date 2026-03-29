import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import type { Route } from '@rr-types/src/app/+types/root'
import { SideMenu } from '@components/SideMenu'
import { Search } from '@components/Search'
import { MusicPlayer } from '@components/MusicPlayer'
import './index.scss'
import { useState } from 'react'
import { BurgerMenu } from '@/components/BurgerMenu'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleBurgerClick = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/vite.svg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>musica</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root">
          <div className="page">
            <SideMenu onItemClick={handleBurgerClick} />
            <Search />
            {children}
            <BurgerMenu isOpen={isOpen} onItemClick={handleBurgerClick} />
          </div>
          <MusicPlayer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}

export default function Rooot() {
  return <Outlet />
}
