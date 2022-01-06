<template>
  <div class="glass">
    <div class="form-container">
      <h1>Create a billing</h1>
      <form @submit.prevent="onSubmit">
        <label>Title</label>
        <input v-model="payment.title" type="text" placeholder="Title" />

        <label>Cost</label>
        <input v-model="payment.cost" type="text" placeholder="Cost" />

        <label>Paid</label>
        <input v-model="payment.paid" type="text" placeholder="Paid" />

        <label>Date</label>
        <input v-model="payment.date" type="date" placeholder="When ?" />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      payment: this.createFreshPaymentObject(),
    }
  },
  methods: {
    createFreshPaymentObject() {
      return {
        id: '',
        title: '',
        cost: '',
        paid: '',
        date: '',
      }
    },
    onSubmit() {
      let temp = new Date(this.payment.date)
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
      temp =
        days[temp.getDay()] +
        ', ' +
        temp.getDate().toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        '-' +
        (temp.getMonth() + 1).toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        '-' +
        temp.getFullYear()
      this.payment.date = temp
      const payment = { ...this.payment }

      this.addPayment(payment)
        .then(() => {
          this.payment = this.createFreshPaymentObject()
          this.$router.push({
            name: 'Home',
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(['addPayment']),
  },
}
</script>
<style scoped>
button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}

button {
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
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  background: #000000;
  z-index: 1;
}

button:hover:after {
  width: 100%;
  left: 0;
}
button:after {
  border-radius: 5px;
  position: absolute;
  content: '';
  width: 0;
  height: 100%;
  top: 0;
  z-index: -1;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease;
  background-color: #3d348b;
  right: 0;
}

button:active {
  top: 2px;
}

input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}

input[type='text'] {
  padding: 0px 10px;
}

input:focus {
  border-color: #16c0b0;
  outline: 0;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  width: 40%;
}

.glass {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
label {
  color: black;
  font-weight: bold;
}
</style>
