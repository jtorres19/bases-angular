import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h2>Contador: {{counter}}</h2>
    <button (click)="addCounter()">Sumar</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="minusCounter()">Restar</button>
  `,
})
export class CounterComponent {
  counter: number = 10;

  addCounter(value: number = 1): void {
    this.counter += value;
  }

  minusCounter(value: number = 1): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
