import { ref } from 'vue'
import { Star as IconStar, MoreOne as IconMoreOne } from '@icon-park/vue-next'
import s from './FileList.module.scss'
import { usePost } from '@/utils/Request'
import Img from '@A/images/charts-example/line-chart.png'

export default {
  components: {
    IconStar,
  },
  setup() {
    // console.log(this.udfu)
    const allFiles = ref([
      {
        chartName: '折线图',
        chartType: 'line',
        imgPath: Img
      },
      {
        chartName: '折线图',
        chartType: 'line-stack',
        imgPath: Img
      }
    ])
    const outContainer = ref()
    const rowCount = ref()
    function resizeContainer() {
      const out = outContainer.value.getBoundingClientRect()
      rowCount.value = Math.ceil(Number(out.width) / 360)
    }
    onMounted(() => {
      window.addEventListener('resize', resizeContainer)
      resizeContainer()
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizeContainer)
    })
    return () => (<>
      <div class={s.chartFileGroup} ref={outContainer} style={
        { gridTemplateColumns: 'repeat(' + rowCount.value + ',1fr)' }
      }>
        {
          allFiles.value.map((item) => {
            return <div class={s.chartItem}>
              <div class={s.headText}>
                {item.chartType}
              </div>
              <img class={s.itemImg} src={item.imgPath} />
              {/* <div class={s.itemText}>
                <span>图片名称</span>
                <span class={s.option}>
                  <IconStar class={s.star} />
                  <IconMoreOne class={s.more}></IconMoreOne>
                </span>
              </div> */}
            </div>
          })
        }
      </div>
    </>)
  },
}
