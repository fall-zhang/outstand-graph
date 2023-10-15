import { ref } from 'vue'
import { Star as IconStar, MoreOne as IconMoreOne } from '@icon-park/vue-next'
import s from './file-list.module.scss'


export default {
  components: {
    IconStar,
  },
  render() {
    return (<>
      <div class={s.header}>
        <div class={s.selectGroup}>
          <a onClick={() => this.onFilterSelect('全部')} class={this.currentSelect === '全部' && s.select}>全部</a>
          <a onClick={() => this.onFilterSelect('导图')} class={this.currentSelect === '导图' && s.select}>导图</a>
          <a onClick={() => this.onFilterSelect('图表')} class={this.currentSelect === '图表' && s.select}>图表</a>
          <a onClick={() => this.onFilterSelect('收藏')} class={this.currentSelect === '收藏' && s.select}>收藏</a>
        </div>
        <div class={s.selectGroup}>
          {/* 回头制作视图切换的效果 */}
        </div>
      </div>
      <div class={s.chartFileGroup} >
        {
          new Array(12).fill('12').map((item) => {
            return <div class={s.chartItem} onClick={() => this.onEnterChart()} >
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
  setup() {
    const currentSelect = ref<string>('全部')
    function onFilterSelect(type: string) {
      currentSelect.value = type
    }
    function onEnterChart(type: string) {
      currentSelect.value = type
    }
    // watch(currentSelect, (newVal) => {
    //   console.log(newVal)
    // })
    return {
      onFilterSelect,
      currentSelect,
      onEnterChart
    }
  }
}