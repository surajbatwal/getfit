import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class HeartComponent implements OnInit {

   
 public visiter="";

  constructor(private dataservice:DataService) { }

  ngOnInit()
   {
    this.visiter=this.dataservice.Getvisitername();
  }
 


}
