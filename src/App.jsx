import { useState } from 'react';
import PlanViewer from './components/PlanViewer';
import IssueSidebar from './components/IssueSidebar';
import { MOCK_PLANS } from './mockData';
import './index.css';

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState(MOCK_PLANS[0].id);
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const currentPlan = MOCK_PLANS.find(p => p.id === selectedPlanId);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setSelectedIssueId(null);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2500);
  };

  const handlePlanChange = (e) => {
    setSelectedPlanId(e.target.value);
    setAnalysisComplete(false);
    setIsAnalyzing(false);
    setSelectedIssueId(null);
  };

  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', padding: '20px', gap: '20px' }}>
      
      <div className="main-content glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <header style={{ padding: '20px 30px', borderBottom: '1px solid var(--panel-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Julius Berger AI Accessibility Checker</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>DIN 18040 & ASR Compliance Analysis</p>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <select 
              value={selectedPlanId} 
              onChange={handlePlanChange}
              disabled={isAnalyzing}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.3)',
                color: 'white',
                border: '1px solid var(--panel-border)',
                outline: 'none',
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            >
              {MOCK_PLANS.map(plan => (
                <option key={plan.id} value={plan.id}>{plan.planName}</option>
              ))}
            </select>

            <button 
              onClick={startAnalysis}
              disabled={isAnalyzing}
              style={{
                background: isAnalyzing ? 'var(--panel-border)' : 'var(--accent-color)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s'
              }}
            >
              {isAnalyzing ? 'Analyzing...' : 'Run AI Analysis'}
            </button>
          </div>
        </header>

        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
           <PlanViewer 
              plan={currentPlan}
              isAnalyzing={isAnalyzing} 
              analysisComplete={analysisComplete}
              selectedIssueId={selectedIssueId}
              onSelectIssue={setSelectedIssueId}
           />
        </div>
      </div>

      <div className="sidebar-container" style={{ width: '400px', display: 'flex', flexDirection: 'column' }}>
        <IssueSidebar 
          issues={analysisComplete ? currentPlan.issues : []}
          selectedIssueId={selectedIssueId}
          onSelectIssue={setSelectedIssueId}
          isAnalyzing={isAnalyzing}
        />
      </div>

    </div>
  );
}

export default App;
