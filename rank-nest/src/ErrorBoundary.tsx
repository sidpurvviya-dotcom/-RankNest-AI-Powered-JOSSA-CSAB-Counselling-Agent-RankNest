import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
  errorStack: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
    errorStack: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.toString(), errorStack: error.stack || '' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', backgroundColor: '#1e293b', color: '#f8fafc', height: '100vh', width: '100vw', boxSizing: 'border-box' }}>
          <h1 style={{ color: '#ef4444', marginBottom: '1rem' }}>Application Error Caused White Page</h1>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{this.state.errorMessage}</p>
          <pre style={{ backgroundColor: '#0f172a', padding: '1rem', overflowX: 'auto', borderRadius: '8px', color: '#a78bfa' }}>
            {this.state.errorStack}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '2rem', padding: '0.5rem 1rem', backgroundColor: '#4f46e5', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }}
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
