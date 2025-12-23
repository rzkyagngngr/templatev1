import { ViteSSG } from 'vite-ssg';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { routes } from './routes';
import './index.css';
import LicenseGatekeeper from './security/LicenseGatekeeper';

/**
 * ViteSSG Entry Point
 * This replaces main.jsx for SSG builds
 */
export const createApp = ViteSSG(
  // Root component
  () => {
    return (
      <LicenseGatekeeper productId="APP01">
        <Layout activePage="home" onNavigate={() => {}}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </LicenseGatekeeper>
    );
  },
  {
    routes: routes.map(r => ({ path: r.path })),
  }
);
