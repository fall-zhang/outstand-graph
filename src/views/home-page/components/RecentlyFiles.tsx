import style from './RecentlyFiles.module.scss'
import { MoreOne as IconMoreOne } from '@icon-park/vue-next'
export default {
  components: {
    IconMoreOne
  },
  render() {
    const fileList = ref([])
    return <div class={style.recently} >
      <h3 class={style.title}>最近使用的文件 </h3>
      {
        fileList.value.length > 0 ?
          (<ul class={style.fileList}>
            {
              ['最近的第一个', 'asdfasdf'].map(item => {
                return <li class={style.listItem}>
                  <span>{item}</span>
                  <IconMoreOne class={style.option}></IconMoreOne>
                </li>
              })
            }
          </ul>) :
          <div class={style.recentEmpty}>最近没有编辑过内容</div>
      }
    </div>
  }
}
