import {Component, EventEmitter, Output} from '@angular/core';
import {v4 as uuid} from "uuid";


import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  addCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  character: Character = {id: uuid(), name: '', power: 0}

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.addCharacter.emit(this.character);
    this.character = {id: uuid(), name: '', power: 0}
  }
}
