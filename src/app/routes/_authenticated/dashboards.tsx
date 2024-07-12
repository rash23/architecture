import { createFileRoute } from '@tanstack/react-router';
import { DashboardsPage } from 'pages';

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated/dashboards': {
      id: '/_authenticated/dashboards';
      path: '/_authenticated/dashboards';
      fullPath: '/_authenticated/dashboards';
    };
  }
}

export const Route = createFileRoute('/_authenticated/dashboards')({
  component: DashboardsPage,
});
