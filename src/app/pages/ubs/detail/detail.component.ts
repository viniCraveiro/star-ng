import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UBS } from 'src/app/domain/ubs';
import { UbsService } from '../ubsService';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

    unidadeBasicaSaude: UBS = { id: 0, nome: null, sigla: null, endereco: { bairro: null, cidade: null, estado: null, numero: null, pais: null, rua: null, codigoPostal: null, complemento: null } }

    constructor(private ubsService: UbsService, protected messageService: MessageService, protected route: Router) {

    }

    save() {
        if (this.unidadeBasicaSaude.nome != null
            && this.unidadeBasicaSaude.endereco.rua != null
            && this.unidadeBasicaSaude.endereco.bairro != null
            && this.unidadeBasicaSaude.endereco.numero != null) {
            this.ubsService.criaUbs(this.unidadeBasicaSaude).subscribe({
                next: value => {
                    this.messageService.add({ severity: 'success', summary: 'Criado com sucesso.' })
                    this.route.navigate(['../'])
                },
                error: er => {
                    this.messageService.add({ severity: 'error', summary: 'Erro ao cadastrar.' })

                }
            });
        }
    }

}
