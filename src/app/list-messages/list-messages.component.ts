import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MessagesService } from '../services/messages.service'

@Component({
  selector: 'app-list-messages',
  imports: [CommonModule],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {
  constructor (public MessagesService: MessagesService) {
    // this.mensajes = MessagesService.messages
  }

  mensajes = []
}
