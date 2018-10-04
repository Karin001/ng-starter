import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
export const animteType1 = trigger('ninjia', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('200ms cubic-bezier(0.390, 0.575, 0.565, 1.000)', style({ opacity: 1 }))
  ])
]);

export const animteType2 = trigger('saber', [

  transition('void => *', [
    animate('0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000)', keyframes([
      style({
        transform: ' translateX(-1000px) rotate(-720deg)',
        filter: 'blur(50px)',
        opacity: 0
      }),
      style({transform: ' translateX(0) rotate(0)',
      filter: 'blur(0)',
      opacity: 1}),
    ]))
  ])
]);

