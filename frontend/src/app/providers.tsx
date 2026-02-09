'use client';
import ChatWidget from './components/ChatWidget';

// Initialize Better Auth client provider
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
