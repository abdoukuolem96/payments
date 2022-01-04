import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPayments() {
    return apiClient.get('/payments')
  },
  getPayment(id) {
    return apiClient.get('/payments/' + id)
  },
  postPayment(payment) {
    return apiClient.post('/payments', payment)
  },
  deletePayment(payment) {
    return apiClient.delete('/payments/' + payment.id)
  },
}
