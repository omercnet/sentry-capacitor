import { ErrorHandler as AngularErrorHandler, Injectable } from '@angular/core';

/**
 * Implementation of Angular's ErrorHandler provider that can be used as a drop-in replacement for the stock one.
 */
@Injectable({ providedIn: 'root' })
export class CapacitorAngularErrorHandler implements AngularErrorHandler {
  constructor() {
    /* eslint-disable-next-line no-console */
    console.log('CORTNEY IN HERE THIS TIME 13');
  }

  /** cortney test */
  public handleError(): void {
    /* eslint-disable-next-line no-console */
    console.log('tesitng handle error cortney osdingoisdhgiuh');
  }
}
