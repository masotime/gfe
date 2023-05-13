export default function ProgressBar({percent}) {
  const filledStyle = {
    width: `${Math.min(Math.max(percent, 0), 100)}%`
  };

  return <div role="progressbar" aria-valuenow={percent} className="progress">
    {percent > 0 ? 
      <div style={filledStyle} className="progress-filled">
        {percent}%
      </div> : null
    }
  </div>;
}

