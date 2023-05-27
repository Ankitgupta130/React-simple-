import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

 const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle dark mode
      </button>

      {isDark && (
        <>
          {/* Change the background color here */}
          <style jsx global>{`
            :root {
              --bg-color: #333; /* Black */
            }

            html {
              background-color: var(--bg-color);
            }
          `}</style>
        </>
      )}
    </div>
  );
};

 export default DarkModeToggle;
