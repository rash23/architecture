import { createRootRouteWithContext } from '@tanstack/react-router';
import { RootComponent } from 'shared/components/common';
import { AuthContext } from 'shared/hooks/useAuth';

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <RootComponent />,
});
