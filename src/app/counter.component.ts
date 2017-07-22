import { Component, OnInit, Input } from '@angular/core';


@Component({
selector:'counter',
templateUrl:'./counter.component.html',
styleUrls:['./counter.component.css']
})

export class CounterComponent {
    count: number = 1;
    increment() {
    this.count++;
    }
decrement() {
    if(this.count>0){
    this.count--;
    }

  }
}