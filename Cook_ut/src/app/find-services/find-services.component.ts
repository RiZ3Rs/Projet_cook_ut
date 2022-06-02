import { Component, OnInit } from '@angular/core';
import{ services } from '../models/services.model'

@Component({
  selector: 'app-find-services',
  templateUrl: './find-services.component.html',
  styleUrls: ['./find-services.component.css']
})
export class FindServicesComponent implements OnInit {
  FindServicesArray: services[] = [];
  constructor() { }

  ngOnInit(): void {
    this.FindServicesArray.push(new services("Cuisine repas 1","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 2","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 3","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 4","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 5","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 6","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 7","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 8","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 9","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Cuisine repas 10","Je cuisine chez vous les repas que vous voulez et que vous souhaitez selon vos envies. Il suffit de me donner les plats afin que je puisse mettre en place les recettes.","Soulyvan","29/05/2022","../../assets/img/fond1.jpg","Belfort"))
    this.FindServicesArray.push(new services("Je vends mes fesses","Globalement tout est dans le titre","Carlo Italiano","30/05/2022","../../assets/img/fond1.jpg","Belfort"))

  }

}
