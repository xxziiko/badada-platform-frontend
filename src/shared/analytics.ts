/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import * as amplitude from '@amplitude/analytics-browser';

class Analytics {
  init() {
    const analyticsKey = process.env.REACT_APP_ANALYTICS_KEY as string;
    amplitude.init(analyticsKey);
  }
  track(event: string, props?: Record<string, any>) {
    amplitude.track(event, props);
  }
}

export const analytics = new Analytics();
