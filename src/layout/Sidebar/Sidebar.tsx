import { BellIcon, BookmarkIcon, ChartBarIcon, ClockIcon, CogIcon, HomeIcon, ViewListIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

export interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={`sidebar ${className}`} data-testid={'sidebar'}>
      <ul className={'sidebar__items sidebar__items-Main'}>
        <Link to={'/'} className={'sidebar__item'}>
          <HomeIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Dashboard</p>
        </Link>

        <Link to={'/todos'} className={'sidebar__item'}>
          <ViewListIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Todos</p>
        </Link>

        <Link to={'/notes'} className={'sidebar__item'}>
          <BookmarkIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Notes</p>
        </Link>

        <Link to={'/timer'} className={'sidebar__item'}>
          <ClockIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Timer</p>
        </Link>

        <Link to={'/tracker'} className={'sidebar__item'}>
          <ChartBarIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Tracker</p>
        </Link>
      </ul>

      {/* Sub Items */}
      <ul className={'sidebar__items sidebar__items--sub'}>
        <Link to={'/notifications'} className={'sidebar__item'}>
          <BellIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Notifications</p>
        </Link>

        <Link to={'/settings'} className={'sidebar__item'}>
          <CogIcon className={'h-8 sidebar__icon'} />

          <p className={'sidebar__link'}>Settings</p>
        </Link>
      </ul>
    </aside>
  );
}
