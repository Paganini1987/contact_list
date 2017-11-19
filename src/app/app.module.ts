import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './shared/contact.service';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserAddComponent } from './user-add/user-add.component';
import { SortComponent } from './sort/sort.component';
import { SortPipe } from './sort.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TagService } from './shared/tag.service';
import { DragulaModule } from 'ng2-dragula';
import { TagAddComponent } from './tag-add/tag-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    UserEditorComponent,
    UserAddComponent,
    SortComponent,
    SortPipe,
    TagAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    DragulaModule,
  ],
  providers: [ContactService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
