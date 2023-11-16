import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UBS } from 'src/app/domain/ubs';
import { UbsService } from 'src/app/service/ubsService';

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
  searchForm: FormGroup;
  selectedItem: any;
  suggestions: any[] = [];
  originalUbss: UBS[] = [];  // Adicione esta linha

  // Adicione este controle separado
  searchTermControl: FormControl;

  cols!: Column[];

  constructor(private ubsService: UbsService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.searchTermControl = new FormControl('');

    this.searchForm = this.fb.group({
      searchTerm: this.searchTermControl
    });
  }

  ngOnInit() {
    this.loadUbsData();
    
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'sigla', header: 'Sigla' },
      { field: 'endereco', header: 'Endereco' },
    ];
  }

  loadUbsData() {
    this.ubsService.getUbs().subscribe((data: any) => {
      console.log('Dados originais retornados:', data);
      this.ubss = data.content;
      this.originalUbss = [...this.ubss];  // Adicione esta linha
    });
  }

  performSearch() {
    const nome = this.searchForm.value.searchTerm?.toLowerCase();
    console.log('Iniciando busca com nome:', nome);
  
    if (nome) {
      this.ubsService.getUbs(nome).subscribe(
        (ubsResponse: any) => {
          console.log('Resposta do serviço:', ubsResponse);
  
          if (ubsResponse && ubsResponse.length > 0) {
            // Atualizar os dados após a busca
            this.ubss = [...ubsResponse];
            console.log('Dados atualizados após a busca:', this.ubss);
          } else {
            console.error('Nenhuma UBS encontrada com o nome:', nome);
            // Limpar a tabela se nenhuma UBS for encontrada
            this.ubss = [];
          }
        },
        (error: any) => {
          console.error('Erro ao obter dados:', error);
          // Em caso de erro, limpar a tabela
          this.ubss = [];
        }
      );
    } else {
      // Se o termo de pesquisa estiver vazio, limpar a tabela
      this.ubss = [];
    }
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
