import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UBS } from 'src/app/domain/ubs';
import { UbsService } from '../ubsService';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    unidadeBasicaSaude: UBS = { id: 0, nome: null, sigla: null, endereco: { bairro: null, cidade: null, estado: null, numero: null, pais: null, rua: null, codigoPostal: null, complemento: null } }

    constructor(
        private ubsService: UbsService,
        protected messageService: MessageService,
        protected router: Router,
        protected route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        if (this.route.params != null) {
            this.route.params.subscribe(params => {
                if (params['id'] === 'new') {
                    return;
                } else {
                    this.unidadeBasicaSaude.id = params['id'];
                    this.getById(this.unidadeBasicaSaude.id)
                }
            });
        }
    }

    getById(id: number) {
        this.ubsService.getUbsById(id).subscribe({
            next: value => {
                this.unidadeBasicaSaude = value;
            }, error: er => {
                this.router.navigate(['../ubs'])
                this.messageService.add({ severity: 'error', summary: 'Erro ao exibir o cadastro.' })
            }
        });
    }

    save() {
        if (this.unidadeBasicaSaude.nome != null
            && this.unidadeBasicaSaude.endereco.rua != null
            && this.unidadeBasicaSaude.endereco.bairro != null
            && this.unidadeBasicaSaude.endereco.numero != null) {
            this.ubsService.criaUbs(this.unidadeBasicaSaude).subscribe({
                next: value => {
                    this.messageService.add({ severity: 'success', summary: 'Criado com sucesso.' })
                    this.router.navigate(['../ubs'])
                },
                error: er => {
                    this.messageService.add({ severity: 'error', summary: 'Erro ao cadastrar.' })

                }
            });
        } else {
            this.messageService.add({ severity: 'info', summary: 'Preencha os campos obrigatórios.', detail: 'Nome, Rua, Bairro e Número são obrigatórios.' })
        }
    }

}
