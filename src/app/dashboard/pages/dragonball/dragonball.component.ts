import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [FormsModule],
  templateUrl: './dragonball.component.html'
})


export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 95000
    },
    {
      id: 3,
      name: 'Gohan',
      power: 50000
    }
  ])

  name = signal('')
  power = signal(0)

  submit() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return
    }
    const personaje: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    // this.characters().push(personaje)
    this.characters.update(prev => [personaje, ...prev])
    this.name.set('')
    this.power.set(0)
  }
}
