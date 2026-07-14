import apiClient from './api'
import { Vehicle } from '../types'

export const vehicleService = {
  list: async () => {
    const response = await apiClient.get<{ vehicles: Vehicle[] }>('/vehicles')
    return response.data.vehicles
  },

  get: async (id: string) => {
    const response = await apiClient.get<Vehicle>(`/vehicles/${id}`)
    return response.data
  },

  create: async (data: Partial<Vehicle>) => {
    const response = await apiClient.post<Vehicle>('/vehicles', data)
    return response.data
  },
}
