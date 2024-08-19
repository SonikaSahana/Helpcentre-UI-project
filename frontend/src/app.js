
import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

 
  useEffect(() => {
    const fetchData = [
      { id: 1, title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
      { id: 2, title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
      { id: 3, title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
      { id: 4, title: 'Manage billing', description: 'Change subscriptions and payment details.' },
      { id: 5, title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
      { id: 6, title: 'Abstract support', description: 'Get in touch with a human.' },
    ];
    setData(fetchData);
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Abstract | Help Center</div>
        <button className="submit-request">Submit a request</button>
      </header>
      <div className="search-section">
        <h1>How can we help?</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="card-container">
        {filteredData.map(item => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>Abstract</h3>
          <p>Branches</p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div className="footer-section">
          <h3>Community</h3>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Contact Us</p>
          <p>info@abstract.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
