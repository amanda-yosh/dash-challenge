import React from 'react'
import { HeatMapGrid } from "react-grid-heatmap";

interface HeatmapGridProps {
  data: number[][];
  cellHeight?: string;
}

function HeatmapGrid({data, cellHeight}: HeatmapGridProps) {
  return (
    <HeatMapGrid
      data={data}
      cellRender={(x, y, value) => (<div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>)}
      cellStyle={(_x, _y, ratio) => ({
        background: `rgb(12, 160, 44, ${ratio})`,
        fontSize: '.8rem',
        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
      })}
      cellHeight={cellHeight || '2rem'}
      square
      // xLabels={xLabels}
      // xLabelsPos='bottom'
      // xLabelsStyle={(index) => ({
      //   color: index % 2 ? 'transparent' : '#777',
      //   fontSize: '.8rem'
      // })}
      // yLabels={yLabels}
      // yLabelsPos='right'
      // yLabelsStyle={() => ({
      //   fontSize: '.7rem',
      //   textTransform: 'uppercase',
      //   color: '#777'
      // })}
      // onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
    />
  )
};

export default HeatmapGrid;
