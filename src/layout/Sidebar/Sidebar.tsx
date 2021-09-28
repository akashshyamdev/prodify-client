import { BellIcon, BookmarkIcon, ChartBarIcon, ClockIcon, CogIcon, HomeIcon, ViewListIcon } from '@heroicons/react/solid';
import React from 'react';
import './sidebar.scss';

export interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={`sidebar ${className}`}>
      <ul className={'sidebar__items sidebar__items-Main'}>
        <li className={'sidebar__item'}>
          <HomeIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Dashboard</p>
        </li>

        <li className={'sidebar__item'}>
          <ViewListIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Todos</p>
        </li>

        <li className={'sidebar__item'}>
          <BookmarkIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Notes</p>
        </li>

        <li className={'sidebar__item'}>
          <ClockIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Timer</p>
        </li>

        <li className={'sidebar__item'}>
          <ChartBarIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Tracker</p>
        </li>
      </ul>

      {/* Sub Items */}
      <ul className={'sidebar__items sidebar__items--sub'}>
        <li className={'sidebar__item'}>
          <BellIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Notifications</p>
        </li>

        <li className={'sidebar__item'}>
          <CogIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Settings</p>
        </li>
      </ul>
    </aside>
  );
}
