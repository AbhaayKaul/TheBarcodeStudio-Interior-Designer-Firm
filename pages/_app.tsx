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
      {/* Loading Screen - Smart Loader with Architectural Background */}
      {loading && showLoader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#F7F5F3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            overflow: 'hidden',
            margin: 0,
            padding: 0
          }}
        >
          {/* Architectural Grid Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(90deg, rgba(201, 169, 97, 0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(201, 169, 97, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.6,
            zIndex: 1
          }} />

          {/* Diagonal Blueprint Lines */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(201, 169, 97, 0.05) 100px, rgba(201, 169, 97, 0.05) 102px), repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(201, 169, 97, 0.05) 100px, rgba(201, 169, 97, 0.05) 102px)',
            zIndex: 1
          }} />

          {/* Corner Decorative Elements */}
          <svg style={{ position: 'absolute', top: '20px', left: '20px', width: '80px', height: '80px', opacity: 0.3, zIndex: 1 }} viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,5 L5,5 L5,100 L0,100 Z" fill="#C9A961"/>
            <path d="M15,15 L85,15 L85,20 L20,20 L20,85 L15,85 Z" fill="#C9A961"/>
          </svg>

          <svg style={{ position: 'absolute', top: '20px', right: '20px', width: '80px', height: '80px', opacity: 0.3, zIndex: 1, transform: 'scaleX(-1)' }} viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,5 L5,5 L5,100 L0,100 Z" fill="#C9A961"/>
            <path d="M15,15 L85,15 L85,20 L20,20 L20,85 L15,85 Z" fill="#C9A961"/>
          </svg>

          <svg style={{ position: 'absolute', bottom: '20px', left: '20px', width: '80px', height: '80px', opacity: 0.3, zIndex: 1, transform: 'scaleY(-1)' }} viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,5 L5,5 L5,100 L0,100 Z" fill="#C9A961"/>
            <path d="M15,15 L85,15 L85,20 L20,20 L20,85 L15,85 Z" fill="#C9A961"/>
          </svg>

          <svg style={{ position: 'absolute', bottom: '20px', right: '20px', width: '80px', height: '80px', opacity: 0.3, zIndex: 1, transform: 'scale(-1)' }} viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,5 L5,5 L5,100 L0,100 Z" fill="#C9A961"/>
            <path d="M15,15 L85,15 L85,20 L20,20 L20,85 L15,85 Z" fill="#C9A961"/>
          </svg>

          {/* Building Silhouettes */}
          <svg style={{ position: 'absolute', bottom: 0, left: '5%', width: '150px', height: '200px', opacity: 0.15, zIndex: 1 }} viewBox="0 0 150 200">
            <rect x="10" y="50" width="40" height="150" fill="#C9A961"/>
            <rect x="60" y="80" width="35" height="120" fill="#C9A961"/>
            <rect x="100" y="60" width="30" height="140" fill="#C9A961"/>
            <rect x="15" y="60" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
            <rect x="27" y="60" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
            <rect x="39" y="60" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
            <rect x="15" y="80" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
            <rect x="27" y="80" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
            <rect x="39" y="80" width="8" height="10" fill="#F7F5F3" opacity="0.5"/>
          </svg>

          <svg style={{ position: 'absolute', bottom: 0, right: '5%', width: '180px', height: '220px', opacity: 0.15, zIndex: 1 }} viewBox="0 0 180 220">
            <rect x="10" y="70" width="45" height="150" fill="#C9A961"/>
            <rect x="65" y="40" width="50" height="180" fill="#C9A961"/>
            <rect x="125" y="90" width="35" height="130" fill="#C9A961"/>
            <rect x="70" y="50" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
            <rect x="85" y="50" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
            <rect x="100" y="50" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
            <rect x="70" y="75" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
            <rect x="85" y="75" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
            <rect x="100" y="75" width="10" height="12" fill="#F7F5F3" opacity="0.5"/>
          </svg>

          {/* Content Wrapper - Ensures immediate centering */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center'
          }}>
            {/* Logo */}
            <img 
              src="/images/BAR-10.jpg" 
              alt="The Barcode Studio" 
              style={{ 
                width: '120px', 
                height: 'auto',
                marginBottom: '30px',
                animation: 'pulse 2s ease-in-out infinite',
                display: 'block'
              }} 
            />
            
            {/* Company Name */}
            <h1 style={{
              fontSize: '24px',
              color: '#261F1A',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              margin: '0 0 10px 0'
            }}>
              The Barcode Studio
            </h1>
            
            {/* Welcome Text */}
            <p style={{
              fontSize: '14px',
              color: '#666',
              fontStyle: 'italic',
              margin: '0 0 25px 0'
            }}>
              Welcome to sophistication
            </p>

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
          </div>

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
            overflow-x: hidden;
            width: 100%;
          }
          
          body {
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          
          * {
            box-sizing: border-box;
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