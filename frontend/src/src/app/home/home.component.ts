import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/user';
import { UserService } from '../service/user.service';

@Component({
    selector:'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    // currentUser!: User;
    users: User[] = [];
     
    constructor(private userService: UserService) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: any) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
