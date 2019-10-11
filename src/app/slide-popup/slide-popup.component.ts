import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slide-popup',
  templateUrl: './slide-popup.component.html',
  styleUrls: ['./slide-popup.component.scss']
})
export class SlidePopupComponent {
  constructor() { }

  box = false;

  @Input() profile;

  @Output() savePopup = new EventEmitter();

  @Output() closePopup = new EventEmitter();

  popupBtnEvent() {
    this.box = !this.box;
  }

  onClosePopup() {
    this.box = false;
    this.closePopup.emit();
  }

  onSavePopup() {
    this.savePopup.emit();
  }
}
