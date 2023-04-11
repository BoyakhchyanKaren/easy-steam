import React, { PropsWithChildren } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import ThemeCustomization from 'themes';

import { createEmotionCache } from '@utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

type EasySteamAppProps = AppProps & {
  emotionCache: EmotionCache;
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentState;
  };
};

const SafeHydrate = ({ children }: PropsWithChildren) => (
  <span suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</span>
);

const DynamicEasySteam = dynamic(() => import('./EasySteam').then((module) => module.EasySteam), {
  ssr: false
});

const App = ({ emotionCache = clientSideEmotionCache, ...props }: EasySteamAppProps) => (
  <SafeHydrate>
    <CacheProvider value={emotionCache}>
      <ThemeCustomization>
        <DynamicEasySteam emotionCache={emotionCache} {...props} />
      </ThemeCustomization>
    </CacheProvider>
  </SafeHydrate>
);

export default App;
