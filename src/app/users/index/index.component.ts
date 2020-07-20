import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Users: Users[] = [];
  
  constructor(public Userservice: UsersService) { }
  
  ngOnInit(): void {
    this.Userservice.getAll().subscribe((data: Users[])=>{this.Users = data;
      console.log(this.Users);
    })  
  }
  
  deletePost(id){
    this.Userservice.delete(id).subscribe(res => {
         this.Users = this.Users.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
