import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { UBS } from '../../domain/ubs';

@Injectable({
    providedIn: 'root'
})
export class UbsService {

    constructor(private http: HttpClient) { }

    urlapi = 'http://localhost:8080';

    isSearching = false;

    listAll() {
        return this.http.get<UBS[]>(`${this.urlapi}/ubs`);
    }

    getUbs(nome: string): Observable<UBS[]> {
        return this.http.get<UBS[]>(`${this.urlapi}/ubs/search`, { params: new HttpParams().set('nome', nome) });
    }

    removeUbs(id: number): Observable<any> {
        return this.http.delete(`${this.urlapi}/ubs/${id}`);
    }

    criaUbs(ubs: UBS): Observable<UBS> {
        return this.http.post<UBS>(`${this.urlapi}/ubs`, ubs);
    }

    getUbsById(id: number) {
        return this.http.get<UBS>(`${this.urlapi}/ubs/${id}`);
    }
}

/*
getUbsData(): UBS[] {
    return [
        {
            id: 1000,
            nome: 'UBS Aclimacao 1',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 1'
        },
        {
            id: 1001,
            nome: 'UBS Aclimacao 2',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 2'
        },
        {
            id: 1002,
            nome: 'UBS Aclimacao 3',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 3'
        },
        {
            id: 1003,
            nome: 'UBS Aclimacao 4',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 4'
        },
        {
            id: 1004,
            nome: 'UBS Aclimacao 5',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 5'
        },
        {
            id: 1005,
            nome: 'UBS Aclimacao 6',
            sigla: 'ACL',
            telefone: '(44) 3232-4444',
            endereco: 'Teste 6'
        }
    ];
}

getUbsMini(): Promise<UBS[]> {
    return Promise.resolve(this.getUbsData().slice(0, 5));
}*/
