<template>
  <div class="billing">
    <Row title="Product" :value="currentPayment.title" class="title" />
    <Row title="Cost" :value="currentPayment.cost" class="cost" />
    <Row title="Paid" :value="currentPayment.paid" class="paid" />
    <Row title="Date" :value="currentPayment.date" class="date" />
    <button id="delete" @click="confirmDelete(currentPayment)">DELETE</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from '@/components/Row.vue'
export default {
  components: {
    Row,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    confirmDelete(payment) {
      let a = confirm('Are you sure ?')
      if (a) this.deletePayment(payment)
    },
    deletePayment(payment) {
      console.log(payment)
      let b = true
      if (b === false) this.deletePayment(payment)
    },
    ...mapActions(['deletePayment', 'getPayment']),
  },
  computed: {
    ...mapState(['currentPayment']),
  },
  created() {
    this.getPayment(this.id)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap');

.billing {
  width: 40%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 2fr) 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 10px;

  color: #000000;
  font-size: 1.8rem;
  font-family: Inconsolata;

  /* box-sizing: border-box; */
}

.title {
  grid-area: 1 / 1 / 2 / 2;
}
.cost {
  grid-area: 2 / 1 / 3 / 2;
}
.paid {
  grid-area: 3 / 1 / 4 / 2;
}
.date {
  grid-area: 4 / 1 / 5 / 2;
}

#delete {
  grid-area: 5 / 1 / 6 / 2;
  min-width: 130px;
  height: 40px;
  color: #fff;
  justify-self: center;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #ef233c;
  box-shadow: 0 5px #d90429;
}
#delete:hover {
  box-shadow: 0 3px #d90429;
  top: 1px;
}
#delete:active {
  box-shadow: 0 0 #d90429;
  top: 5px;
}
#details {
  grid-area: 1 / 5 / 2 / 6;
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #0fac34;
  box-shadow: 0 5px #078324;
}
#details:hover {
  box-shadow: 0 3px #57cc99;
  top: 1px;
}
#details:active {
  box-shadow: 0 0 #57cc99;
  top: 5px;
}

/* #nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #176ceb;
} */
</style>
