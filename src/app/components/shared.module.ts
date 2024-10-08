import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './buttons/button.component';
import { IconButtonComponent } from './icon-buttons/icon-buttons.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, IconButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent, IconButtonComponent],
})
export class SharedModule {}