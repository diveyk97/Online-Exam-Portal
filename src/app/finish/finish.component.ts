import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Answers} from '../answers'
import {ManageQuestionsService} from '../manage-questions.service'
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  score:number ;
  
  constructor(public router:Router,public manageQuestionsService:ManageQuestionsService) { 
    this.score = manageQuestionsService.getscore() ;
  }

  ngOnInit(): void {
  
  }

}
