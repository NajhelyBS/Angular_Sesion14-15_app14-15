import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    HomeComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    EventComponent,
  ]
})
export class WebModule { }
