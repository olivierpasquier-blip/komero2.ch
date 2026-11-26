export const GTM_CONTAINER_ID = 'GTM-NH87K4J4';

export type DataLayerPageViewEvent = {
  event: 'page_view';
  page_path: string;
  page_title: string;
  page_location: string;
};

export type DataLayerEntry = DataLayerPageViewEvent | Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

let lastTrackedPathKey: string | null = null;

/**
 * Resets internal deduplication state (useful for unit tests).
 */
export function resetAnalyticsTrackerForTests(): void {
  lastTrackedPathKey = null;
}

/**
 * Pushes a SPA `page_view` event into `window.dataLayer` without ever re-injecting GTM scripts.
 */
export function trackPageView(
  params: {
    pagePath: string;
    pageTitle: string;
    pageLocation: string;
  },
  targetDataLayer?: DataLayerEntry[]
): DataLayerPageViewEvent | null {
  const dedupeKey = `${params.pagePath}|${params.pageTitle}`;
  if (lastTrackedPathKey === dedupeKey) {
    return null;
  }
  lastTrackedPathKey = dedupeKey;

  const eventPayload: DataLayerPageViewEvent = {
    event: 'page_view',
    page_path: params.pagePath,
    page_title: params.pageTitle,
    page_location: params.pageLocation,
  };

  if (targetDataLayer) {
    targetDataLayer.push(eventPayload);
    return eventPayload;
  }

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);
  }

  return eventPayload;
}
