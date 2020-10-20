import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';
  selected_member = {id: 0, name: '', surname: '', phone: '' }

  members = [
    {name: 'Members 01', id: 1, surname: 'Clicano', phone:' ' },
    {name: 'Members 02', id: 2, surname: 'Fulano', phone:'' },
    {name: 'Members 03', id: 3, surname: 'Beutrano', phone:'' },
  ];

  constructor(private api:ApiService, private router: Router){
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data =>{
        this.members = data
      },
      error =>{
        console.log("Aconteceu um erro");
      }
    );

  };
  memberClicked = (member) =>{
    this.router.navigate(['member-detail', member.id]);


    // this.api.getMember(member.id).subscribe(
    //   data =>{
    //     console.log(data);
    //     this.selected_member = data;
    //   },
    //   error =>{
    //     console.log("Aconteceu um erro");
    //   }
    // );

  };
}
