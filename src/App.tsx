import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { WritingPage } from './pages/WritingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="writing" element={<WritingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
