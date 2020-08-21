import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {
  public categoryPhoto;
  public photoUrl;
  public name;
  public data;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
  }

  selectImage(event){
    if(event.target.files.length > 0){
      this.categoryPhoto= event.target.files[0];
    }
  }
  imageUpload(){
    const formData = new FormData();
    formData.append('categoryPhoto',this.categoryPhoto);
    this.homeService.categoryUploadImage(formData).subscribe((data)=>{
      this.photoUrl=data.location;
      console.log("success");
      
    })
  }
  submit(){
    this.data = { name:this.name, photoUrl:this.photoUrl } 
    this.homeService.addCategory(this.data).subscribe((data)=>{
      console.log(data);
      
    })
  }


}
