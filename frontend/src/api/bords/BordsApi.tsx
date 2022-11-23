import axios from 'axios'
import { Bords } from 'type/Bords'

const getBords = async () => {
  const { data } = await axios.get<Bords[]>('http://localhost:80/api/v1/bords')
  return data
}

export { getBords }
