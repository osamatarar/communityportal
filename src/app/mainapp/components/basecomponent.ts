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

  protected OnFormSubmit(event : any){
    this.RefreshData = new Date(Date.now()).toString();
  }

  getRandomNDigits(n: number): string {
    const min = Math.pow(10, n - 1);
    const max = Math.pow(10, n) - 1;
    return this.getRandomInt(min, max).toString();
  }
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}