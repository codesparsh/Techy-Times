import { Component, OnInit } from '@angular/core';
import { NgModel, FormBuilder } from '@angular/forms';
import * as tinymce from '../../assets/tinymce/tinymce.min.js';
import { HomeService } from 'src/shared/home.service.js';
@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {
 public title = "";
 public author = "";
 public cover = "";
 public tags=[];
 public singleTag = "";
 public counter = 1;
 public categories;
 public category="";
 public description="";
 public content;
 public data;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.title = "";
    this.author = "";
    this.cover = "";
    this.tags=[];
    this.singleTag = "";
    this.counter = 1;
    this.content = "";
    this.category = "";
    this.description = "";

    this.homeService.allCategory().subscribe((data)=>{
      this.categories = data
    })
  }
  selectImage(event){
    if(event.target.files.length > 0){
      this.cover = event.target.files[0];
    }
    // console.log(this.cover);  
  }

  uploadImage(){
    const formData = new FormData();
    formData.append('x',this.cover);
    this.homeService.uploadImage(formData).subscribe((data)=>{
      this.cover= data.location;
      alert("uploaded")
    })
  }

  addInput(){
    this.tags.push(this.singleTag);
    this.singleTag = "";
    console.log(this.tags);
    
  }
  // getEditorValue(){
  //    this.homeService.getPostsList().subscribe((data)=>{
  //      document.getElementById('container').innerHTML = data[1].html;
  //    })
  // }
  postAdminBlogs(){

    this.content = tinymce.activeEditor.getContent();
    this.data={html:this.content,title:this.title,cover:this.cover,author:this.author,tags:this.tags,category:this.category,description:this.description};
    // console.log(this.cover);
    
    this.homeService.postBlogs(this.data).subscribe((data)=>{
      console.log(data);
      this.title = "";
      this.author = "";
      this.cover = "";
      this.tags=[];
      this.singleTag = "";
      this.counter = 1;
      this.content = "";
      this.category = "";
      this.description = "";
    })
  }

  // setNextTab(){
  //   document.getElementsByClassName("tab1")[0].style.display = "none";
    
  //   document.getElementsByClassName("tab2")[0].style.display = "none";
  // }
}
