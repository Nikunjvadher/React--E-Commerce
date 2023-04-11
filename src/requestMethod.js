import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQ2YzRhYTg0NDEyMTk5MDVhZDJkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc3NDg5NiwiZXhwIjoxNjgxMDM0MDk2fQ.vC-BVi_jWWMb-kd-1rbdzkZd0bYCC78ONcKdDuAyHKU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})