import { Component, OnInit, Input } from '@angular/core';
import{services} from '../models/services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() services!: services;
  constructor() { }
  ngOnInit(): void {
  }

}
