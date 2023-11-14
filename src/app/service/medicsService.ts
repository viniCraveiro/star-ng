import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medics } from '../domain/medics';
    
@Injectable()
export class MedicsService {

    constructor(private http: HttpClient) { }

    getFuncionarios(): Observable<Medics[]> {
        return this.http.get<Medics[]>('http://localhost:8080/funcionario');
    }

    /*getMedicsData() {
        return [
            { id: 1, nome: 'Dr. Smith', cargo: 'Cardiologist', status: 'Disponivel', observacao: '06:00-14:00' },
            { id: 2, nome: 'Dr. Johnson', cargo: 'Orthopedic Surgeon', status: 'Outro', observacao: '06:00-14:00' },
            { id: 3, nome: 'Dr. Brown', cargo: 'Pediatrician', status: 'Indisponivel', observacao: '06:00-14:00' },
            { id: 4, nome: 'Dr. Wilson', cargo: 'Dermatologist', status: 'Outro', observacao: '06:00-14:00' },
            { id: 5, nome: 'Dr. Davis', cargo: 'Neurologist', status: 'Disponivel', observacao: '06:00-14:00' }
        ];
    }

    getMedicsMini() {
        return Promise.resolve(this.getMedicsData().slice(0, 5));
    }

    getMedicsSmall() {
        return Promise.resolve(this.getMedicsData().slice(0, 10));
    }

    getMedics() {
        return Promise.resolve(this.getMedicsData());
    }
    */
};



