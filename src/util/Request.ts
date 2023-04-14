import dotenv from 'dotenv'

export const BASE_URL = `${process.env.API_URL}` || 'http://localhost:8080';