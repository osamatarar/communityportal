import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";

@Injectable()
export class CommunityBaseComponent {
   constructor(protected confirmationService: ConfirmationService,
    protected  router:Router,
    protected route: ActivatedRoute
   ){}
   RefreshData :string = new Date(Date.now()).toString();

   OnFormSubmit(event : any){

   this.RefreshData = new Date(Date.now()).toString();
  }
}