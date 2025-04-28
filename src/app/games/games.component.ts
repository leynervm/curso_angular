import { Component, Input, output } from '@angular/core'

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = ''
  addFavoriteEvent = output<string>()

  fav (gameName: string) {
    // alert(`A ${this.username} le gusta jugar, ${gameName}`)
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'horizon zero Dawn'
    },
    {
      id: 3,
      name: 'Boodhorne'
    }
  ]
}
