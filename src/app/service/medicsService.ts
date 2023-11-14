import { Injectable } from '@angular/core';
    
@Injectable()
export class MedicsService {
    getProductsData() {
        return [
            { id: 1, nome: 'Dr. Smith', cargo: 'Cardiologist', status: 'Disponivel', horario: '06:00-14:00' },
            { id: 2, nome: 'Dr. Johnson', cargo: 'Orthopedic Surgeon', status: 'Outro', horario: '06:00-14:00' },
            { id: 3, nome: 'Dr. Brown', cargo: 'Pediatrician', status: 'Indisponivel', horario: '06:00-14:00' },
            { id: 4, nome: 'Dr. Wilson', cargo: 'Dermatologist', status: 'Outro', horario: '06:00-14:00' },
            { id: 5, nome: 'Dr. Davis', cargo: 'Neurologist', status: 'Disponivel', horario: '06:00-14:00' }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};

export interface Medics {
    id?: number;
    nome?: string;
    cargo?: string;
    status?: string;
    horario?: number;
}

