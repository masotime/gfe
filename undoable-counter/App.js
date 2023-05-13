import './styles.css';
import * as React from 'react';

const actions = {
  '/2': (num) => num / 2,
  '-1': (num) => num - 1,
  '+1': (num) => num + 1,
  'x2': (num) => num * 2
};

// log object would be
// op, prev, next

function Table({ log }) {
  return (<table>
    <thead>
      <th>Op</th>
      <th>Old</th>
      <th>New</th>
    </thead>
    <tbody>
    {log.map((entry, index) => {
      const { op, prev, next } = entry;
      return (
        <tr key={index}>
          <td>{op}</td>
          <td>{prev}</td>
          <td>{next}</td>
        </tr>
      )
    })}
    </tbody>  
  </table>);
}

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [log, setLog] = React.useState([]);
  const [undoPtr, setUndoPtr] = React.useState(0);

  const performOp = React.useCallback((op) => () => {
    const prev = counter;
    const next = actions[op](counter);
    setLog((log) => {
      const nextLog = [...(log.slice(0, undoPtr))];
      nextLog.push({ op, prev, next });
      return nextLog;
    });
    setUndoPtr((undoPtr) => undoPtr + 1);
    setCounter(next);
  }, [counter, log]);

  const undo = React.useCallback(() => {
    const rowToUndo = log[undoPtr - 1];
    setCounter(rowToUndo.prev);
    setUndoPtr((undoPtr) => undoPtr - 1);
  }, [undoPtr]);

  const redo = React.useCallback(() => {
    const rowToRedo = log[undoPtr];
    if (rowToRedo) {
      setCounter(rowToRedo.next);
      setUndoPtr((undoPtr) => undoPtr + 1);
    }
  }, [undoPtr]);

  const reset = React.useCallback(() => {
    setLog([]);
    setCounter(0);
    setUndoPtr(0);
  });

  return (<div>
    <div className="top-controls">
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
      <button onClick={reset}>Reset</button>
    </div>
    <div className="counter-controls">
      <button onClick={performOp('/2')}>/2</button>
      <button onClick={performOp('-1')}>-1</button>
      <h1>{counter}</h1>
      <button onClick={performOp('+1')}>+1</button>
      <button onClick={performOp('x2')}>x2</button>
    </div>
    <Table log={log.slice(0, undoPtr)} />
  </div>);
}

