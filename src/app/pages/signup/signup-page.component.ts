import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(private userService: UserService, private router: Router) {}

  signup(name: string) {
    this.userService.signup(name)
    this.router.navigate(['']) 
  }
}
