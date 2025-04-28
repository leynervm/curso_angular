import { CommonModule } from '@angular/common'
import {
  booleanAttribute,
  Component,
  EventEmitter,
  inject,
  Input,
  output,
  Output
} from '@angular/core'
import {
  FormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  @Input({ required: true }) received!: string
  @Input({ transform: booleanAttribute }) withShadow: boolean = false

  @Output() onEventChange = new EventEmitter<string>()
  // onEventChange = output<string>()

  private formBuilder = inject(FormBuilder)

  get name () {
    return this.formUser.get('name') as FormControl
  }

  get email () {
    return this.formUser.get('email') as FormControl
  }

  formUser = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  // formUser = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email])
  // })

  onSubmit () {
    console.log(this.formUser.value)
  }

  emitReceivedChange () {
    this.onEventChange.emit(this.received)
  }
}
