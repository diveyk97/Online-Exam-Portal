import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { FinishComponent } from './finish/finish.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ManageQuestionsService} from './manage-questions.service'
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    StartComponent,
    TestComponent,
    RegisterComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ManageQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
