import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MessagesService } from '../services/messages.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-messages',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {
  constructor (public MessagesService: MessagesService) {}

  mensaje = ''

  addMessage () {
    this.MessagesService.add(this.mensaje)
    this.mensaje = ''
  }
}
