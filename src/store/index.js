import { createStore } from 'vuex'
import PaymentService from '@/services/PaymentService.js'
export default createStore({
  state: {
    payments: [],
    currentPayment: {},
  },
  mutations: {
    ADD_PAYMENT(state, payment) {
      state.payments.push(payment)
    },
    GET_PAYMENTS(state, payments) {
      state.payments = payments
    },
    GET_PAYMENT(state, payment) {
      state.currentPayment = payment
    },
    DELETE_PAYMENT(state, pay) {
      let index = state.payments.indexOf(pay)
      state.currentPayment = {}
      state.payments.splice(index, 1)
    },
  },
  actions: {
    addPayment({ commit }, payment) {
      payment.cost = payment.cost + ' Dinars'
      payment.paid = payment.paid + ' Dinars'
      PaymentService.postPayment(payment)
        .then((res) => {
          payment._id = res.data.id
          commit('ADD_PAYMENT', payment)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getPayments({ commit }) {
      PaymentService.getPayments()
        .then((response) => {
          commit('GET_PAYMENTS', response.data)
        })
        .catch((err) => console.log(err))
    },
    getPayment({ commit }, id) {
      PaymentService.getPayment(id)
        .then((response) => {
          commit('GET_PAYMENT', response.data)
        })
        .catch((err) => console.log(err))
    },
    deletePayment({ commit }, payment) {
      PaymentService.deletePayment(payment)
        .then(() => {
          commit('DELETE_PAYMENT', payment)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {},
})
