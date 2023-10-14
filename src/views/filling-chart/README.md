# Filling Chart

使用表单编辑 echarts **零门槛** 实现图表编辑

## 项目特点

- 可以让所有人都简单上手
- 导出的内容直接作为组件进行使用（Vue、React、原生 JS）
- 暂存配置到服务器，何人都可以上传自己的图表内容
- 计划编写 echart 组件，只需要传递 id 就可以调用对应的图表，`<fall-chart id="chartId">`

## 工作计划

### 1.0

1.0 开发阶段以实现功能为目标，尽可能多的实现功能

- [ ] 补充图标属性的 options
  - [ ] 补充 tooltip
  - [ ] 补充 line
  - [ ] 补充 bar
  - [ ] 补充 pie
  - [ ] 补充 treemap
  - [ ] 补充 radar
  - [ ] 补充 sunburst
  - [ ] 补充 gauge
  - [ ] 补充 pictorialBar
- [ ] 出码时可以切换出码的形式（出码为 Vue2、Vue3、setup、纯 js、React-tsx）
- [ ] 配置项可以考虑抽屉弹出，或者可以扩展配置项的列数
- [ ] 点击 ？问号时，跳转到（echarts 官网）
- [ ] hover 目录，可以弹出代码框，提供代码查看
- [ ] （右侧菜单-配置代码）添加代码弹窗，或者是代码编辑，可以进行编辑配置的源代码
- [ ] 添加一个新的页面，可以通过数据（导入 excel，或者是远程数据），配置 chart 参考，https://app.rawgraphs.io/

### 2.0

2.0 以优化功能为目标，在添加功能时注重优化

- [ ] 切换的时候，使用类似于 vant 的切换方式，点击进入一个新的页面进行调用，标题处写出对应路由，面包屑导航
- [ ] 可以调整左侧宽度，调节时，使用节流
- [ ] 切换的时候，只切换配置的层级，根据对象的层级，使用 immer，实现历史修改
- [ ] 使用 Vue3，重构应用
- [ ] 注重代码分割，确保分割后的代码加载符合用户使用规律
- [ ] 最好注册 service worker，当客户端闲置的时候，将用到的代码推送到客户端（防止多次载入）
- [ ] 对异步加载的组件进行处理，如果出错，给用户展示要么反馈，要么重新加载
- [ ] 更新架构，使用不同的 package 标识不同的项目包
  - [ ] 根据 id 生成图表的功能
  - [ ] 项目主目录
  - [ ] 项目的组件目录

## 参考内容

提供表格数据，然后提取表头和表首列，然后作为选项，提供用户进行配置