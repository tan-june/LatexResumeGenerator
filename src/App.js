import React, { useState } from 'react';
import JakesResume from './JakesResume';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showJakesResume, setShowJakesResume] = useState(false);

  const toggleJakesResume = () => {
    setShowJakesResume(!showJakesResume);
  };

  const openPdfPopup = () => {
    window.open('./jake-sample.pdf', '_blank');
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 bg-light">
      {showJakesResume ? (
        <JakesResume toggle={toggleJakesResume} />
      ) : (
        <div className="container text-center py-5">
          <header className="bg-primary text-white p-4 rounded mb-3 shadow">
            <h1 className="display-4">LaTeX Resume Generator</h1>
            <p className="lead">Create your professional resume in seconds!</p>
          </header>
          <section className="d-flex justify-content-center flex-wrap">
            <div className="card m-3 center shadow rounded" style={{ width: '18rem' }}>
              <div className="card-body center">
                <h2 className="center title text-primary">Jake's Resume</h2>
                {/* <p className="card-text text-muted"></p> */}
                <button
                  onClick={openPdfPopup}
                  className="btn btn-secondary btn-block mt-3 rounded"
                >
                  Show Jake's Resume (PDF)
                </button>
                <button
                  onClick={toggleJakesResume}
                  className="btn btn-primary btn-block mt-3 rounded"
                >
                  Use Jake's Resume
                </button>
              </div>
            </div>
          </section>
          <footer className="mt-auto text-muted py-3">
            <p>&copy; 2024 Tanmay Singhal. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
