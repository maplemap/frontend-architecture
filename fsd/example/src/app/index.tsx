import { withProviders } from './providers';
import { AppRouter } from './router';

function AppComponent() {
  return <AppRouter />;
}

export const App = withProviders(AppComponent);
