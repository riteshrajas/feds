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
        <a className="linktree-link">
          <div className="linktree-link-content">
          <iframe src="https://drive.google.com/file/d/1qJZPIv3xNWZR52-j2sTAv-UFIQAihI9y/preview" allowTransparency title='2924 Impact Video' allowFullScreen width="auto" height="auto" allow="autoplay"></iframe>
            <h3>Impact Video</h3>
            <p>Year 2023-24 Impact Video</p>
          </div>
        </a>
        <a href="https://feds-handbook.vercel.app/" className="linktree-link">
          <div className="linktree-link-content">
            <img src="https://i.imgur.com/JcSYyz7.jpg" alt="Link 3" />
            <h3>Technical Documentation</h3>
            <p>Documents for all incoming FEDS</p>
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