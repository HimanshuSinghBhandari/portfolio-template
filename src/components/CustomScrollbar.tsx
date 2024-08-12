import React from 'react';

const CustomScrollbar: React.FC = () => {
  return (
    <style jsx global>{`
      /* Width */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #333; /* Dark grey */
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #666; /* Grey */
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #888; /* Light grey */
      }

      /* For Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #666 #333;
      }
    `}</style>
  );
};

export default CustomScrollbar;