import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Question} from '../question';
import {Router} from '@angular/router';
import {ManageQuestionsService} from '../manage-questions.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  checkedFlag:number = -1 ;
  over:boolean ;
  Questions:Question ;
  iterator:number ;
  selectedOption:string ;
  time:number ;
  
  constructor(public router:Router,public manageQuestionsService:ManageQuestionsService) { 
    this.iterator = 0 ;
      this.Questions = manageQuestionsService.QuestionsArray[this.iterator] ;
      this.over = false ;
      this.startTimer() ;
  }
  counter: { min: number, sec: number }
  startTimer() {
    this.counter = { min:15 , sec:0 } 
    let intervalId = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0){
         clearInterval(intervalId);
         this.router.navigateByUrl('/finish')
      }
    }, 1000)
  }
  goToNextQsn(){
    if(this.iterator<this.manageQuestionsService.QuestionsArray.length) { 
      if (this.selectedOption===undefined)window.alert("choose one of the option") ;
      else {
        this.manageQuestionsService.set(this.selectedOption,this.iterator) ;
        this.iterator++ ;
        this.Questions = this.manageQuestionsService.get(this.iterator) ;
        this.selectedOption=undefined ;
      }
    }
     this.checkedFlag = -1 ;
  }
  goToPrevQsn(){
    if(this.iterator>0){
      this.manageQuestionsService.set(this.selectedOption,this.iterator) ;
      this.iterator-- ;
      this.Questions = this.manageQuestionsService.get(this.iterator) ;
      this.selectedOption=undefined ;
    }
  }
  optionSelected(option:string){
    this.checkedFlag = parseInt(option) ;
    this.selectedOption = option ;
  }
  showAns(){
    this.manageQuestionsService.set(this.selectedOption,this.iterator) ;
    this.router.navigateByUrl("/finish") ;
  }
  ngOnInit(): void {
    
  }

}
