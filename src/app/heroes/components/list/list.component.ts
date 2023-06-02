import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['Thor', 'Hulk', 'Spiderman', 'Ironman', 'She Hulk'];
  heroRemoved?: string;

  removeLastHero(): void {
    this.heroRemoved = this.heroNames.pop()
  }
}
