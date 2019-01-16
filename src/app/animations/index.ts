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
    animate('0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
      style({
        transform: "scale(0)",
        'transform-origin': "100% 0%",
        opacity: 1
      }),
      style({
        transform: 'scale(1)',
        'transform-origin': '100% 0%',
        opacity: 1
      }),
    ]))
  ])
]);

