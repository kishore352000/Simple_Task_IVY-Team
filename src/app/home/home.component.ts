import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:any;
  constructor(private userService: UsersService, private httpClientModule: HttpClientModule) { }
 

ngOnInit(): void {
  this.userService.getUsers().subscribe((result)=>{
    this.users=result;
   
  });
}

}


 