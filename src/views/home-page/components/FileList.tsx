import { ref } from 'vue'
import { Star as IconStar, MoreOne as IconMoreOne } from '@icon-park/vue-next'
import s from './FileList.module.scss'


export default {
  // data: () => ({
  //   udfu: 'picku'
  // }),
  components: {
    IconStar,
  },
  setup() {
    // console.log(this.udfu)
    const currentSelect = ref<string>('全部')
    const onFilterSelect = function (type: string) {
      currentSelect.value = type
    }
    function onEnterChart(type: string) {
      currentSelect.value = type
    }

    return () => (<>
      <div class={s.header}>
        <div class={s.selectGroup}>
          <a onClick={() => onFilterSelect('全部')} class={currentSelect.value === '全部' && s.select}>全部</a>
          {/* <a onClick={() => onFilterSelect('导图')} class={currentSelect.value === '导图' && s.select}>导图</a> */}
          <a onClick={() => onFilterSelect('图表')} class={currentSelect.value === '图表' && s.select}>图表</a>
          <a onClick={() => onFilterSelect('收藏')} class={currentSelect.value === '收藏' && s.select}>收藏</a>
        </div>
        <div class={s.selectGroup}>
          {/* 回头制作视图切换的效果 */}
        </div>
      </div>
      <div class={s.chartFileGroup} >
        {
          new Array(12).fill('12').map((item) => {
            return <div class={s.chartItem} onClick={() => onEnterChart(item)} >
              <div class={s.itemImg}>图片位置</div>
              <div class={s.itemText}>
                <span>图片名称</span>
                <span class={s.option}>
                  <IconStar theme={item === '12' ? undefined : 'filled'} class={s.star} />
                  <IconMoreOne class={s.more}></IconMoreOne>
                </span>
              </div>
            </div>
          })
        }
      </div>
    </>)
  },
  // mounted() {
  //   console.log(this.udfu)

  //   const allFiles = ref<any[]>([])
  //   fetch('/api/home/files', {
  //     method: 'post'
  //   }).then(res => res.json()).then(res => {
  //     console.log(res)
  //     allFiles.value = res
  //   })
  // },
}