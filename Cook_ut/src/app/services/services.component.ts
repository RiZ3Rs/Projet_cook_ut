import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import{services} from '../models/services.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() services!: services;
  @Input() srv_index! : number;
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  readMore(){
    this.router.navigate(['/', 'products', this.srv_index]);
    }

}
