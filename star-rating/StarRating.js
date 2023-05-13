import * as React from 'react';

function Star({ filled, onClick, onMouseOver, onMouseOut }) {
  return (<svg
    onClick={onClick}
    onMouseOver={onMouseOver}
    style={{cursor: 'pointer'}}
    xmlns="http://www.w3.org/2000/svg"
    className={ filled ? 'star-icon star-icon-filled' : 'star-icon' }
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>)
  
}

export default function StarRating({ maximum, filled, onChange }) {
  const [tempFillCount, setTempFillCount] = React.useState(0);

  const handleClick = (i) => () => onChange(i);
  const handleMouseLeave = React.useCallback(() => setTempFillCount(0));
  const handleMouseOver = (i) => () => setTempFillCount(i);  

  // generate the stars
  const stars = [];
  for (let i=0; i < maximum; i += 1) {
    const starFilled = i < filled || i < tempFillCount;
    stars.push(<Star key={i} onMouseOver={handleMouseOver(i+1)} onClick={handleClick(i+1)} filled={starFilled} />);
  }

  return (
    <div onMouseLeave={handleMouseLeave}>
      {stars}
    </div>
  );
}

