import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import CSS for blur effect

const LazyLoadExample = () => {
  const images = [
    'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', // Changed URL
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', // Changed URL
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center',  }}>
      <h1>Lazy Load Image Example</h1>
      <div
        className="image-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {images.map((src, index) => (
          <LazyLoadImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            effect="blur"
            width="100%"
            height="auto"
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        ))}
      </div>
    </div>
  );
};

export default LazyLoadExample;
