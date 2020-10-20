import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from '../members-detail/api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(
  private route: ActivatedRoute ,
  private api:ApiService,
  private router: Router,
  private appComponet: AppComponent){}
selected_member = {name: '', surname: '', phone:'', photo:''}
selected_id;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    });
   
  }

  loadMember(id){
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.api.getMember(id).subscribe(
      data => {
        // console.log(data);
        this.selected_member = data;
      },
      error =>{
        console.log("Aconteceu um erro", error.message);
      }
    );
  };
    update(){
      this.api.updateMember(this.selected_member).subscribe(
        data => {
          // console.log(data);
          this.selected_member = data;
        },
        error =>{
          console.log("Aconteceu um erro", error.message);
        }
      );
    };
    delete(){
      this.api.deleteMember(this.selected_id).subscribe(
        data => {
          let index;
          this.appComponet.members.forEach((e,i) =>{
            if(e.id==this.selected_id)
              index = i;
          });

          this.appComponet.members.splice(index,1);
        },
        error =>{
          console.log("Aconteceu um erro", error.message);
        }
      );
    };
    newMember(){
     this.router.navigate(['new-member']);
    };
  }

