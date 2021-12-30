<template>
  <div class="sub_container">
    <h3 class="sub-title1 my-3">버튼 컴포넌트</h3>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h3 class="sub-title">기본 영역 버튼</h3>
          <div class="button-area">
            <v-btn
              small outlined class="blue darken-1 white--text"
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
        </v-col>
        <v-col cols="6">
          <h3 class="sub-title">검색 영역 버튼</h3>
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
                  <td scope="col" colspan="10">
                    <div class="button-area">
                      <v-btn
                        small outlined class="blue darken-1 white--text"
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
        </v-col>
        <v-col cols="6">
          <h3 class="sub-title">그리드 처리 영역 버튼</h3>
          <div class="grid_area">
            <div class="grid_button_area">
              <v-btn
                small elevation="0" class="white"
              >테스트1</v-btn>
              <v-btn
                small outlined class="blue darken-1 white--text"
              >테스트2</v-btn>
              <v-btn
                small outlined class="green darken-1 white--text"
              >테스트3</v-btn>
              <v-btn
                small elevation="0" class="gery lighten-4"
              >테스트4</v-btn>
              <v-btn
                small class="px-1 elevation-0" color="red darken-1 white--text"
              >
                <v-icon>mdi-alert</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <h3 class="sub-title">기타 사이즈 버튼</h3>
          <div class="button-area">
            <v-btn
              outlined class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              outlined class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              elevation="0" class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              class="px-1 elevation-0" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
          <div class="button-area my-2">
            <v-btn
              x-small outlined class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              x-small outlined class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              x-small elevation="0" class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              x-small class="px-1 elevation-0" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
          <div class="button-area">
            <v-btn
              x-large outlined class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              x-large outlined class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              x-large elevation="0" class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              x-large class="px-1 elevation-0" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6">
          <h3 class="sub-title">테두리, 배경 버튼</h3>
          <div class="button-area">
            <v-btn
              small plain class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              small plain class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              small plain class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              small plain class="px-1" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
          <div class="button-area my-2">
            <v-btn
              small text class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              small text class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              small text class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              small text class="px-1" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
          <div class="button-area my-2">
            <v-btn
              small tile class="blue darken-1 white--text"
            >테스트1</v-btn>
            <v-btn
              small tile class="green darken-1 white--text"
            >테스트2</v-btn>
            <v-btn
              small tile class="gery lighten-4"
            >테스트3</v-btn>
            <v-btn
              small tile class="px-1" color="red darken-1 white--text"
            >
              <v-icon>mdi-alert</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'TemplateComponent1',
  data: () => ({})
}
</script>
