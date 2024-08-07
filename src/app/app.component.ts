import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CircularGaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public cap?: Object = { radius: 15 };
  public needleStartWidth?: Number = 10;
  public needleEndWidth?: Number = 5;
  public labelStyle?: Object = {
    font: {
      color: 'red',
      size: '20px',
      fontWeight: 'Bold'
    }
    ,
    position: 'Outside'
  };
}
