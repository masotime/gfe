import './styles.css';
import * as React from 'react';

const COMPLETE_TIME = 2000;

function Bar() {
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, COMPLETE_TIME / 100);

    return () => clearTimeout(ref.current);
  }, [progress]);

  const filledStyle = {
    width: `${progress}%`,
  };

  const emptyStyle = {
    width: `${100 - progress}%`,
    
  }
  return (<div className="progressbar">
    <div className="filledbar" style={filledStyle}></div>
    <div className="emptybar" style={emptyStyle}></div>
  </div>)
  
}

export default function App() {
  const [bars, setBars] = React.useState(0);

  const handleAdd = () => {
    setBars((bars) => bars + 1);
  };

  let barEls = [];

  for (let i=0; i < bars; i+= 1) {
    barEls.push(<Bar key={i} />);
  }
  
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <React.Fragment>
        {barEls}
      </React.Fragment>
    </div>
  );
}

