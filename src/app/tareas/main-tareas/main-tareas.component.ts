import { Component, OnInit, Input } from '@angular/core';
import {TareasServiceService} from '../service/tareas-service.service'
import { Tarea } from '../interface/tarea.interface';

@Component({
  selector: 'app-main-tareas',
  templateUrl: './main-tareas.component.html',
  styleUrls: ['./main-tareas.component.css']
})
export class MainTareasComponent implements OnInit {

  @Input() nuevaTarea: Tarea={concepto:'', fecha:new Date()};


  get tareas():Tarea[]{
    return this.trService.tareas;
  }

  constructor(private trService:TareasServiceService) { }

  ngOnInit(): void {
  }


  agregar(){
 
    this.trService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = {
      concepto: "",
      fecha: new Date()
    }

  }
  }
