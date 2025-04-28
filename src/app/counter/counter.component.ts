import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0
  counterSignal = signal(10)
  colorSelected: string = ''
  enabledButton: boolean = true

  increment () {
    this.count += 1
    this.counterSignal.update(prev => prev + 1)
  }
  decrement () {
    this.count -= 1
    this.counterSignal.update(prev => prev - 1)
  }
  reset () {
    this.count = 0
    this.counterSignal.set(10)
  }

  setColor (colorClass: string) {
    this.colorSelected = colorClass
  }

  toggleEnabled (property: boolean) {
    console.log(property)
    this.enabledButton = property
  }
}
