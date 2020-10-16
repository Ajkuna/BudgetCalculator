import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>();  // 'void' cos we're returning nothing (the parent component already knows what to delete)
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClicked() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
