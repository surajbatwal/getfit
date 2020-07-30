import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heart, Head, Ear, Legs, Stomach, Hands, Eyes, Face, Hair, Back } from './DataFetch';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  
    // Add dependency in service constructor for httpclient 
    constructor(private http:HttpClient) 
   {
  
    }
private _urlheart="/assets/Data/Data.json";
private _urlhead="/assets/Data/Head.json";
private _urlEar="/assets/Data/Ear.json";
private _urlLegs="/assets/Data/Legs.json";
private _urlStomach="/assets/Data/Stomach.json";
private _urlHands="/assets/Data/Hands.json";
private _urlEyes="/assets/Data/Eyes.json";
private _urlFace="/assets/Data/Face.json";
private _urlHair="/assets/Data/Hair.json";
private _urlBack="/assets/Data/Back.json";


public no=0;
public i;
public heart=[false,false,false,false,false,false];
public Visitername;


GetHeartDetails():Observable<Heart[]>
{
  
  return this.http.get<Heart[]>(this._urlheart);
}

GetHeadDetails():Observable<Head[]>
{
  return this.http.get<Head[]>(this._urlhead);
}

GetEarDetails():Observable<Ear[]>
{
  return this.http.get<Ear[]>(this._urlEar);
}

GetLegsDetails():Observable<Legs[]>
{
  return this.http.get<Legs[]>(this._urlLegs);
}

GetStomachDetails():Observable<Stomach[]>
{
  return this.http.get<Stomach[]>(this._urlStomach);
}

GetHandsDetails():Observable<Hands[]>
{
  return this.http.get<Hands[]>(this._urlHands);
}

GetEyesDetails():Observable<Eyes[]>
{
  return this.http.get<Eyes[]>(this._urlEyes);
}

GetFaceDetails():Observable<Face[]>
{
  return this.http.get<Face[]>(this._urlFace);
}

GetHairDetails():Observable<Hair[]>
{
  return this.http.get<Hair[]>(this._urlHair);
}

GetBackDetails():Observable<Back[]>
{
  return this.http.get<Back[]>(this._urlBack);
}

setvalue(value)
{

this.no=value;
console.log(this.no);
}

value()
{ 
  return this.no;
}

setvisitername(str)
{
  this.Visitername=str;
  console.log(this.Visitername);
}

Getvisitername()
{
  return this.Visitername;
}

}

