<template>
  <div class="billing">
    <div id="description">{{ payment.title }}</div>
    <div id="amount">{{ payment.cost }}</div>
    <div id="date">{{ payment.date }}</div>
    <button id="delete" @click="confirmDelete(payment)">DELETE</button>
    <router-link
      :to="{ name: 'BillingDetails', params: { id: payment._id } }"
      id="details"
      >DETAILS</router-link
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    payment: {
      type: Object,
    },
  },
  methods: {
    confirmDelete(payment) {
      let a = confirm('Are you sure ?')
      if (a) this.deletePayment(payment)
    },

    deletePayment(payment) {
      this.deletePayment(payment)
    },
    ...mapActions(['deletePayment']),
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap');

.billing {
  display: grid;
  grid-template-columns: 2fr 2fr 3fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 5px 10px;
  background: rgb(240, 240, 240);
  box-shadow: 10px 10px 40px -6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #000000;
  font-size: 1.5rem;
  font-family: 'Inconsolata';
  margin-bottom: 10px;
  box-sizing: border-box;
}

#description {
  grid-area: 1 / 1 / 2 / 2;
}

#amount {
  grid-area: 1 / 2 / 2 / 3;
}

#date {
  grid-area: 1 / 3 / 2 / 4;
  text-align: right;
}

#delete {
  grid-area: 1 / 4 / 2 / 5;
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  font-family: 'Inconsolata';
  font-size: 1rem;
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
  line-height: 40px;
  color: #fff;
  font-size: 1rem;
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
  text-decoration: none;
}
#details:hover {
  box-shadow: 0 3px #57cc99;
  top: 1px;
}
#details:active {
  box-shadow: 0 0 #57cc99;
  top: 5px;
}
</style>
