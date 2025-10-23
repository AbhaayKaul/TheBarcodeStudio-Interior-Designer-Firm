import React from 'react'

const Logo: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .logo-image {
          width: 80px;
        }

        @media (min-width: 480px) {
          .logo-image {
            width: 100px;
          }
        }

        @media (min-width: 768px) {
          .logo-image {
            width: 120px;
          }
        }

        @media (min-width: 1024px) {
          .logo-image {
            width: 140px;
          }
        }
      `}</style>
      <img src="/images/BAR-10.jpg" alt="The Barcode Studio Logo" className="logo-image" />
    </>
  )
}

export default Logo
