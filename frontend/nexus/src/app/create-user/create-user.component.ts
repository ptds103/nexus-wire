import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: RegUser = new RegUser();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.userService.createUser(this.user).subscribe( data =>{
      this.router.navigate(['/login']);
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/login']);
  }
  
  onSubmit(){
    this.saveEmployee();
  }
}



