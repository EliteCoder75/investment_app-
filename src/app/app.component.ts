import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { Metrics } from './user-input/metrics.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[ HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  

  onCalculateInvestment (data: Metrics) {
    const annualData = [];
    let investmentValue = data.initial_inv;
  
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expected_ret / 100);
      investmentValue += interestEarnedInYear + data.annual_inv;
      const totalInterest =
      investmentValue - data.annual_inv * year - data.initial_inv;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annual_inv,
        totalInterest: totalInterest,
        totalAmountInvested: data.initial_inv + data.annual_inv * year,
      });
    }
  
    //this.emitData.emit(annualData);
    console.log(annualData)  }
}
