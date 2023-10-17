import axios, { AxiosError, type Method } from 'axios'
import type { AxiosRequestConfig } from 'axios'

export const fetcher = async <T = any>(
  endpoint: string,
  params: any,
  method: Method = 'post',
  optHeader: AxiosRequestConfig['headers'] = {}
): Promise<T> => {
  const headers = {
    'Content-Type': 'application/json',
    ...optHeader
  }

  const isGet = ['GET', 'get'].includes(method)

  const requestConfig: AxiosRequestConfig = {
    url: endpoint,
    method,
    headers,
    ...(isGet ? { params } : { data: params })
  }

  try {
    const response = await axios(requestConfig)

    if (response.data.error) return Promise.reject(response.data)

    return response.data
  } catch (error) {
    console.error({ error })
    if (error instanceof AxiosError) {
      if (error.response?.data) return Promise.reject(error.response.data)
    }

    throw error
  }
}
