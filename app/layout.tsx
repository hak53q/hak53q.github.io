import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import './global.css'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Docs Template',
    template: '%s | Docs Template'
  },
  description: 'A minimal documentation site template.',
  applicationName: 'Docs Template'
}

const navbar = (
  <Navbar
    logo={<span>Docs Template</span>}
    projectLink="https://github.com/ericx20/zz-method-docs"
  />
)

const footer = <Footer>Built with Nextra</Footer>

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning style={{ paddingInline: '12%' }}>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ericx20/zz-method-docs/tree/main/docs-new"
          feedback={{ content: 'Question? Give feedback →' }}
          editLink="Edit this page"
          footer={footer}
          toc={{ title: 'On This Page', backToTop: 'Scroll to top' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
