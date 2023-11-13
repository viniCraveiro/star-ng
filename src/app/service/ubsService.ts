import { Injectable } from '@angular/core';
    
@Injectable()
export class UbsService {
    getubsData() {
        return [
            {
                id: 1000,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            },
            {
                id: 1001,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            },
            {
                id: 1002,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            },
            {
                id: 1003,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            },
            {
                id: 1004,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            },
            {
                id: 1005,
                nome: 'UBS Aclimacao',
                sigla: 'ACL',
                telefone: '(44) 3232-4444',
                endereco: 'Teste'
            }
        ];
    }

    getUbsMini() {
        return Promise.resolve(this.getubsData().slice(0, 5));
    }

    getUbs() {
        return Promise.resolve(this.getubsData());
    }
};