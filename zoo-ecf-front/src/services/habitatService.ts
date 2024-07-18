import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export interface Habitat {
    id: number;
    name: string;
    location: string;
    capacity: number;
}

export class HabitatService {
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

    async getHabitats(): Promise<Habitat[]> {
        let headers = this.GetHeader();
        try {
            const response = await axios.get(`${API_URL}/habitats`,
                {
                    headers: headers,
                });
            return response.data;
        } catch (error) {
            console.error('Error while fetching habitats:', error);
            throw error;
        }
    }

    async getHabitat(id: number): Promise<Habitat> {
        try {
            const response = await axios.get(`${API_URL}/habitats/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while fetching habitat:', error);
            throw error;
        }
    }
}
