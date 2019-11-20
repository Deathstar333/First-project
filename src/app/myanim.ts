import { trigger, state, style, transition, animate} from "@angular/animations";

export const myanim = trigger('myAnimation',[
      state('small',style({transform:'scale(1)',})),
      state('large',style({transform:'scale(1.5)', backgroundColor:'green'})),
      transition('small <=> large',animate('1000ms 1000ms ease-in'))
    ])