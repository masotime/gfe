import ProgressBar from './ProgressBar';

import './styles.css';

export default function App() {
  return (
    <div>
      <ProgressBar percent={0} />
      <ProgressBar percent={25} />
      <ProgressBar percent={50} />
      <ProgressBar percent={75} />
      <ProgressBar percent={100} />
      <ProgressBar percent={2} />
      <ProgressBar percent={-50} />
      <ProgressBar percent={120} />
    </div>
  );
}

