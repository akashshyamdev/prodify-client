import React, { ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={'flex flex-row h-full'}>
      <Sidebar />

      <div className={'w-full'}>{children}</div>
    </main>
  );
}
