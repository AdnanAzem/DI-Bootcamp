// src/api/api.ts
import axios, { AxiosRequestConfig } from 'axios';

// نوع عام لدالة جلب البيانات مع دعم headers و params
export async function fetchData<T>(config: AxiosRequestConfig): Promise<T> {
  const response = await axios.request<T>(config);
  return response.data;
}
