import { Component, OnInit } from '@angular/core';
import{services} from '../models/services.model'
@Component({
  selector: 'app-servicesfull',
  templateUrl: './servicesfull.component.html',
  styleUrls: ['./servicesfull.component.css']
})
export class ServicesfullComponent implements OnInit {
  srv_idx!: number
  services!: services

  constructor() { }

  ngOnInit(): void {
  }

}
