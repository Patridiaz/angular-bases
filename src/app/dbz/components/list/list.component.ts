import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();



  onDeleteCharacter(i: number):void {
    this.onDelete.emit( i );
  }


}
