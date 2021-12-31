<template>
  <div class="sub_container">
    <h3 class="sub-title1 my-3">테이블1</h3>
    <div class="board_area">
      <table class="board_table">
        <colgroup>
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
            <th scope="col"><span class="require" />테스트값1</th>
            <td scope="col">
              <SearchSelectBox />
            </td>
            <th scope="col">테스트값2</th>
            <td scope="col">
              <SearchTextBox />
            </td>
            <th scope="col"><span class="require" />테스트값3</th>
            <td scope="col">
              <SearchRadioBox />
            </td>
            <th scope="col">테스트값4</th>
            <td scope="col">
              <SearchDateBox />
            </td>
          </tr>
          <tr>
            <th scope="col">테스트값5</th>
            <td scope="col">
              <SearchComboBox />
            </td>
            <th scope="col"><span class="require" />테스트값6</th>
            <td scope="col" colspan="5">
              <SearchTextBox />
            </td>
          </tr>
          <tr>
            <th scope="col">테스트값7</th>
            <td scope="col" colspan="7">
              <div class="d-flex align-center">
                <v-checkbox
                  class="search-check-box"
                  label="체크박스1"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스2"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스3"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스4"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스5"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스6"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스7"
                />
                <v-checkbox
                  class="search-check-box"
                  label="체크박스8"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SearchSelectBox from '@/components/common/search/SearchSelectBox.vue'
import SearchTextBox from '@/components/common/search/SearchTextBox.vue'
import SearchRadioBox from '@/components/common/search/SearchRadioBox.vue'
import SearchDateBox from '@/components/common/search/SearchDateBox.vue'
import SearchComboBox from '@/components/common/search/SearchComboBox.vue'

export default {
  name: 'TemplateTable1',
  components: {
    SearchSelectBox,
    SearchTextBox,
    SearchRadioBox,
    SearchDateBox,
    SearchComboBox
  }
}
</script>
