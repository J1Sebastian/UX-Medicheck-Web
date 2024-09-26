import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  isLoginOrRegisterPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register';
  }
}
