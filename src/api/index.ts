import axios from 'axios'

const URL = '/.netlify/functions/api'

export async function getQuote() {
  const response = await axios.get(URL)
  return await response.data
}
