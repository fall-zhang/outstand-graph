import style from './recently-files.module.scss'
import { MoreOne as IconMoreOne } from '@icon-park/vue-next'
export default {
  components: {
    IconMoreOne
  },
  render() {
    return <div class={style.recently} >
      <h3 class={style.title}>最近使用的文件 </h3>
      <div class={style.fileList}>
        {
          ['最近的第一个', 'asdfasdf'].map(item => {
            return <div class={style.listItem}>
              <span>{item}</span>
              <IconMoreOne class={style.option}></IconMoreOne>
            </div>
          })
        }
      </div>
    </div>
  }
}
