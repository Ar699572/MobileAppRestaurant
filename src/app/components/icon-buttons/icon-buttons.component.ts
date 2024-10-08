import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss'],
})
export class IconButtonComponent {
  @Input() label: string='';
  @Input() icon: string='';
}