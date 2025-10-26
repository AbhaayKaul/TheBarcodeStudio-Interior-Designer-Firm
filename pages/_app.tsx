import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'
import Headroom from 'react-headroom'
import { Analytics } from '@vercel/analytics/react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    
    if (!hasVisited) {
      // First time visitor - show loader
      setShowLoader(true)
      localStorage.setItem('hasVisitedBefore', 'true')
      
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
      
      return () => clearTimeout(timer)
    } else {
      // Returning visitor - skip loader
      setShowLoader(false)
      setLoading(false)
    }
  }, [])

  return (
    <>
      {/* Loading Screen - Option 1 + Smart Loading (Best of Both!) */}
      {loading && showLoader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#F7F5F3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            animation: loading ? 'fadeIn 0.3s ease-in' : 'fadeOut 0.5s ease-out'
          }}
        >
          {/* Logo */}
          <img 
            src="/images/BAR-10.jpg" 
            alt="The Barcode Studio" 
            style={{ 
              width: '120px', 
              height: 'auto',
              marginBottom: '30px',
              animation: 'pulse 2s ease-in-out infinite'
            }} 
          />
          
          {/* Company Name */}
          <h1 style={{
            fontSize: '24px',
            color: '#261F1A',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            The Barcode Studio
          </h1>

          {/* Spinner */}
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '4px solid #E8D5C4',
              borderTop: '4px solid #C9A961',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />

          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.05); opacity: 0.8; }
            }
            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; pointer-events: none; }
            }
          `}</style>
        </div>
      )}

      {/* Main Content */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in' }}>
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
      </div>
    </>
  )
}

export default MyApp