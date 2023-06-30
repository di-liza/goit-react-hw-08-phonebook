import React from 'react';

function Container({ children }) {
  return (
    <div
      style={{
        width: 1200,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
