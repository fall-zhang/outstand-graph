type Receive = Record<string, any>

export function defineSort(arr: Array<Receive | number>, arg = '') {
  if (arg && typeof arr[0] !== 'number') {
    (arr as Receive).sort((left: any, right: any) => {
      if (left[arg] > right[arg]) {
        // 左侧大于右侧，right 在后
        return -1
      }
      return 1
    })
  } else {

    (arr as Array<number>).sort((left, right) => right - left)
  }
  return arr
}
export function arrGroup(arr: Array<any>, size: number) {
  const result: Array<any> = []
  let group: Array<any> = []
  arr.forEach((item, index) => {
    if (index % size) {
      group.push(item)
    } else {
      if (index !== 0) {
        result.push(group)
      }
      group = [item]
    }
  })
  return result
}