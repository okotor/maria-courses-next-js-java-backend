'use client';

import dynamic from 'next/dynamic';

const DynamicGA = dynamic(() => import('./GoogleAnalytics'), { ssr: false });

export default function GoogleAnalyticsWrapper({ gaId }) {
  return <DynamicGA gaId={gaId} />;
}
