import { Outlet, useLocation } from 'react-router-dom'
import { CrtLoader } from '../components/CrtLoader'
import TargetCursor from '../components/Target_curser'
import { SiteFooter } from '../components/SiteFooter'
import { TopNav } from '../components/TopNav'

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-dvh bg-background text-on-background">
      <TargetCursor />
      <CrtLoader />
      <TopNav />
      <main className="pt-20">
        <div key={pathname}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
