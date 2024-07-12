import { createRoot } from 'react-dom/client';
import App from './app/App';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  throw new Error("Element with ID 'root' not found.");
}

createRoot(rootElement).render(<App />);
