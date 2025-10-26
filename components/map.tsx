import { useState, useEffect } from 'react';
import loader from '../utils/googleMapsLoader'

const Map = ({ address }) => {
    const [map, setMap] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // Function to open Google Maps in new tab
    const openInGoogleMaps = () => {
      const mapsUrl = 'https://maps.app.goo.gl/zUBYkNSsNjSQk4fq6';
      window.open(mapsUrl, '_blank', 'noopener,noreferrer');
    };
    
    useEffect(() => {
      loader.load().then(() => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            const mapOptions = {
              center: results[0].geometry.location,
              zoom: 16,
            };
            const newMap = new window.google.maps.Map(
              document.getElementById('map'),
              mapOptions
            );
            const marker = new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: newMap,
            });
            setMap(newMap);
          }
        });
      });
    }, [address]);
    
    return (
      <div 
        style={{ 
          position: 'relative',
          height: '400px', 
          width: '100%', 
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <div 
          id="map" 
          style={{ 
            height: '100%', 
            width: '100%',
            cursor: 'pointer'
          }}
          onClick={openInGoogleMaps}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        
        {/* Hover Overlay with Hint */}
        {isHovered && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(201, 169, 97, 0.95)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.2s ease-in'
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Click to open in Google Maps
          </div>
        )}
        
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          }
        `}</style>
      </div>
    );
  };
  export default Map;