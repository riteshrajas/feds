import React from 'react';
import './styles.css';

export default function Home() {
  return (
    <div className="linktree-card">
      <div className="linktree-header">
        <img src="https://avatars.githubusercontent.com/u/6892840?s=200&v=4" alt="Your Logo" />
        <h2>FEDS201</h2>
      </div>
      <div className="linktree-links">
        <a href="https://feds201.com" className="linktree-link">
          <div className="linktree-link-content">
            <img src='https://i.imgur.com/d0RG1Co.png' alt="Link 1" />
            <h3>FEDS Website</h3>
            <p>Home to all FEDS</p>
          </div>
        </a>
        <a href="" className="linktree-link">
          <div className="linktree-link-content">
            <img src="https://via.placeholder.com/150" alt="Link 2" />
            <h3>Impact Video</h3>
            <p>Year 2023-24 Impact Video</p>
          </div>
        </a>
        <a href="https://example.com" className="linktree-link">
          <div className="linktree-link-content">
            <img src="https://via.placeholder.com/150" alt="Link 3" />
            <h3>Venmo Donations</h3>
            <p>Help Us Continue our Mission</p>
          </div>
        </a>
      </div>
    </div>
  );
}