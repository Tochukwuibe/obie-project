import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;
  public isAuth = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToHome() {
    this.router.navigate(['/faqs']);
  }

}
