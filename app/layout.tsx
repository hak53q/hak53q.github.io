import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'hak53q',
    template: '%s | hak53q'
  },
  description: '不知道做什麼用？',
  applicationName: 'hak53q'
}
const navbar = (
  <Navbar
    logo={<b># hak53q</b>}
    projectLink="https://github.com/hak53q/hak53q.github.io"
  />
)

const footer = <Footer style={{ fontSize: 'small' }}> CC BY 4.0 {new Date().getFullYear()} © hak53q.</Footer>

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="zh-Hant" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ericx20/zz-method-docs/tree/main/docs-new"
          feedback={{ content: 'Question? Give feedback' }}
          editLink={null}
          footer={footer}
          toc={{ title: 'On This Page', backToTop: 'Scroll to top' }}
        >
          <div style={{ paddingInline: '3%' }}>
            {children}
          </div>
        </Layout>
      </body>
    </html>
  )
}
