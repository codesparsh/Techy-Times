import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-single-post',
  templateUrl: './admin-single-post.component.html',
  styleUrls: ['./admin-single-post.component.css']
})
export class AdminSinglePostComponent implements OnInit {
  public id;
  constructor(private homeService:HomeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.homeService.getSinglePost(this.id).subscribe((data)=>{
      document.getElementById('blog-content').innerHTML = data['html']
    })
  }


}
