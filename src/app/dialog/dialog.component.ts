import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 
  constructor(private http:HttpClient,private dataservice:DataService)  {}
  ngOnInit(): void {
   
  }
  name="suraj";

setname()
{  
this.name=  (<HTMLInputElement>document.getElementById("name")).value
this.dataservice.setvisitername(this.name);
}


}
  
