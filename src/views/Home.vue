<template>
  <div class="home">
    <Billing
      v-for="payment in payments"
      :key="payment._id"
      :payment="payment"
    />
  </div>
</template>

<script>
import Billing from '@/components/Billing.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Billing,
  },
  computed: {
    ...mapState(['payments']),
  },

  methods: {
    ...mapActions(['getPayments']),
  },
  created() {
    this.getPayments().catch((err) => {
      console.log(err)
    })
  },
}
</script>

<style>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 80%;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.712);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
