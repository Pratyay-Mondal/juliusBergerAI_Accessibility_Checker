import React from 'react';

export default function IssueSidebar({ issues, selectedIssueId, onSelectIssue, isAnalyzing }) {
  return (
    <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '25px', borderBottom: '1px solid var(--panel-border)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Analysis Results</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
          {isAnalyzing ? 'Analyzing model geometry...' : issues.length > 0 ? `${issues.length} compliance issues found` : 'Awaiting analysis'}
        </p>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {isAnalyzing && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)' }}>
            <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid var(--panel-border)', borderTopColor: 'var(--accent-color)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <p style={{ marginTop: '20px', fontWeight: '500' }}>Cross-referencing DIN 18040...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {!isAnalyzing && issues.length === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)', textAlign: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '15px', opacity: 0.5 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <p>Select a floor plan<br/>and click "Run AI Analysis"</p>
          </div>
        )}

        {!isAnalyzing && issues.map(issue => {
          const isSelected = selectedIssueId === issue.id;
          const color = issue.severity.toLowerCase() === 'high' ? 'var(--danger)' : 'var(--warning)';

          return (
            <div 
              key={issue.id}
              onClick={() => onSelectIssue(issue.id)}
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: isSelected ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.2)',
                border: `1px solid ${isSelected ? color : 'var(--panel-border)'}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {isSelected && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: color, boxShadow: `0 0 10px ${color}` }}></div>}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{issue.title}</h3>
                <span style={{ 
                  fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', 
                  padding: '4px 8px', borderRadius: '6px', 
                  background: `${color}20`, color: color,
                  border: `1px solid ${color}40`
                }}>
                  {issue.severity}
                </span>
              </div>
              
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '600', marginBottom: '10px' }}>
                {issue.rule}
              </div>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {issue.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
