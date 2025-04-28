import { UpperCasePipe } from '@angular/common'
import { Component, computed, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  imports: [UpperCasePipe],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  name = signal('Iron Man')
  age = signal(45)

  heroDescripcion = computed(() => {
    const heroDescripcion = `${this.name()} - ${this.age()}`
    return heroDescripcion
  })

  capitalizedName = computed(() => {
    return this.name().toLowerCase()
  })

  changeHero () {
    this.name.set('SpiderMan')
    this.age.set(22)
  }

  changeAge () {
    this.age.set(60)
  }

  resetForm () {
    this.name.set('Iron Man')
    this.age.set(45)
  }
}
