import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signUp(username: string, email:string, password:string) {
    var user = {
      username: username,
      email: email,
      password: password
    };
    this.userService.signUp(user).subscribe((createdUser: any) => {
      this.router.navigate(['/login'], { state: { data: createdUser.message } });
    });
  }

}
