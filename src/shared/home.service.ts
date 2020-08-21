import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
 
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  selectedPosts : Home;
  Posts: Home[];
  readonly baseUrl = 'http://localhost:3000/';

  constructor(private http:HttpClient) {}
  // getPosts(){
  //   return [
  //     {"id":"1","name":"sparsh","age":"20"},
  //     {"id":"2","name":"sparsh","age":"20"},
  //     {"id":"3","name":"sparsh","age":"20"},
  //     {"id":"4","name":"sparsh","age":"20"},
  //   ];
  // }
  getSinglePost(id){
    // const params = new HttpParams();
    // params.append("id",id);
    return this.http.get(this.baseUrl+"single-blog/"+id);
  }
  getPosts(){
    return this.http.get(this.baseUrl+"posts");
  }
  postBlogs(content){
    return this.http.post<any>(this.baseUrl+"posts",content)
  }
  uploadImage(content){
    return this.http.post<any>(this.baseUrl+"upload",content)
  }
  addCategory(content){
    return this.http.post<any>(this.baseUrl+"allcategory",content)
  }
  allCategory(){
    return this.http.get<any>(this.baseUrl+"allcategory")
  }
  categoryUploadImage(content){
    return this.http.post<any>(this.baseUrl+"categoryUpload",content)
  }
  recentPosts(){
    return this.http.get(this.baseUrl+"recent-posts")
  }
  categoryPosts(name){
    return this.http.get(this.baseUrl+"category",{params:{name:name}})
  }
  addPopularPosts(data){
    return this.http.post(this.baseUrl+"popular",data)
  }
  getPopularPosts(){
    return this.http.get(this.baseUrl+"popular")
  }
  getRelatedPosts(data){
    return this.http.post<any>(this.baseUrl+"relatedPost",data)
  }
}
