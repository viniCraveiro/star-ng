import { Component, OnInit } from '@angular/core';
import { UBS } from 'src/app/domain/ubs';
import { UbsService } from 'src/app/service/ubsService';


@Component({
  selector: 'app-ubs',
  templateUrl: './ubs.component.html',
  styleUrls: ['./ubs.component.scss']
})
export class UbsComponent implements OnInit{
  ubss!: UBS[];

  constructor(private ubsService: UbsService) {}

  ngOnInit() {
      this.ubsService.getUbsMini().then((data) => {
          this.ubss = data;
          console.log(this.ubss);
      });
  }
}