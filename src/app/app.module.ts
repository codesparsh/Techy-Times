import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HomeService } from 'src/shared/home.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminSinglePostComponent } from './admin-single-post/admin-single-post.component';
import { RestrictStrPipe } from './restrict-str.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    CategoryComponent,
    SingleBlogComponent,
    AdminDashboardComponent,
    AdminAddPostComponent,
    AdminPostsComponent,
    AdminCategoryComponent,
    AdminAddCategoryComponent,
    AdminSinglePostComponent,
    RestrictStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
