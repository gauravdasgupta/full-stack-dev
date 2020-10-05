import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsListComponent} from './blogs-list/blogs-list.component';
import { BlogReaderComponent } from './blog-reader/blog-reader.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


const routes: Routes = [
  { path: '', component: WorkInProgressComponent },
  { path: 'blog-reader-component', component: BlogReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
