import { Component } from '@angular/core'
import { GamesComponent } from '../games/games.component'

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Leyner VM'
  isLoggedIn = false
  favGame = ''

  getFavorito (favGame: string) {
    this.favGame = favGame
  }

  greet () {
    alert('Click, Hello world')
  }
}
