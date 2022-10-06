<script lang="ts">
import {
  ComponentInstance,
  defineComponent,
  inject,
  onMounted,
  Ref,
  ref,
} from '@nuxtjs/composition-api'

import useSearchType from '~/composables/use-search-type'

import VMobileMenuModal from '~/components/VContentSwitcherOld/VMobileMenuModal.vue'
import VSearchTypePopoverOld from '~/components/VContentSwitcherOld/VSearchTypePopoverOld.vue'
import VDesktopPageMenu from '~/components/VHeaderOld/VPageMenu/VDesktopPageMenu.vue'
import VMobilePageMenu from '~/components/VHeaderOld/VPageMenu/VMobilePageMenu.vue'

export default defineComponent({
  name: 'VHeaderMenu',
  components: {
    VMobileMenuModal,
    VSearchTypePopoverOld,
    VDesktopPageMenu,
    VMobilePageMenu,
  },
  props: {
    isSearchRoute: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const isMinScreenMd: Ref<boolean> = inject('isMinScreenMd')
    const menuModalRef = ref<ComponentInstance | null>(null)
    const content = useSearchType()

    const isMounted = ref(false)
    onMounted(() => {
      isMounted.value = true
    })
    const selectSearchType = async (type) => {
      menuModalRef.value?.closeMenu()
      await content.setActiveType(type, {
        updatePath: true,
        fetchResults: true,
      })
    }

    return {
      isMinScreenMd,
      menuModalRef,
      isMounted,

      content,
      selectSearchType,
    }
  },
  render(h) {
    if (!this.isSearchRoute) {
      return this.isMinScreenMd && this.isMounted
        ? h(VDesktopPageMenu)
        : h(VMobilePageMenu)
    } else if (this.isMinScreenMd && this.isMounted) {
      return h('div', { class: 'flex flex-grow justify-between gap-x-2' }, [
        h(VDesktopPageMenu),
        h(VSearchTypePopoverOld, {
          props: { activeItem: this.content.activeType.value },
          ref: 'menuModalRef',
          on: { select: this.selectSearchType },
        }),
      ])
    } else {
      return h(VMobileMenuModal, {
        ref: 'menuModalRef',
        props: { activeItem: this.content.activeType.value },
        on: {
          select: this.selectSearchType,
        },
      })
    }
  },
})
</script>
