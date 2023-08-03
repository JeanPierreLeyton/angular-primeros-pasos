import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  reset(): void{
    this.counter = 10;
  }

  increseBy(): void{
    this.counter += 1;
  }

  decreseBy(): void{
    this.counter -= 1;
  }

}
