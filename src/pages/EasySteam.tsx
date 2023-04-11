import React, { useEffect } from 'react';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Main from './index';

export type EasySteamAppProps = AppProps & {
    emotionCache: EmotionCache;
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentState;
    };
};

export const EasySteam = ({ Component, pageProps }: EasySteamAppProps) => {
    return (
        <Main>
            {Component.PageLayout ? (
                <Component.PageLayout>
                    <Component {...pageProps} />
                </Component.PageLayout>
            ) : (
                <Component {...pageProps} />
            )}
        </Main>
    );
};

const Default = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);

    return null;
};

export default Default;
