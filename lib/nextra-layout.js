import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import SidebarNav from '@/components/sidebar-nav'

export default async function NextraLayout({ children }) {
  return (
    <Layout
        pageMap={await getPageMap()}
        navbar={
          <Navbar
            logo={<span className="font-semibold text-xl">hello.dev</span>}
          />
        }
        docsRepositoryBase="https://github.com/hellocoop/hello.dev/tree/main/"
        darkMode={false}
        sidebar={{
          defaultMenuCollapseLevel: 1,
          autoCollapse: true,
          toggleButton: false,
        }}
        toc={{
          backToTop: "Scroll to top",
        }}
        editLink="Edit this page on GitHub"
        feedback={{
          content: "Question? Give us feedback",
        }}
      >
        <SidebarNav />
        {children}
      </Layout>
  )
}
