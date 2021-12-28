<template>
  <div class="sub_container">
    <h3 class="sub-title1 my-2">템플릿 메인</h3>
    <div class="search_area">
      <table class="search_table">
        <colgroup>
          <col class="w5" />
          <col />
          <col class="w5" />
          <col />
          <col class="w5" />
          <col />
          <col class="w5" />
          <col />
          <col class="w5" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="col">셀렉박스</th>
            <td scope="col">
              <SearchSelectBox
                :items="searchItem1"
                v-model="searchData.v1"
                :allYn="true"
              />
            </td>
            <th scope="col">텍스트박스</th>
            <td scope="col">
              <SearchTextBox
                v-model="searchData.v2"
              />
            </td>
            <th scope="col">텍스트박스2</th>
            <td scope="col">
              <SearchTextBox
                v-model="searchData.v5"
                :icon="'mdi-magnify'"
                @iconClick="onIconClick"
              />
            </td>
            <th scope="col">날짜선택기</th>
            <td scope="col">
              <SearchDateBox
                v-model="searchData.v4"
                :fieldStyle="'width: 180px;'"
              />
            </td>
            <th scope="col">라디오박스</th>
            <td scope="col">
              <SearchRadioBox
                style="width: 200px"
                v-model="searchData.v3"
                :items="searchItem3"
              />
            </td>
          </tr>
          <tr>
            <th scope="col">체크박스</th>
            <td scope="col">
              <div class="d-flex align-center" style="width: 200px">
                <v-checkbox
                  class="search-check-box"
                  label="체크박스1"
                  v-model="searchData.v6"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스2"
                  v-model="searchData.v6"
                />
              </div>
            </td>
            <th scope="col">콤보박스</th>
            <td scope="col">
              <SearchComboBox
                style="width: 250px"
                :items="searchItem7"
                v-model="searchData.v7"
              />
            </td>
            <td scope="col" colspan="6">
              <div class="button-area">
                <v-btn
                  small outlined class="blue darken-1 white--text"
                  @click="search"
                >조회</v-btn>
                <v-btn
                  small outlined class="green darken-1 white--text"
                >다운로드</v-btn>
                <v-btn
                  small outlined class="grey darken-1 white--text"
                >초기화</v-btn>
                <v-btn
                  small class="px-1 elevation-0" color="red darken-1 white--text"
                >
                  <v-icon>mdi-alert</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="grid_area">
      <GridHeader>헤더</GridHeader>
      <v-data-table
        class="mcs-grid"
        dense
        height="500"
        fixed-header
        hide-default-footer
        :items-per-page="-1"
        :headers="gridHeaders"
        :items="gridItems"
      />
      <div class="grid_button_area">
        <v-btn
          small elevation="0" class="white"
        >테스트1</v-btn>
        <v-btn
          small elevation="0" class="white"
        >테스트2</v-btn>
        <v-btn
          small elevation="0" class="white"
        >테스트3</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import GridHeader from '@/components/common/grid/GridHeader.vue'
import SearchSelectBox from '@/components/common/search/SearchSelectBox.vue'
import SearchTextBox from '@/components/common/search/SearchTextBox.vue'
import SearchRadioBox from '@/components/common/search/SearchRadioBox.vue'
import SearchDateBox from '@/components/common/search/SearchDateBox.vue'
import SearchComboBox from '@/components/common/search/SearchComboBox.vue'

export default {
  name: 'TemplateMain',
  components: {
    SearchSelectBox,
    SearchTextBox,
    SearchRadioBox,
    SearchDateBox,
    SearchComboBox,
    GridHeader
  },
  data: () => ({
    searchItem1: [
      { value: '1', text: 'item1' },
      { value: '2', text: 'item2' },
      { value: '3', text: 'item3' },
      { value: '4', text: 'item4' }
    ],
    searchItem3: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ],
    searchItem7: [
      { value: '1', text: 'item1' },
      { value: '2', text: 'item2' },
      { value: '3', text: 'item3' },
      { value: '4', text: 'item4' }
    ],
    gridHeaders: [
      { text: '이름', value: 'name', align: 'center' },
      { text: '전화번호', value: 'telNum', align: 'center' },
      { text: '주소', value: 'addr', align: 'center' },
      { text: '상세 주소', value: 'addrDtl', align: 'center' },
      { text: '이메일', value: 'email', align: 'center' },
      { text: '등록자', value: 'rgsrNm', align: 'center' },
      { text: '등록일', value: 'regDt', align: 'center' }
    ],
    gridItems: GRID_SAMPLE,
    searchData: {
      v1: '1',
      v2: '',
      v3: '',
      v4: '',
      v5: '',
      v6: false,
      v7: []
    },
    menu: false
  }),
  methods: {
    search () {
      window.log('searchData', this.searchData)
    },
    onIconClick () {
      window.log('icon clicked !!!')
    }
  }
}

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
