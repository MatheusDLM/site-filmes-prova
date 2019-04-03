import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],

  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent,
    CardComponent
  ]
})
export class GeralModule { }
