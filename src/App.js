import React, { useState } from 'react';
import JakesResume from './JakesResume';
import BluesResume from './BluesResume'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showJakesResume, setShowJakesResume] = useState(false);
  const [showBluesResume, setShowBluesResume] = useState(false);
  const [showDualToneResume, setShowDualToneResume] = useState(false);

  const toggleJakesResume = () => {
    setShowJakesResume(!showJakesResume);
    setShowBluesResume(false);
    setShowDualToneResume(false);
  };

  const toggleBluesResume = () => {
    setShowBluesResume(!showBluesResume);
    setShowJakesResume(false);
    setShowDualToneResume(false);
  };

  const openPdfPopup = (pdfFileName) => {
    window.open(`./${pdfFileName}`, '_blank');
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 bg-light">
      {showJakesResume && <JakesResume toggle={toggleJakesResume} />}
      {showBluesResume && <BluesResume toggle={toggleBluesResume} />}
      {/* {showDualToneResume && <DualToneResume toggle={toggleDualToneResume} />} */}

      {!showJakesResume && !showBluesResume && !showDualToneResume && (
        <div className="container text-center py-5">
          <header className="bg-primary text-white p-4 rounded mb-3 shadow">
            <h1 className="display-4">LaTeX Resume Generator</h1>
            <p className="lead">Create your professional resume in seconds!</p>
          </header>
          <section className="d-flex justify-content-center flex-wrap">
            <div className="card m-3 center shadow rounded" style={{ width: '20rem' }}>
              <div className="card-body center">
                <h2 className="center title text-primary">Jake's Resume</h2>
                <button
                  onClick={() => openPdfPopup('jake-sample.pdf')}
                  className="btn btn-secondary btn-block mt-3 rounded"
                >
                  Resume Sample (PDF)
                </button>
                <button
                  onClick={toggleJakesResume}
                  className="btn btn-primary btn-block mt-3 rounded"
                >
                  Use Jake's Resume
                </button>
              </div>
            </div>

             <div className="card m-3 center shadow rounded" style={{ width: '20rem' }}>
              <div className="card-body center">
                <h2 className="center title text-primary">Engineer's Resume</h2>
                <button
                  onClick={() => openPdfPopup('blue-sample.pdf')}
                  className="btn btn-secondary btn-block mt-3 rounded"
                >
                  Resume Sample (PDF)
                </button>
                <button
                  onClick={toggleBluesResume}
                  className="btn btn-primary btn-block mt-3 rounded"
                >
                  Use Software Engineer Resume
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
