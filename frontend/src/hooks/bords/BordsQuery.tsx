import { useQuery } from '@tanstack/react-query'
import * as api from "../../api/bords/BordsApi"

const useBords = () => {
  return useQuery(['bords'], () => api.getBords())
}
export {
    useBords
}