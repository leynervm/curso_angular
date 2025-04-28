import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor () {}

  messages: string[] = ['a', 'b']

  add (mensaje: string) {
    this.messages.push(mensaje)
  }
}
