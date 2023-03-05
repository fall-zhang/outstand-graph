# Vue3 Graph

> 本应用使用该模板搭建而成：https://github.com/fall-zhang/vite-vue3-TS-lint

## 项目启动

- `pnpm i` 安装依赖
- `pnpm dev` & `pnpm serve` 启动项目

## 项目内容

- 实现导入导出数据图

## 功能添加

- [ ] 快速连接的具体实现
  - [ ] 使用快速连接后，点击第一个节点，再点击第二个节点直接连接
- [ ] 用户可进行的操作：单机，双击，鼠标滚轮，右键？
  - 单击，可以选中，可以实现放大缩小，拖拽功能
  - 双击，节点可以删除节点，删除之前给一个弹出框，单击
- [ ] 删除功能：点击节点，或者 hover 时，右上角出现删除图像按钮，
- [ ] 添加图例功能，帮助用户使用
- [ ] 无论何时，长按空格都可以进行拖拽
- [ ] 无论何时，点击 ctrl 都切换为指针
- [ ] 选中单个内容的时候，可以放大缩小，多选的时候取消这个功能
- [ ] 添加 ctrl+z ctrl+y 的 undo redo 功能

## 问题修复

- [ ] hover 后的删除按钮会算到 history 中，想办法移除
