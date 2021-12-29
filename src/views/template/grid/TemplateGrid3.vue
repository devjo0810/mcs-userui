<template>
  <div class="sub_container">
    <h3 class="sub-title1 my-3">ToastUI 그리드 2</h3>
    <div class="grid_area">
      <GridHeader>ToastUI Grid Editor</GridHeader>
      <Grid
        ref="tuiGrid"
        :rowHeaders="['rowNum', 'checkbox']"
        :rowHeight="30"
        :minRowHeight="30"
        :bodyHeight="500"
        :header="{ height: 30 }"
        :columns="gridColumns"
        :data="gridItems"
      />
      <div class="grid_button_area">
        <v-btn
          small elevation="0" class="white"
          @click="getGridData"
        >get 전체 ROw</v-btn>
        <v-btn
          small elevation="0" class="white"
          @click="getGridCheckedRows"
        >get 체크 ROW</v-btn>
        <v-btn
          small elevation="0" class="white"
          @click="initGridData"
        >초기화</v-btn>
        <v-btn
          small elevation="0" class="white"
          @click="setGridData(gridItems)"
        >set Data</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import GridHeader from '@/components/common/grid/GridHeader.vue'
import { Grid } from '@toast-ui/vue-grid'

export default {
  name: 'TemplateGrid2',
  components: {
    GridHeader,
    Grid
  },
  data: () => ({
    isSingle: false,
    selected: [],
    gridColumns: [
      { header: '이름', name: 'name', align: 'center', editor: 'text' },
      {
        header: '전화번호',
        name: 'telNum',
        align: 'center'
      },
      {
        header: 'Select코드',
        name: 'sel',
        align: 'center',
        formatter: 'listItemText',
        editor: {
          type: 'select',
          options: {
            listItems: [
              { text: 'Sample1', value: '1' },
              { text: 'Sample2', value: '2' },
              { text: 'Sample3', value: '3' }
            ]
          }
        },
        copyOptions: {
          useListItemText: true
        }
      },
      {
        header: 'Check코드',
        name: 'check',
        align: 'center',
        formatter: 'listItemText',
        editor: {
          type: 'checkbox',
          options: {
            listItems: [
              { text: 'Sample1', value: '1' },
              { text: 'Sample2', value: '2' },
              { text: 'Sample3', value: '3' }
            ]
          }
        },
        copyOptions: {
          useListItemText: true
        }
      },
      {
        header: 'Radio코드',
        name: 'radio',
        align: 'center',
        formatter: 'listItemText',
        editor: {
          type: 'radio',
          options: {
            listItems: [
              { text: '★☆☆', value: '1' },
              { text: '★★☆', value: '2' },
              { text: '★★★', value: '3' }
            ]
          }
        },
        copyOptions: {
          useListItemText: true
        }
      },
      { header: '주소', name: 'addr', align: 'center' },
      { header: '상세 주소', name: 'addrDtl', align: 'center', editor: 'text' },
      { header: '이메일', name: 'email', align: 'center' },
      { header: '등록자', name: 'rgsrNm', align: 'center' },
      {
        header: '등록일',
        name: 'regDt',
        align: 'center',
        editor: {
          type: 'datePicker',
          options: {
            format: 'yyyy-MM-dd',
            language: 'ko'
          }
        }
      },
      { header: '사용여부', name: 'isUsed', align: 'center' }
    ],
    gridItems: GRID_SAMPLE
  }),
  computed: {
    gridInstance () {
      return this.$refs.tuiGrid.gridInstance
    }
  },
  methods: {
    printSelected () {
      console.log(this.selected)
    },
    getGridData () {
      console.log(this.gridInstance.getData())
    },
    getGridCheckedRows () {
      console.log(this.gridInstance.getCheckedRows())
    },
    initGridData () {
      this.gridInstance.resetData([])
    },
    setGridData (items) {
      this.gridInstance.resetData(items)
    }
  }
}

const GRID_SAMPLE = [
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '1', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '2', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '3', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '4', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '5', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '6', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '7', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '8', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '9', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '10', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '11', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '12', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '13', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '14', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '15', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '16', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '17', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '18', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '19', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: false, id: '20', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '21', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { radio: '1', check: '1', sel: '1', isUsed: true, id: '22', name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' }
]
</script>
