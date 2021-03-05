import api from '../api'
import { AxiosResponse } from 'axios'

interface RequestType {
  page: number
  perPage: number
  preLoad?: number | 1
}

export async function getListBooks({
  page,
  perPage,
  preLoad
}: RequestType): Promise<AxiosResponse> {
  return new Promise(resolve => {
    api
      .get(
        `/api/v1/books?page=${Math.ceil(page / preLoad)}&amount=${
          perPage * (preLoad || 1)
        }`
      )
      .then(function (response) {
        resolve(response)
      })
      .catch(function ({ response }) {
        resolve(response)
      })
  })
}
