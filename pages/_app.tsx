import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'
import Headroom from 'react-headroom'
import { Analytics } from '@vercel/analytics/react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    {/* <Headroom>
      hello
    </Headroom> */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}</style>
        <title>The BarCode Studio</title>
        <meta
          name="description"
          content="Transforming Spaces, Elevating Lives: Your Vision, Our Design.
          Architecture | Interior Design | Furniture Design "
          key="desc"
        />
        <meta
          name="description"
          content="Architecture | Interior Design | Furniture Design "
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Analytics />
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
