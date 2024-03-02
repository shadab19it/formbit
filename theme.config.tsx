import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img src='/images/formbit-logo.png' alt='formbit' />
    </span>
  ),
  project: {
    link: 'https://github.com/torqbit/formbit',
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`;

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content='Make beautiful websites with Next.js & MDX.'
        />
        <meta
          name='og:description'
          content='Make beautiful websites with Next.js & MDX.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site:domain' content='nextra.site' />
        <meta name='twitter:url' content='https://nextra.site' />
        <meta
          name='og:title'
          content={title ? title + ' – formbit' : 'formbit'}
        />
        <meta name='og:image' content={socialCard} />
        <meta name='apple-mobile-web-app-title' content='formbit' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link
          rel='icon'
          href='/favicon-dark.svg'
          type='image/svg+xml'
          media='(prefers-color-scheme: dark)'
        />
        <link
          rel='icon'
          href='/favicon-dark.png'
          type='image/png'
          media='(prefers-color-scheme: dark)'
        />
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className='cursor-default'>{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  docsRepositoryBase: 'https://github.com/torqbit/formbit',
  footer: {
    text: (
      <span>
        <img src='/images/formbit-logo.png' alt='formbit' />
      </span>
    ),
  },
};

export default config;