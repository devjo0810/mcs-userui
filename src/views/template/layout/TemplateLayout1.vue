<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :minW="3"
        :minH="6"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        drag-allow-from=".vue-draggable-handle"
        drag-ignore-from=".no-drag"
      >
        <v-card class="todolist-card">
          <v-card-title class="todolist-header vue-draggable-handle">
            <span class="no-drag">{{ item.listNm }}</span>
            <div class="ml-auto header-button no-drag">
              <v-btn text icon><v-icon>mdi-palette</v-icon></v-btn>
              <v-btn text icon><v-icon>mdi-plus</v-icon></v-btn>
              <v-btn text icon><v-icon>mdi-close</v-icon></v-btn>
            </div>
          </v-card-title>
          <v-divider />
          <v-card-text class="todolist-body ">
            {{ item.i }}
          </v-card-text>
        </v-card>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  name: 'TemplateLayout1',
  components: {
    GridLayout,
    GridItem
  },
  data: () => ({
    layout: [
      { listNm: 'test1', x: 0, y: 0, w: 3, h: 6, i: '0' },
      { listNm: 'test2', x: 3, y: 0, w: 3, h: 6, i: '1' },
      { listNm: 'test3', x: 6, y: 0, w: 3, h: 6, i: '2' },
      { listNm: 'test4', x: 9, y: 0, w: 3, h: 6, i: '3' },
      { listNm: 'test5', x: 0, y: 6, w: 3, h: 6, i: '4' },
      { listNm: 'test6', x: 3, y: 6, w: 3, h: 6, i: '5' },
      { listNm: 'test7', x: 6, y: 6, w: 3, h: 6, i: '6' }
    ]
  })
}
</script>
