import { v4 as uuid } from 'uuid'

export function isNull(value: unknown) {
  return (value === null) || (value === undefined)
}

export function isNotNull(value: unknown) {
  return (value !== null) && (value !== undefined)
}

export function deepClone<T>(receive: T): T {
  let middle: unknown = ''
  if (isProxy(receive)) {
    middle = toRaw(receive)
  } else {
    middle = receive
  }
  let result = null
  try {
    result = structuredClone(middle)
  } catch (err) {
    result = goClone(middle)
  }
  return result as T
}

function goClone(receive: unknown) {
  return structuredClone(receive)
}

export const getRandomId = function () {
  return uuid()
}
/**
 * 为 DOM 添加事件，返回移除事件的方法
 * @param {Element} target 挂载事件的节点
 * @param {GlobalEventHandlersEventMap} event 挂载的事件类型
 * @param {*} fun 需要执行的方法
 * @returns 移除该事件的函数
 */
// 之后需要添加上节流相关方法
export const addListener = (target: HTMLElement, event: string, fun: { (): void }) => {
  target.addEventListener(event, fun)
  return function () {
    target.removeEventListener(event, fun)
  }
}
export const insertCSS = function (cssStyle: string) {
  const stylesheet = new CSSStyleSheet()
  stylesheet
    .replace(cssStyle)
    .then(() => {
      // console.log(stylesheet.cssRules[0].cssText);
      document.adoptedStyleSheets = [stylesheet] // 挂载到 document 上
    })
    .catch((err) => {
      console.error('Failed to replace styles:', err)
    })
  // return
}