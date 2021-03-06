import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BookDataComponent } from './components/book-data/book-data.component'
import { UserBookListComponent } from './components/user-book-list/user-book-list.component';
import { FormSubmitComponent } from './components/form-submit/form-submit.component';


const routes: Routes = [
  { path: 'home', component: LoginPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'book', component: BookDataComponent },
  { path: 'user-account', component: UserBookListComponent },
  {path: 'form-submit', component: FormSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
