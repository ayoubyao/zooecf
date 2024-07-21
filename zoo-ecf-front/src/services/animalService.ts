import { Animal } from '@/models/animal';
import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL


export class AnimalService {
    constructor() {

    }
    static GetHeader() {
        const token = JSON.parse(localStorage.getItem('token') ?? '');
        const headers: any = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        return headers;
    }

    async getAnimals(): Promise<Animal[]> {
        let headers = AnimalService.GetHeader();
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

    async getAnimal(id: number): Promise<Animal> {
        try {
            const response = await axios.get(`${API_URL}/animals/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while fetching animals:', error);
            throw error;
        }
    }

    static async getAnimalByHabitat(idhabitat:number) {
        let headers = AnimalService.GetHeader();

        try {
            const response = await axios.get(`${API_URL}/animals/habitat/${idhabitat}`);

            const animaux: Animal[] = response.data.animaux
            return animaux;
        } catch (error) {
            console.error('Error while fetching animals:', error);
            throw error;
        }
    }
}
