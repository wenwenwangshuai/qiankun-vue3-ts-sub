<template>
  <div class="home">
    <img v-has="'vueLogo'" alt="Vue logo" src="../assets/logo.png" />
    {{mssg}}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Home',
  provide() {
    return {
      provideData: computed(() => this.provideData)
    };
  },
  setup() {
    const msg = ref('Welcome to Your Vue.js');
    const provideData = 'Welcome to Your Vue.js';
    let toogle = false;
    const state = reactive({
      title: msg
    });
    function clickHander() {
      toogle = !toogle;
      state.title = 'xxxxxxx';
    }
    return { msg, provideData, state, clickHander };
  },
  computed:{
    ...mapGetters(['userInfo'])
  },
  mounted() {
    console.log(this.userInfo)
  }
});
</script>
