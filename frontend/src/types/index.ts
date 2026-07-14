export interface Vehicle {
  id: string
  name: string
  mass: number
  wheels: number
  created_at: string
  updated_at: string
}

export interface Simulation {
  id: string
  vehicle_id: string
  name: string
  duration: number
  frequency: number
  status: string
  created_at: string
  updated_at: string
}
