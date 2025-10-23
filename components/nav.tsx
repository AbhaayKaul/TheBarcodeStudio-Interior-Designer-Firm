import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './logo'

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleMenu = () => {
    console.log('Toggling menu, isOpen:', !isOpen)
    setIsOpen(!isOpen)
  }
  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <style>{`
        .navbar {
          position: relative;
          z-index: 9999;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1em 1.5em;
          background-color: rgba(255, 255, 255, 1);
          color: black;
          text-transform: uppercase;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          margin-left: 0.25rem;
        }

        .navbar-title {
          font-size: 0.875rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-left: 0.5rem;
          color: #261F1A;
          display: inline;
          line-height: 1.2;
        }

        .burger-icon {
          display: block;
          margin-top: 1rem;
          cursor: pointer;
          z-index: 10001;
          position: relative;
        }

            .burger-icon svg {
              fill: #C9A961;
              width: 24px;
              height: 24px;
            }

        .desktop-nav {
          display: none;
          flex-direction: row;
          align-items: center;
          font-weight: bold;
        }

        .nav-link {
          display: block;
          font-weight: 500;
          font-size: 1.125rem;
          margin-bottom: 0;
          margin-right: 0;
          color: inherit;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        .nav-link:hover {
          color: #A9957B;
          transform: scale(1.05);
        }

            .backdrop {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(5px);
              -webkit-backdrop-filter: blur(5px);
              z-index: 9998;
              display: ${isOpen ? 'block' : 'none'};
            }

            .mobile-menu {
              position: fixed !important;
              top: 0 !important;
              bottom: 0 !important;
              right: ${isOpen ? '0 !important' : '-320px !important'};
              width: 320px !important;
              background-color: #FFFFFF !important;
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2) !important;
              z-index: 10000 !important;
              padding: 16px 32px 16px 32px !important;
          transition: right 0.5s ease-in-out !important;
          display: flex !important;
          flex-direction: column !important;
          text-align: left !important;
          color: #261F1A !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
        }
        
        .mobile-menu .nav-link {
          color: #261F1A !important;
          font-weight: 600 !important;
          text-decoration: none !important;
        }

        /* Tablet and larger */
        @media (min-width: 480px) {
          .navbar-title {
            display: inline;
            font-size: 1rem;
          }
        }

        @media (min-width: 768px) {
          .navbar {
            padding: 1em 3%;
          }

          .navbar-title {
            font-size: 1.125rem;
          }

          .burger-icon {
            display: none;
          }

          .desktop-nav {
            display: flex;
          }

          .desktop-nav .nav-link {
            font-size: 0.875rem;
            margin-bottom: 0;
            margin-right: 24px;
          }

          .mobile-menu {
            display: none !important;
          }

          .backdrop {
            display: none !important;
          }
        }

        @media (min-width: 1024px) {
          .navbar-title {
            font-size: 1.25rem;
          }

          .desktop-nav .nav-link {
            font-size: 1.125rem;
            margin-right: 36px;
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo and Title */}
        <div className="navbar-brand">
          <Logo />
          <h1 className="navbar-title">
          The BARCODE STUDIO
          </h1>
        </div>

        {/* Burger Icon (Mobile Only) */}
        <div className="burger-icon" onClick={toggleMenu}>
          {!isOpen ? (
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
              <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>
                Home
              </a>
              <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
              <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                Services
              </a>
              <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>
                Gallery
              </a>
              <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact Us
              </a>
              <a 
                href="/consultation" 
                className="consult-button"
                style={{
                  backgroundColor: '#C9A961',
                  color: '#FFFFFF',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8956A'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A961'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Consult us now
              </a>
            </div>
      </nav>

      {/* Mobile Menu & Backdrop - Rendered via Portal to body */}
      {mounted && ReactDOM.createPortal(
        <>
              {/* Backdrop */}
              {isOpen && (
                <div 
                  className="backdrop" 
                  onClick={closeMenu}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    zIndex: 9998
                  }}
                />
              )}

          {/* Mobile Menu */}
              <div 
                className="mobile-menu" 
                data-menu-open={isOpen}
                style={{ 
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  right: isOpen ? '0' : '-320px',
                  width: '320px',
                  backgroundColor: '#FFFFFF',
                  zIndex: 10000,
                  padding: '16px 32px 16px 32px',
              display: window.innerWidth < 768 ? 'flex' : 'none',
              flexDirection: 'column',
              transition: 'right 0.5s ease-in-out',
              overflowY: 'auto',
              overflowX: 'hidden',
              boxShadow: '-2px 0 20px rgba(0, 0, 0, 0.15)',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Header with Logo and Close Button */}
            <div style={{ 
              paddingTop: '8px',
              paddingBottom: '20px',
              borderBottom: '1px solid #E5E5E5',
              marginBottom: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 0.5s ease',
              transitionDelay: isOpen ? '0.1s' : '0s'
            }}>
              {/* Logo and Tagline */}
              <div style={{ flex: 1, paddingRight: '10px' }}>
                <img 
                  src="/images/BAR-10.jpg" 
                  alt="The Barcode Studio" 
                  style={{ 
                    width: '85px',
                    marginBottom: '10px',
                    display: 'block'
                  }}
                />
                <h2 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#261F1A',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  lineHeight: '1.3'
                }}>
                  The Barcode Studio
                </h2>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#A9957B',
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: '1.3'
                }}>
                  Creating Interiors That Reflect You
                </p>
              </div>

              {/* Close Button */}
              <div 
                onClick={closeMenu}
                style={{
                  cursor: 'pointer',
                  padding: '8px',
                  flexShrink: 0
                }}
              >
                <svg
                  fill="#C9A961"
                  width="28px"
                  height="28px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
                  <title>Close</title>
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
              </div>
            </div>

            {/* Menu Items with staggered animation */}
            <div>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')} 
                style={{ 
                  color: '#261F1A',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.85rem',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderLeft: '4px solid transparent',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), border-left-color 0.3s ease, padding-left 0.3s ease, color 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.2s, 0.2s, 0s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeftColor = '#C9A961'
                  e.currentTarget.style.paddingLeft = '24px'
                  e.currentTarget.style.color = '#C9A961'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.color = '#261F1A'
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')} 
                style={{ 
                  color: '#261F1A',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.85rem',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderLeft: '4px solid transparent',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), border-left-color 0.3s ease, padding-left 0.3s ease, color 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.3s, 0.3s, 0s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeftColor = '#C9A961'
                  e.currentTarget.style.paddingLeft = '24px'
                  e.currentTarget.style.color = '#C9A961'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.color = '#261F1A'
                }}
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')} 
                style={{ 
                  color: '#261F1A',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.85rem',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderLeft: '4px solid transparent',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), border-left-color 0.3s ease, padding-left 0.3s ease, color 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.4s, 0.4s, 0s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeftColor = '#C9A961'
                  e.currentTarget.style.paddingLeft = '24px'
                  e.currentTarget.style.color = '#C9A961'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.color = '#261F1A'
                }}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleNavClick(e, '#gallery')} 
                style={{ 
                  color: '#261F1A',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.85rem',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderLeft: '4px solid transparent',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), border-left-color 0.3s ease, padding-left 0.3s ease, color 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.5s, 0.5s, 0s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeftColor = '#C9A961'
                  e.currentTarget.style.paddingLeft = '24px'
                  e.currentTarget.style.color = '#C9A961'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.color = '#261F1A'
                }}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')} 
                style={{ 
                  color: '#261F1A',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.85rem',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderLeft: '4px solid transparent',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), border-left-color 0.3s ease, padding-left 0.3s ease, color 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.6s, 0.6s, 0s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeftColor = '#C9A961'
                  e.currentTarget.style.paddingLeft = '24px'
                  e.currentTarget.style.color = '#C9A961'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.style.color = '#261F1A'
                }}
              >
                Contact Us
              </a>
              
              {/* Consult us now Button */}
              <a 
                href="/consultation"
                style={{ 
                  color: '#FFFFFF',
                  backgroundColor: '#C9A961',
                  textDecoration: 'none',
                  display: 'block',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '14px 20px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(201, 169, 97, 0.3)',
                  transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, box-shadow 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                  transitionDelay: isOpen ? '0.7s, 0.7s, 0s, 0s' : '0s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8956A'
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 169, 97, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A961'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 169, 97, 0.3)'
                }}
              >
                Consult us now
              </a>
            </div>

            {/* Footer Section */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid #E5E5E5',
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 0.6s ease',
              transitionDelay: isOpen ? '0.7s' : '0s'
            }}>
              <p style={{
                fontSize: '0.8rem',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                Transform your space into something extraordinary
              </p>
              <a 
                href="tel:+1234567890"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  color: '#FBA442',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  style={{ marginRight: '10px' }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Get a Free Consultation
              </a>
              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '15px'
              }}>
                <a 
                  href="#" 
                  style={{ 
                    color: '#261F1A',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FBA442'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#261F1A'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#261F1A',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FBA442'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#261F1A'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#261F1A',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FBA442'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#261F1A'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}

export default Nav
