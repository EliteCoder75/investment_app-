import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Metrics } from './metrics.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() emitData: EventEmitter<Metrics> = new EventEmitter();

  //default values
  initial_inv = '0';
  annual_inv = '0';
  expected_ret = '5';
  duration = '10';


  onSubmit () {
    this.emitData.emit({
      initial_inv : +this.initial_inv,
      annual_inv : +this.annual_inv,
      expected_ret : +this.expected_ret,
      duration : +this.duration
    });
  }

}
