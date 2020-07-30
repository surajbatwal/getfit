import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quickaccess',
  templateUrl: './quickaccess.component.html',
  styleUrls: ['./quickaccess.component.css']
})
export class QuickaccessComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  no;
  msg1;
  msg2;
  msg3;
  msg4;
  msg5;

  n=false;
  panelOpenState = false;
  no1;
  no2;
  no3;
  no4;
  no5;
  no6;

  public Heart=[];
  public Stomach=[];
  public Ear=[];
  public Eyes=[];
  public Legs=[];
  
  ngOnInit() 
  {
    console.log("call");

    if(1 == this.dataservice.value())
   {
    this.no1=true;

    this.dataservice.GetHeartDetails()
    .subscribe(data=>this.Heart=data);
    this.msg1="Heart";


    this.dataservice.GetStomachDetails()
    .subscribe(data=>this.Stomach=data);
    this.msg2="Stomach";

    this.dataservice.GetEarDetails()
    .subscribe(data=>this.Ear=data);
    this.msg3="Ear";

    this.dataservice.GetEyesDetails()
    .subscribe(data=>this.Eyes=data);
    this.msg4="Eyes";

    this.dataservice.GetLegsDetails()
    .subscribe(data=>this.Legs=data);
    this.msg5="Legs";


    this.no2=this.no3=this.no4=this.no5=this.no6=0;
   }

   if(2 == this.dataservice.value())
   {
    this.no2=true;

    this.no1=this.no3=this.no4=this.no5=this.no6=0;
   }

   if(3 == this.dataservice.value())
   {
    this.no3=true;

    this.no1=this.no2=this.no4=this.no5=this.no6=0;
   }

   if(4 == this.dataservice.value())
   {
    this.no4=true;

    this.no1=this.no2=this.no3=this.no5=this.no6=0;
   }

   if(5 == this.dataservice.value())
   {
    this.no5=true;

    this.no1=this.no2=this.no3=this.no4=this.no6=0;
   }

   if(6 == this.dataservice.value())
   {
    this.no6=true;

    this.no1=this.no2=this.no3=this.no4=this.no5=0;
   }

   

  }

  
  sample()
  {
    if(1 == this.dataservice.value())
   {
    this.no1=true;

    this.dataservice.GetHeartDetails()
    .subscribe(data=>this.Heart=data);
    this.msg1="Heart";


    this.dataservice.GetStomachDetails()
    .subscribe(data=>this.Stomach=data);
    this.msg2="Stomach";

    this.dataservice.GetEarDetails()
    .subscribe(data=>this.Ear=data);
    this.msg3="Ear";

    this.dataservice.GetEyesDetails()
    .subscribe(data=>this.Eyes=data);
    this.msg4="Eyes";

    this.dataservice.GetLegsDetails()
    .subscribe(data=>this.Legs=data);
    this.msg5="Legs";


    this.no2=this.no3=this.no4=this.no5=this.no6=0;
   }

   if(2 == this.dataservice.value())
   {
    this.no2=true;

    this.no1=this.no3=this.no4=this.no5=this.no6=0;
   }

   if(3 == this.dataservice.value())
   {
    this.no3=true;

    this.no1=this.no2=this.no4=this.no5=this.no6=0;
   }

   if(4 == this.dataservice.value())
   {
    this.no4=true;

    this.no1=this.no2=this.no3=this.no5=this.no6=0;
   }

   if(5 == this.dataservice.value())
   {
    this.no5=true;

    this.no1=this.no2=this.no3=this.no4=this.no6=0;
   }

   if(6 == this.dataservice.value())
   {
    this.no6=true;

    this.no1=this.no2=this.no3=this.no4=this.no5=0;
   }

  }
  


 
  





}
