import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  linkText: string = '';

  constructor(private router: Router) { }

  isOnTodoListAppRoute(): boolean {
    return this.router.url === '/todolist-app';
  }

  ngOnInit(): void {
  }

}
