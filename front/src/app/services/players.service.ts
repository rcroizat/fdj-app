import { Injectable } from '@angular/core';

export interface Player {
  _id: string;
  name: string;
  position: string;
  thumbnail: string;
  signin: {
    amount: number;
    currency: string;
  };
  born: Date;
}
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

}
