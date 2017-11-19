import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserAddComponent } from './user-add/user-add.component';
import { TagAddComponent } from './tag-add/tag-add.component';

const routes: Routes = [
  {path: '', component: ContactListComponent },
  {path: 'users/edit/:id', component: UserEditorComponent },
  {path: 'add', component: UserAddComponent, outlet: 'modal' },
  {path: 'addTag', component: TagAddComponent, outlet: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
