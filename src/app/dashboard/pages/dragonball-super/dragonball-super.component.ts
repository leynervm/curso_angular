import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  selector: 'app-dragonball-super',
  imports: [FormsModule],
  templateUrl: './dragonball-super.component.html'
})


export class DragonballSuperComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000
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
