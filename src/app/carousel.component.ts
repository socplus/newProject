import { Component, OnInit, Input } from '@angular/core';
import  {CssProperty } from './Cssproperty';


@Component({
selector:'carousel',
templateUrl:'./carousel.component.html',
styleUrls:['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
count: number = 1;
numberOfImages: number;
pushTranslation:number=100;
translationXnum:string;

redCol:string;
propertyArray: CssProperty[] = [];
statePush:number;
activeIndex:number=2;
prevActiveIndex:number=0;
targetImg:string='';
ngOnInit(): void{

this._setInitial();

}

_setInitial(): void{
this.numberOfImages=this.AlternateImages.length;
this.translationXnum='50px';
this.redCol='red';
this.setPropertyToCarousel(0,0);

}

setPropertyToCarousel(param:number,factor:number){
if(param==0){
   for(var a=0;a<this.numberOfImages;a++){
    let propertyVar=new CssProperty(String(0+'px'),this.AlternateImages[a].image);
    this.propertyArray.push(propertyVar);
  }
   
   this.propertyArray[this.count].setBorder('1px solid black');
   this.targetImg=this.propertyArray[this.count].imageSrc;

}else{
 if(param==1){
       if(this.numberOfImages-this.count>1){
         for(var a=0;a<this.numberOfImages;a++){
             this.propertyArray[a].setLeft(String((parseInt(this.propertyArray[a].getLeft())-factor)+'px'));
       }
       }
       
       this.propertyArray[this.count-1].setBorder('');
       this.propertyArray[this.count].setBorder('1px solid black');
       this.targetImg=this.propertyArray[this.count].imageSrc;
 }
 else{

       if(this.numberOfImages-this.count>2){

       for(var a=0;a<this.numberOfImages;a++){
                   this.propertyArray[a].setLeft(String((parseInt(this.propertyArray[a].getLeft())+factor)+'px'));
               }
             }
       this.propertyArray[this.count+1].setBorder('');
       this.propertyArray[this.count].setBorder('1px solid black');
       this.targetImg=this.propertyArray[this.count].imageSrc;

      }
}

}
proceed() {
if(this.count<this.numberOfImages){
this.count++;
this.setPropertyToCarousel(1,70);
}    
}
back() {
if(this.count>1){
this.count--;
this.setPropertyToCarousel(2,70);
}  
}


AlternateImages=[
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06"
},
{
 "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07"
}
]

}