import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BookDataComponent } from './components/book-data/book-data.component'
import { UserBookListComponent } from './components/user-book-list/user-book-list.component';


const routes: Routes = [
  { path: 'registration', component: LoginPageComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'book', component: BookDataComponent },
  { path: 'user-account', component: UserBookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
