<template>
<div class="sub_container">
    <h3 class="sub-title1 my-2">템플릿 그리드1</h3>
    <div class="grid_area">
      <GridHeader>그리드 헤더 푸터 포함</GridHeader>
      <v-data-table
        class="mcs-grid"
        dense
        height="250"
        :headers="gridHeaders"
        :items="gridItems"
      />
    </div>
    <div class="grid_area">
      <GridHeader>그리드 헤더 푸터 생략</GridHeader>
      <v-data-table
        class="mcs-grid"
        dense
        height="250"
        hide-default-header
        hide-default-footer
        :items-per-page="-1"
        :headers="gridHeaders"
        :items="gridItems"
      />
    </div>
  </div>
</template>

<script>
import GridHeader from '@/components/common/grid/GridHeader.vue'

export default {
  name: 'TemplateGrid1',
  components: {
    GridHeader
  },
  data: () => ({
    gridHeaders: GRID_HEADERS,
    gridItems: GRID_SAMPLE
  })
}

const GRID_HEADERS = [
  { text: '이름', value: 'name', align: 'center' },
  { text: '전화번호', value: 'telNum', align: 'center' },
  { text: '주소', value: 'addr', align: 'center' },
  { text: '상세 주소', value: 'addrDtl', align: 'center' },
  { text: '이메일', value: 'email', align: 'center' },
  { text: '등록자', value: 'rgsrNm', align: 'center' },
  { text: '등록일', value: 'regDt', align: 'center' }
]

const GRID_SAMPLE = [
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' },
  { name: '홍길동', telNum: '010-0000-1234', addr: '서울특별시', addrDtl: '가좌동', email: 'honggildong@hong.co.kr', rgsrNm: '김좌진', regDt: '2021-12-12' }
]
</script>
