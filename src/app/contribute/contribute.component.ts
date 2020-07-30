import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor() { }
  topics=['Heart','Head','Ear','Legs','Stomach','Hands','Eyes','Face','Hair','Back'];
  ngOnInit(): void {
  }

}
