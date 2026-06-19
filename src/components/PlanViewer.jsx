import React from 'react';

export default function PlanViewer({ plan, isAnalyzing, analysisComplete, selectedIssueId, onSelectIssue }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Container for Image and Overlays */}
      <div style={{ position: 'relative', height: '100%', aspectRatio: '1 / 1', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)', background: 'var(--bg-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        
        {/* We fallback to generic floor_plan if specific image is not found */}
        <img 
          src={`/${plan.imageRef}.png`} 
          alt={`Floor Plan: ${plan.planName}`} 
          onError={(e) => { e.target.onerror = null; e.target.src="/floor_plan.png" }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isAnalyzing ? 'brightness(0.5) sepia(0.5) hue-rotate(180deg)' : 'invert(0.9) brightness(0.9)', transition: 'filter 0.8s ease' }}
        />

        {/* Scanning Animation */}
        {isAnalyzing && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: '4px',
            background: 'var(--accent-color)',
            boxShadow: '0 0 25px 10px rgba(59, 130, 246, 0.6)',
            animation: 'scan-line 2s linear infinite',
            zIndex: 10
          }} />
        )}

        {/* Bounding Boxes */}
        {analysisComplete && plan.issues.map(issue => {
          const isSelected = selectedIssueId === issue.id;
          const color = issue.severity.toLowerCase() === 'high' ? 'var(--danger)' : 'var(--warning)';
          
          return (
            <div 
              key={issue.id}
              onClick={(e) => { e.stopPropagation(); onSelectIssue(issue.id); }}
              style={{
                position: 'absolute',
                left: issue.box.left,
                top: issue.box.top,
                width: issue.box.width,
                height: issue.box.height,
                border: `3px solid ${color}`,
                backgroundColor: isSelected ? `${color}40` : `${color}10`,
                boxShadow: isSelected ? `0 0 20px ${color}` : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: isSelected ? 5 : 2,
                borderRadius: '4px'
              }}
            >
               {isSelected && (
                 <div style={{
                   position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                   background: color, color: 'white', padding: '4px 8px', borderRadius: '4px',
                   fontSize: '0.8rem', fontWeight: 'bold', whiteSpace: 'nowrap',
                   boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                 }}>
                   {issue.rule.split(':')[0]}
                 </div>
               )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
