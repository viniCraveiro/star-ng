import { Component, OnInit  } from '@angular/core';
import { Medics } from 'src/app/domain/medics'; 
import { MedicsService } from 'src/app/service/medicsService';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.scss']
})

export class MedicsComponent implements OnInit{
    medics: Medics[] = [];


  cols!: Column[];

  constructor(private medicsService: MedicsService) {}

  ngOnInit() {
    this.medicsService.getFuncionarios().subscribe((data: any) => {
        console.log(data); 
        this.medics = data.content; 
    });

      this.cols = [
          { field: 'nome', header: 'Nome' },
          { field: 'cargo', header: 'Cargo' },
          { field: 'status', header: 'Status' },
          { field: 'observacao', header: 'Observacao' }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'Disponivel':
              return 'success';
          case 'Indisponivel':
              return 'warning';
          case 'Outro':
              return 'danger';
          default:
            return 'info';
      }
  }
}
