import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminSinglePostComponent } from './admin-single-post/admin-single-post.component';

const routes: Routes = [
  // {path: 'admin/add-category',component:AdminAddCategoryComponent},
  {path: 'admin/categories',component:AdminCategoryComponent},
  {path: 'admin/posts',component:AdminPostsComponent},
  {path: 'admin/posts/:id',component:AdminSinglePostComponent},
  {path: 'admin/add-post',component:AdminAddPostComponent},
  {path:'single-blog/:id',component:SingleBlogComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'category',component:CategoryComponent},
  {path:'**',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
