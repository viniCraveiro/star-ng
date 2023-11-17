import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UBS } from 'src/app/domain/ubs';
import { UbsService } from './ubsService';
import { MessageService } from 'primeng/api';

interface Column {
    field: string;
    header: string;
}

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'app-ubs',
    templateUrl: './ubs.component.html',
    styleUrls: ['./ubs.component.scss']
})
export class UbsComponent implements OnInit {

    ubss: UBS[] = [];
    unidadeBasicaSaude: UBS = { id: 0, nome: '', sigla: '', endereco: { bairro: '', cidade: '', estado: '', numero: '', pais: '', rua: '', codigoPostal: '', complemento: '' } }
    searchForm!: FormGroup;
    selectedItem: any;
    suggestions: any[] = [];
    originalUbss: UBS[] = [];  // Adicione esta linha

    // Adicione este controle separado
    searchTermControl!: FormControl;

    cols!: Column[];

    constructor(
        private ubsService: UbsService,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder,
        private messageService: MessageService
    ) {

    }

    ngOnInit() {
        this.searchTermControl = new FormControl('');

        this.searchForm = this.fb.group({
            searchTerm: this.searchTermControl
        });

        this.loadUbsData();

        this.cols = [
            { field: 'nome', header: 'Nome' },
            { field: 'sigla', header: 'Sigla' },
            { field: 'endereco', header: 'Endereco' },
        ];
    }

    loadUbsData() {
        this.ubsService.listAll().subscribe({
            next: (data: any) => {
                console.log('Dados originais retornados:', data);
                this.ubss = data.content;
                // this.originalUbss = [...this.ubss];  // Adicione esta linha
            }
        });
    }

    performSearch() {
        const nome = this.searchForm.value.searchTerm?.toLowerCase();
        console.log('Iniciando busca com nome:', nome);

        this.ubsService.getUbs(nome).subscribe({
            next: (ubsResponse: any) => {
                this.ubss = ubsResponse;
            },
            error: er => {
                this.ubss = [];
                // this.messageService.add({ severity: 'error', summary: 'Nenhum resultado', detail: 'Nenhuma UBS encontrada com o nome: ' + nome })
            }
        });
    }

    removeUbs(index: UBS) {
        this.ubsService.removeUbs(index.id).subscribe({
            next: value => {
                console.log('Removido com sucesso', value);
                this.loadUbsData();
            }
        });
    }

    search(event: AutoCompleteCompleteEvent) {
        if (event.query.trim() === '') {
            this.ubss = [...this.originalUbss]; // restaurar os resultados originais
        } else {
            this.suggestions = this.ubss
                .filter(ubs => ubs.nome && ubs.nome.toLowerCase().includes(event.query.toLowerCase()))
                .map(ubs => ubs.nome);
        }
    }


    getEndereco(endereco: any): string {
        if (endereco && endereco.rua && endereco.numero && endereco.bairro) {
            return `${endereco.rua} Nº ${endereco.numero} ${endereco.bairro}`;
        } else {
            return 'Endereço indisponível';
        }
    }
}
