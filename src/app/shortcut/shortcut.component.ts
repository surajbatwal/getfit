import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

setvalue(no)
{
  this.dataservice.setvalue(no);
  
}



}
