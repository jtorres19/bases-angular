import {NgModule} from "@angular/core";
import {CounterComponent} from "./counter/counter.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
}
