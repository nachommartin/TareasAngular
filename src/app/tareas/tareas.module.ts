import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTareasComponent } from './main-tareas/main-tareas.component';
import { FormsModule } from '@angular/forms';
import {TareasServiceService} from './service/tareas-service.service'



@NgModule({
  declarations: [
    MainTareasComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[
    MainTareasComponent
  ],
  providers:[
    TareasServiceService
  ]
})
export class TareasModule { }
