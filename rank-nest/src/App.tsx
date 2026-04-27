import ChatBox from './ChatBox';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="header">
          <h1>Rank Nest</h1>
          <p>Smart College Predictions & Admissions Counseling</p>
        </div>
        <ChatBox />
      </div>
    </ErrorBoundary>
  );
}

export default App;
