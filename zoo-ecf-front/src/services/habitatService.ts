import { environment } from '@/environnement/environnement';
import { Habitat } from '@/models/habitat';
import axios from 'axios';




export class HabitatService {
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

    static async getHabitats(): Promise<Habitat[]> {
        let headers = HabitatService.GetHeader();
        try {

            return await axios.get(`${environment.apiUrl}/habitat`,
                {
                    headers: headers,
                }).then((response) => {
                    const result: Habitat[] = response.data;
                    for (let i = 0; i < result.length; i++) {
                        result[i].imagePrincipal = response.data[i].image_data;
                    }
                    if (result) {
                        return result
                    } else {
                        return [];
                    }

                });

        } catch (error) {
            console.error('Error while fetching habitats:', error);
            throw error;
        }
    }

    async getHabitat(id: number): Promise<Habitat> {
        try {
            const response = await axios.get(`${environment.apiUrl}/habitats/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error while fetching habitat:', error);
            throw error;
        }
    }
}
