import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export interface Services {
    id: number;
    name: string;
    location: string;
    capacity: number;
}

export class serviceservice {
    constructor() {

    }
    GetHeader() {
        const token = JSON.parse(localStorage.getItem('token') ?? '');
        const headers: any = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        return headers;
    }

    async getservices(): Promise<Services[]> {
        let headers = this.GetHeader();
        try {
            const response = await axios.get(`${API_URL}/services`,
                {
                    headers: headers,
                });
            return response.data;
        } catch (error) {
            console.error('Error while fetching services:', error);
            throw error;
        }
    }

    async getServices(id: number): Promise<Services> {
        try {
            const response = await axios.get(`${API_URL}/services/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while fetching Services:', error);
            throw error;
        }
    }
}
