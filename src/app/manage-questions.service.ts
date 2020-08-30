import { Injectable } from '@angular/core';
import {Question} from '../app/question';
import {Answers} from '../app/answers';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ManageQuestionsService {
  QuestionsArray:Question[] = new Array() ;
  answers:Answers[] = new Array("2","4","2","4","4","3","3","3","4","2","4","2","1","4","4") ;
  userAnswers:Answers[] = new Array() ;
  score:number ;
  timer:number ;
  constructor(public router:Router) { 
    this.score = 0 ;
    this.timer = 900000 ;
    this.QuestionsArray.push(new Question(1,"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?"," Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)"," Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)"," Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)"," Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)")) ;   
    this.QuestionsArray.push(new Question(2,"Suppose we have a O(n) time algorithm that finds median of an unsorted array. Now consider a QuickSort implementation where we first find median using the above algorithm, then use median as pivot. What will be the worst case time complexity of this modified QuickSort.","O(n^2 Logn)","O(n^2)","O(n Logn Logn)","O(nLogn)")) ;
    this.QuestionsArray.push(new Question(3,"Given an unsorted array. The array has this property that every element in array is at most k distance from its position in sorted array where k is a positive integer smaller than size of array. Which sorting algorithm can be easily modified for sorting this array and what is the obtainable time complexity?","Insertion Sort with time complexity O(kn)","Heap Sort with time complexity O(nLogk)","Quick Sort with time complexity O(kLogk)","Merge Sort with time complexity O(kLogk)")) ;
    this.QuestionsArray.push(new Question(4,"Which of the following is not true about comparison based sorting algorithms?","The minimum possible time complexity of a comparison based sorting algorithm is O(nLogn) for a random input array","Any comparison based sorting algorithm can be made stable by using position as a criteria when two elements are compared","Counting Sort is not a comparison based sorting algortihm","Heap Sort is not a comparison based sorting algorithm.")) ;
    this.QuestionsArray.push(new Question(5,"The recurrence relation capturing the optimal time of the Tower of Hanoi problem with n discs is.","T(n) = 2T(n – 2) + 2","T(n) = 2T(n – 1) + n","T(n) = 2T(n/2) + 1","T(n) = 2T(n – 1) + 1")) ;
    this.QuestionsArray.push(new Question(6,"Which of the following is not O(n^2)?","(15^10) * n + 12099 ","sn^1.98","sn^3 / (sqrt(n))","(2^20) * n")) ;
    this.QuestionsArray.push(new Question(7,"What is the best time complexity of bubble sort?","N^2","NlogN","N","N(logN)^2")) ;
    this.QuestionsArray.push(new Question(8,"What is the worst case time complexity of insertion sort where position of the data to be inserted is calculated using binary search?","N","N^2","NlogN","N(logN)^2")) ;
    this.QuestionsArray.push(new Question(9,"In a modified merge sort, the input array is splitted at a position one-third of the length(N) of the array. Which of the following is the tightest upper bound on time complexity of this modified Merge Sort.","N(logN base 3)","N(logN base 2/3)","N(logN base 1/3)","N(logN base 3/2)"));
    this.QuestionsArray.push(new Question(10,"What does it mean when we say that an algorithm X is asymptotically more efficient than Y?","X will be a better choice for all inputs","X will be a better choice for all inputs except possibly small inputs","X will be a better choice for all inputs except possibly large inputs","Y will be a better choice for small inputs")) ;
    this.QuestionsArray.push(new Question(11,"What is the time complexity of Floyd–Warshall algorithm to calculate all pair shortest path in a graph with n vertices?","O(n^2logn)","Theta(n^2logn)","Theta(n^4)","Theta(n^3)")) ;
    this.QuestionsArray.push(new Question(12,"Consider the Quicksort algorithm. Suppose there is a procedure for finding a pivot element which splits the list into two sub-lists each of which contains at least one-fifth of the elements. Let T(n) be the number of comparisons required to sort n elements. Then","T(n) <= 2T(n/5) + n","T(n) <= T(n/5) + T(4n/5) + n","T(n) <= 2T(4n/5) + n ","T(n) <= 2T(n/2) + n")) ;
    this.QuestionsArray.push(new Question(13,"The minimum number of comparisons required to find the minimum and the maximum of 100 numbers is ______________.","148","147","146","140")) ;
    this.QuestionsArray.push(new Question(14,"What is the time complexity of Floyd–Warshall algorithm to calculate all pair shortest path in a graph with n vertices?","O(n^2logn)","Theta(n^2logn)","Theta(n^4)","Theta(n^3)")) ;    
    this.QuestionsArray.push(new Question(15,"The recurrence relation capturing the optimal time of the Tower of Hanoi problem with n discs is.","T(n) = 2T(n – 2) + 2","T(n) = 2T(n – 1) + n","T(n) = 2T(n/2) + 1","T(n) = 2T(n – 1) + 1")) ;
  }
  set(answer:string,iterator:number) {
    this.userAnswers[iterator] = answer ;
  }
  get(iterator){
    return this.QuestionsArray[iterator] ;
  }
  getscore(){
    for (let i=0;i<this.QuestionsArray.length;i++){
      if (this.answers[i]===this.userAnswers[i])this.score++ ;
    }
    return  this.score ;
  }
}
