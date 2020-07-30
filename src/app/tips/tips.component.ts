import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private fetchservice: DataService) { }

  public Heart=[];
  public Head=[];
  public Ear=[];
  public Legs=[];
  public Stomach=[];
  public Hands=[];
  public Eyes=[];
  public Face=[];
  public Hair=[];
  public Back=[];
  


  ngOnInit()
  {
   
  }

  
  topics=['Heart','Head','Ear','Legs','Stomach','Hands','Eyes','Face','Hair','Back'];
  i=1;
  
  
  N1=this.topics[0];
  N2=this.topics[1]; 
  N3=this.topics[2];
 
  tipnote="";
  tiptitle="";
 next()
 {
     if(this.i < 8)
     {
      
     this.N1=this.topics[this.i];
     this.N2=this.topics[this.i+1];
     this.N3=this.topics[this.i+2];
     this.i=this.i+1;
     }
     console.log(this.i);

 }

 prev()
 {
    if(this.i > 1)
    {
     this.N1=this.topics[this.i-2];
     this.N2=this.topics[this.i-1];
     this.N3=this.topics[this.i];
     this.i=this.i-1;
   }
   console.log(this.i); 
 }
 panelOpenState = false;



//First Button Function
//
//
//
//
tipfirstButton(name)
{
  if(name == "Heart")
  {
  this.fetchservice.GetHeartDetails()
    .subscribe(data=>this.Heart=data);
    
    this.Head=null;
    this.Ear=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Head")
  {
  this.fetchservice.GetHeadDetails()
    .subscribe(data=>this.Head=data);

    this.Heart=null;
    this.Ear=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

if(name == "Legs")
  {
  this.fetchservice.GetLegsDetails()
    .subscribe(data=>this.Legs=data);

    this.Heart=null;
    this.Ear=null;
    this.Head=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Ear")
  {
  this.fetchservice.GetEarDetails()
    .subscribe(data=>this.Ear=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Stomach")
  {
  this.fetchservice.GetStomachDetails()
    .subscribe(data=>this.Stomach=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Hands")
  {
  this.fetchservice.GetHandsDetails()
    .subscribe(data=>this.Hands=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Eyes")
  {
  this.fetchservice.GetEyesDetails()
    .subscribe(data=>this.Eyes=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Face")
  {
  this.fetchservice.GetFaceDetails()
    .subscribe(data=>this.Face=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Hair=null;
    this.Back=null;
  }

}


//Second Button Function
//
//
//
//
tipsecondButton(name)
{
  if(name == "Head")
  {
  this.fetchservice.GetHeadDetails()
    .subscribe(data=>this.Head=data);

    
    this.Heart=null;
    this.Ear=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }
  if(name == "Ear")
  {
  this.fetchservice.GetEarDetails()
    .subscribe(data=>this.Ear=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Legs")
  {
  this.fetchservice.GetLegsDetails()
    .subscribe(data=>this.Legs=data);

    this.Heart=null;
    this.Ear=null;
    this.Head=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
    
  }
  if(name == "Stomach")
  {
  this.fetchservice.GetStomachDetails()
    .subscribe(data=>this.Stomach=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Hands")
  {
  this.fetchservice.GetHandsDetails()
    .subscribe(data=>this.Hands=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Eyes")
  {
  this.fetchservice.GetEyesDetails()
    .subscribe(data=>this.Eyes=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Face")
  {
  this.fetchservice.GetFaceDetails()
    .subscribe(data=>this.Face=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Hair")
  {
  this.fetchservice.GetHairDetails()
    .subscribe(data=>this.Hair=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Back=null;
  }

}

//Third Button Function
//
//
//
//
tipthirdButton(name)
{
  if(name == "Ear")
  {
  this.fetchservice.GetEarDetails()
    .subscribe(data=>this.Ear=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Legs")
  {
  this.fetchservice.GetLegsDetails()
    .subscribe(data=>this.Legs=data);

    this.Heart=null;
    this.Ear=null;
    this.Head=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
    
  }
  if(name == "Stomach")
  {
  this.fetchservice.GetStomachDetails()
    .subscribe(data=>this.Stomach=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Hands")
  {
  this.fetchservice.GetHandsDetails()
    .subscribe(data=>this.Hands=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Eyes")
  {
  this.fetchservice.GetEyesDetails()
    .subscribe(data=>this.Eyes=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Face=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Face")
  {
  this.fetchservice.GetFaceDetails()
    .subscribe(data=>this.Face=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Hair=null;
    this.Back=null;
  }

  if(name == "Hair")
  {
  this.fetchservice.GetHairDetails()
    .subscribe(data=>this.Hair=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Back=null;
  }

  if(name == "Back")
  {
  this.fetchservice.GetBackDetails()
    .subscribe(data=>this.Back=data);

    this.Heart=null;
    this.Head=null;
    this.Legs=null;
    this.Ear=null;
    this.Stomach=null;
    this.Hands=null;
    this.Eyes=null;
    this.Face=null;
    this.Hair=null;
  }

}



}







