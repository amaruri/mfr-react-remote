import { lazy, StrictMode, Suspense } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'

const LazyComponent = lazy(() => import('./App.tsx'))

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Suspense>
      <LazyComponent />
    </Suspense>
  </StrictMode>,
)
