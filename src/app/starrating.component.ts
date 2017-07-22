import { Component, OnInit, Input } from '@angular/core';
import { AppServices }  from './app.service';



@Component({
selector:'star-rating',
templateUrl:'./rating.component.html',
styleUrls:['./rating.component.css']
})

export class StarRatingComponent implements OnInit {
@Input() name: string;
inputRating: number;
arrayForRating= <any>[];
arrayForNoRating= <any>[];
constructor(private appService: AppServices) {}
resultObj=<any>{};
i:number; 
arrayForNonRating:number;
ngOnInit() :void {

this.getStarRating();

}
fetchConFromJson(resultObj:any) :void{
		this.inputRating=resultObj.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating;      
		for(var i=0;i<this.inputRating;i++){
		this.arrayForRating.push(i);

		} 
		this.arrayForNonRating=5-this.inputRating;
		for(var i=0;i<this.arrayForNonRating;i++){
		this.arrayForNoRating.push(i);

		} 

}
fetchProFromJson(resultObj:any) :void{
		this.inputRating=resultObj.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating;   
		for(var i=0;i<this.inputRating;i++){
		this.arrayForRating.push(i);

		} 
		this.arrayForNonRating=5-this.inputRating;
		for(var i=0;i<this.arrayForNonRating;i++){
		this.arrayForNoRating.push(i);


} 

}
fetchOverall(resultObj:any):void{
		this.inputRating=0;
		this.inputRating=resultObj.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating;   
		for(var i=0;i<this.inputRating;i++){
		this.arrayForRating.push(i);
		} 
		this.arrayForNonRating=5-this.inputRating;
		for(var i=0;i<this.arrayForNonRating;i++){
		this.arrayForNoRating.push(i);

		} 

}
getStarRating(){
this.appService.getProductData().subscribe( (result) => { 

if(this.name=="overall"){
	this.fetchOverall(result);
}else{
		if(this.name=="pro"){
		this.fetchProFromJson(result);
		}else{
		this.fetchConFromJson(result);
		}
}



});
}

}