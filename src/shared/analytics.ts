/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import * as amplitude from '@amplitude/analytics-browser';

class Analytics {
  init() {
    amplitude.init('9a062239aac9365d47f9aab9e84abf18');
  }
  track(event: string, props?: Record<string, any>) {
    amplitude.track(event, props);
  }
}

export const analytics = new Analytics();
