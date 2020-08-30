import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinishComponent } from './finish/finish.component';
// import { start } from 'repl';
// import { from } from 'rxjs';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"login", component: LogInComponent},
  {path:"register",component: RegisterComponent},
  {path:"start" ,component:StartComponent},
  {path:"test" ,component:TestComponent},
  {path:"finish",component:FinishComponent},
  {path:"", component: LogInComponent},
  {path:"**",component:FinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
