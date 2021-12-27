<template>
  <div class="sub_container">
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
          <col class="w5" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="col">셀렉박스</th>
            <td scope="col">
              <v-select
                class="search-select-box"
                label="셀렉박스"
                dense
                solo
                :items="searchItem1"
                v-model="searchData.v1"
              ></v-select>
            </td>
            <th scope="col">텍스트박스</th>
            <td scope="col">
              <v-text-field
                class="search-text-box"
                label="텍스트박스"
                dense
                solo
                v-model="searchData.v2"
              ></v-text-field>
            </td>
            <th scope="col">라디오박스</th>
            <td scope="col">
              <v-radio-group
                style="width: 200px"
                class="search-radio-box"
                row
                v-model="searchData.v3"
              >
                <v-radio
                  v-for="(radio, i) in searchItem3"
                  :key="i"
                  :label="radio.label"
                  :value="radio.value"
                ></v-radio>
              </v-radio-group>
            </td>
            <th scope="col">날짜선택기</th>
            <td scope="col">
              <SearchDateBox
                v-model="searchData.v4"
                width="180"
              />
            </td>
            <th scope="col">검색5</th>
            <td scope="col">검색 영역5</td>
            <td scope="col" colspan="2">
              <div class="d-flex justify-end align-center">
                <v-btn
                  small outlined class="light-blue lighten-4"
                  @click="search"
                >조회</v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SearchDateBox from '@/components/common/search/SearchDateBox.vue'

export default {
  name: 'AppMenu1',
  components: {
    SearchDateBox
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
    searchData: {
      v1: '1',
      v2: '',
      v3: '',
      v4: ''
    },
    menu: false
  }),
  methods: {
    search () {
      window.log('searchData', this.searchData)
    }
  }
}
</script>
