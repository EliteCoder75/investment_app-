import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initial_inv: number = 0;
  annual_inv: number = 0;
  expected_ret: number = 0;
  duration :number = 0;

  calculate () {
    const annualData = [];
    let investmentValue = this.initial_inv;
  
    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expected_ret / 100);
      investmentValue += interestEarnedInYear + this.annual_inv;
      const totalInterest =
        investmentValue - this.annual_inv * year - this.initial_inv;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annual_inv,
        totalInterest: totalInterest,
        totalAmountInvested: this.initial_inv + this.annual_inv * year,
      });
    }
  
    console.log (annualData);  }

}
