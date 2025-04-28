import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { UserComponent } from './user/user.component'
import { CommentsComponent } from './comments/comments.component'
import { CounterComponent } from './counter/counter.component'
import { ReactiveformComponent } from './reactiveform/reactiveform.component'
import { AddMessagesComponent } from "./add-messages/add-messages.component";
import { ListMessagesComponent } from "./list-messages/list-messages.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    RouterOutlet,
    UserComponent,
    CommentsComponent,
    CounterComponent,
    ReactiveformComponent,
    AddMessagesComponent,
    ListMessagesComponent
],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'React desde cero'
  title2 = 'Componente padre - Emision de eventos'
  nombre = 'Curso Angular'

  setReceived (event: string) {
    this.nombre = event
  }
}
