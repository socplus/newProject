import { Component, OnInit }          from '@angular/core';
import { AppServices }  from './app.service';


@Component({
selector: 'my-app',
templateUrl: `./app.component.html`,
styleUrls: ['./app.component.css']
})

export class AppComponent   implements OnInit {


constructor(private appService: AppServices) { }


productInfo = <any>[];
_obj = <any>[];
shortDescrpPromotion = <any>[];
features = <any>[];
review = <any>{};
totalReviews='';
showAddToCart:boolean=false;
showPickUp:boolean=false;
price:string='';
priceQualifier:string='';
index:number=0;



ngOnInit(): void {

  this.appService.getProductData().subscribe( (result) => {

  this.productInfo=result.CatalogEntryView[0];
  this.gotoDetail(this.productInfo.Promotions);
  this.populateReview(this.productInfo.CustomerReview);
  this.setButtonVisibility(this.productInfo.purchasingChannelCode,this.productInfo.inventoryStatus);
  this.price=this.productInfo.Offers[0].OfferPrice[0].formattedPriceValue;
  this.priceQualifier=this.productInfo.Offers[0].OfferPrice[0].priceQualifier;

this.features= this.productInfo.ItemDescription["0"].features; 
});

}
setButtonVisibility(channelCode:any, inventoryStatus:any) :any{
    if((channelCode=="0"|| channelCode=="1") && inventoryStatus=="Online"){
    this.showAddToCart=true;
    }
    if((channelCode=="0" || channelCode=="2" ) && inventoryStatus=="instores"){
    this.showPickUp=true;
}


}

getImgSrc(images: any): any{
    let imgSrc;

    let temp=images[this.index];
    imgSrc=temp.PrimaryImage[this.index].image;

    return imgSrc;
}

populateReview(reviewObj: any[]) : void{
    let x=0;
    let date=new Date(reviewObj[this.index].Con[this.index].datePosted);
    let condate= date.toDateString();

    this.review.con={
    review:reviewObj[this.index].Con[this.index].review,
    title:reviewObj[this.index].Con[this.index].title,
    screenName:reviewObj[this.index].Con[this.index].screenName,
    date:condate
    }

    date=new Date(reviewObj[this.index].Pro[this.index].datePosted);
    let prodate= date.toDateString();

    this.review.pro={
    review:reviewObj[this.index].Pro[this.index].review,
    title:reviewObj[this.index].Pro[this.index].title,
    screenName:reviewObj[this.index].Pro[this.index].screenName,
    date:prodate
    };
    this.totalReviews=reviewObj[this.index].totalReviews;

}
gotoDetail(Promotions: any[]): void {
    var temp=[];
    var interMediate = <any>{};
    var x=0;
    for (var i = 0; i < Promotions.length; i++){    
    interMediate=Promotions[i];     
    if(interMediate.Description){
    temp.push(interMediate.Description[x].shortDescription);
    }
    }
    this.shortDescrpPromotion=temp;
}

}
