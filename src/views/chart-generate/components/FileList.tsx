import { ref } from 'vue'
import { Star as IconStar, MoreOne as IconMoreOne } from '@icon-park/vue-next'
import s from './FileList.module.scss'
import { usePost } from '@/utils/Request'


export default {
  components: {
    IconStar,
  },
  setup() {
    // console.log(this.udfu)
    const allFiles = ref([
      {
        chartType: '折线图',
        imgPath: ''
      }
    ])
    return () => (<>
      <div class={s.chartFileGroup} >
        {
          allFiles.value.map((item) => {
            return <div class={s.chartItem}>
              <div class={s.itemImg}>图片位置</div>
              <div class={s.itemText}>
                <span>图片名称</span>
                <span class={s.option}>
                  <IconStar class={s.star} />
                  <IconMoreOne class={s.more}></IconMoreOne>
                </span>
              </div>
            </div>
          })
        }
      </div>
    </>)
  },
}