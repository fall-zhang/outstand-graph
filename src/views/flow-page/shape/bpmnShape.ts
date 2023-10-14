import { Graph, Shape } from '@antv/x6'
Graph.registerNode('event',
  {
    inherit: 'circle',
    attrs: {
      body: {
        strokeWidth: 2,
        stroke: '#5F95FF',
        fill: '#FFF'
      }
    }
  },
  true)

Graph.registerNode(
  'activity',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'image',
        selector: 'img'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      body: {
        rx: 6,
        ry: 6,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
        strokeWidth: 1
      },
      img: {
        x: 6,
        y: 6,
        width: 16,
        height: 16,
        'xlink:href':
          'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ'
        // 也可以为 base64
        // 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxMUwxMSA2TDI0IDE5TDM3IDZMNDIgMTFMMjkgMjRMNDIgMzdMMzcgNDJMMjQgMjlMMTEgNDJMNiAzN0wxOSAyNEw2IDExWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=='
      },
      label: {
        fontSize: 12,
        fill: '#262626'
      }
    }
  },
  true
)

Graph.registerNode(
  'gateway',
  {
    inherit: 'polygon',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
        strokeWidth: 2,
        stroke: '#5F95FF',
        fill: '#EFF4FF'
      },
      label: {
        text: 'x',
        fontSize: 40,
        fill: '#5F95FF'
      }
    }
  },
  true
)

Graph.registerEdge(
  'bpmn-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2
      }
    }
  },
  true
)
export const StartCircle = new Shape.Circle({
  inherit: 'circle',
  attrs: {
    body: {
      strokeWidth: 2,
      stroke: '#5F95FF',
      fill: '#FFF'
    }
  }
})
export const CheckOut = new Shape.Rect({
  inherit: 'activity',
  attrs: {
    body: {
      width: 100,
      height: 60,
      position: {
        x: 300,
        y: 240
      },
      label: '领导审批'
    }
  }
})
export const GateWay = new Shape.Circle({
  shape: 'rect',
  height: 40,
  width: 40,
  // markup: [
  //   {
  //     tagName: 'rect',
  //     selector: 'label',
  //     attrs: {
  //       width: '46',
  //       height: '46',
  //       fill: '#fff',
  //       cx: '20',
  //       cy: '20',
  //       stroke: '#000000',
  //       strokeWidth: 2,
  //       transform: 'origin(center,center);rotate(45)'
  //     },
  //   },
  //   {
  //     tagName: 'path',
  //     attrs: {
  //       d: 'M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z'
  //     }
  //   }
  // ],
  attrs: {
    image: {
      'xlink:href': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxMUwxMSA2TDI0IDE5TDM3IDZMNDIgMTFMMjkgMjRMNDIgMzdMMzcgNDJMMjQgMjlMMTEgNDJMNiAzN0wxOSAyNEw2IDExWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
      width: 16,
      height: 16,
      x: 12,
      y: 12
    },
    body: {
      strokeWidth: 2,
      stroke: '#5F95FF',
      fill: '#FFF',
      attrs: {
        rect: {
          height: 40,
          width: 40,
          strokeWidth: 2,
          stroke: '#000'
        }
      }
    }
  }
})