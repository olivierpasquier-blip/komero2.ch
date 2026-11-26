import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { normalizeRoutePath, type RoutePath } from '../lib/seo';

interface RouterContextValue {
  path: RoutePath;
  search: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  search: '',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [locationState, setLocationState] = useState<{ path: RoutePath; search: string }>(() => ({
    path: normalizeRoutePath(window.location.pathname),
    search: window.location.search,
  }));

  useEffect(() => {
    const handlePopState = () => {
      setLocationState({
        path: normalizeRoutePath(window.location.pathname),
        search: window.location.search,
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const nextPath = normalizeRoutePath(url.pathname);
    const nextSearch = url.search;
    const hash = url.hash;

    window.history.pushState({}, '', `${nextPath}${nextSearch}${hash}`);
    setLocationState({ path: nextPath, search: nextSearch });

    if (hash) {
      const targetId = hash.slice(1);
      window.setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ path: locationState.path, search: locationState.search, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
