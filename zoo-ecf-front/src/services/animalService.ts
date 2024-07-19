import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export interface animals {
    id: number;
    name: string;
    location: string;
    capacity: number;
}

export class animalanimal {
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

    async getAnimals(): Promise<animals[]> {
        let headers = this.GetHeader();
        try {
            const response = await axios.get(`${API_URL}/animals`,
                {
                    headers: headers,
                });
            return response.data;
        } catch (error) {
            console.error('Error while fetching animals:', error);
            throw error;
        }
    }

    async getAnimal(id: number): Promise<animals> {
        try {
            const response = await axios.get(`${API_URL}/animals/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while fetching animals:', error);
            throw error;
        }
    }
}
