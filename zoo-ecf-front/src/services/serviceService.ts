import { environment } from '@/environnement/environnement';
import { Service } from '@/models/service';
import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL



export class ServiceService {
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

    static async getServices(): Promise<Service[]> {
        let headers = ServiceService.GetHeader();
    
    try {

        return await axios.get(`${environment.apiUrl}/service`,
            {
                headers: headers,
            }).then((response) => {
                const result: Service[] = response.data;
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

    static async getService(id: number): Promise<Service> {
        let headers = ServiceService.GetHeader();

        try {
            const response = await axios.get(`${environment.apiUrl}/service/${id}`,{
                headers: headers,
            });
            const service:Service = response.data.service;

            return service;

        } catch (error) {
            console.error('Error while fetching Services:', error);
            throw error;
        }
    }
}
