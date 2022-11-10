import React from 'react'
import { HeatMapGrid } from 'react-grid-heatmap'
import ProgressBar from '../ProgressBar/ProgressBar'

const dictionatyy = {
  Normal: 1,
  ServiceDown: 2,
  Critical: 3,
  Trouble: 4,
}

function Heatmap() {
  const xLabels = new Array(16).fill(0).map((_, i) => `${i}`)
  const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const dicLength = Object.keys(dictionatyy).length;
  const data = new Array(yLabels.length).fill(0).map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * dicLength))
  )

  const count: {[key:string]: number } = {};
  data.map((row) => (
    row.forEach(el => {
      count[el] = (count[el] || 0) + 1;
    })
  ))
  console.log({ count }, Object.keys(count))

  const dictionary = {
    Normal: {
      id: 0,
      bgcolor: "#6a1b9a",
      completed: Object.keys(count),
    },
    ServiceDown: 1,
    Critical: 2,
    Trouble: 3,
  }
  console.log({ dictionary })

  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  return (
    <div style={{ width: '100%' }}>
      <h3>Heatmap</h3>
      <ul>
        {testData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
        <li>Normal</li>
        <li>Service Down</li>
        <li>Critical</li>
        <li>Trouble</li>
      </ul>
      <HeatMapGrid
        data={data}
        cellRender={(x, y, value) => (<div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>)}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: '.8rem',
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
        })}
        cellHeight='2rem'

        square />
    </div>
  );
}

export default Heatmap;
