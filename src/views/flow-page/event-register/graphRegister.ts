import { Graph } from '@antv/x6'
export const registerGraphEvent = function (graph: Graph) {
  graph.on('cell:selected', () => {
    graph.getSelectedCells()
  })
  graph.on('edge:mouseup', ({ edge }: Record<string, any>) => {
    // selectCell.value = edge
    console.log(edge)
  })
  graph.on('node:click', ({ node }: Record<string, any>) => {
    node.removeTools()
    // selectCell.value = node
  })
  graph.on('cell:mouseleave', ({ cell }: Record<string, any>) => {
    cell.removeTools()
  })
  graph.on('cell:mouseenter', ({ cell }: Record<string, any>) => {
    if (cell.isNode()) {
      cell.addTools([
        {
          name: 'button-remove',
          args: {
            x: '100%',
            y: 0,
            offset: { x: -10, y: 10 }
          }
        }
      ])
    } else {
      // cell.addTools(['vertices', 'segments'])
      cell.addTools(['vertices', 'segments'])
    }
  })
}
