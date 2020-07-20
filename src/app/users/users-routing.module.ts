import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent} from './create/create.component';
import { EditComponent } from './edit/edit.component'


const routes: Routes = [
  { path: 'users', redirectTo: 'users/index', pathMatch: 'full'},
  { path: 'users/index', component: IndexComponent },
  { path: 'users/:usersId/view', component: ViewComponent },
  { path: 'users/create', component: CreateComponent },
  { path: 'users/:usersId/edit', component: EditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
