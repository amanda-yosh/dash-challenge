import React from 'react'
import { HeatMapGrid } from 'react-grid-heatmap'
import ProgressBar from '../ProgressBar/ProgressBar'
import { BiHappyHeartEyes, BiDizzy, BiMessageAltX, BiXCircle } from 'react-icons/bi';

import './Heatmap.scss';

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

  interface Contador {
    [key: string]: number;
  }
  const counts: Contador = {};

  for (const row of data) {
    for (const num of row) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  }

  const testData = [
    { service: 'Normal', serviceLogo: BiHappyHeartEyes, bgcolor: "#6a1b9a", completed: Math.round((counts[0]/(16*6))*100) },
    { service: 'Service Down', serviceLogo: BiDizzy, bgcolor: "#00695c", completed: Math.round((counts[1]/(16*6))*100) },
    { service: 'Critical', serviceLogo: BiXCircle, bgcolor: "#ef6c00", completed: Math.round((counts[2]/(16*6))*100) },
    { service: 'Trouble', serviceLogo: BiMessageAltX, bgcolor: "#ef0097", completed: Math.round((counts[3]/(16*6))*100) },
  ];

  return (
    <div className='heatmap-container'>
      <h3>Heatmap</h3>
      <ul>
        {testData.map((item, idx) => (
          <li className='heatmap-container--list--item' key={idx}>
            {/* {item.serviceLogo} */}
            {item.service}
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
          </li>
        ))}
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
