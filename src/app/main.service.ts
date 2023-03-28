import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  data: any = [];
  logoLabel: string = '';
  isValid = false;
}
