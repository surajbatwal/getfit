import { Component, Inject } from '@angular/core';
import { DataService } from './data.service';
import { SlideshowComponent } from 'ng-simple-slideshow/src/app/modules/slideshow/slideshow.component';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;

  public appvisiter;

 
  
  constructor(private dataservice:DataService,public router: Router,public dialog: MatDialog) { }

  


  ngOnInit()
   {
      this.dialog.open(DialogComponent);
     
      //this.dialog.closeAll();
    
  }



}




