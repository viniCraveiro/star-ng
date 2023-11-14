import { Component } from '@angular/core';
interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
    selector: 'app-medicamento',
    templateUrl: './medicamento.component.html',
    styleUrls: ['./medicamento.component.scss'],
})
export class MedicamentoComponent {
    items: any[] | undefined;

    selectedItem: any;
    suggestions: any[] = []; // Initialize as an empty array

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(
            (item) => event.query + '-' + item
        );
    }
}
