import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-comments',
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  // username = ''
  // comentario = ''
  comment = {
    username: '',
    comentario: ''
  }

  onSubmit () {
    console.log(this.comment)
  }
}
