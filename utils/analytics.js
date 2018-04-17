import Analytics from 'electron-google-analytics';
import { machineIdSync } from 'node-machine-id';

const HEARTBEAT_INTERVAL = 30000;
const HEARTBEAT_EVENT = 'heartBeat';
const APP_LOAD_EVENT = 'initialLoad';
const APP = 'App';
const analytics = new Analytics('UA-111389782-1');
let clientId;

try {
  clientId = machineIdSync();
} catch (err) {
  clientId = 'no-machineid-detected';
}

const getAnalyticsEvent = (app) => ({
  evLabel: `version ${app.getVersion()}`,
  clientID: clientId,
});

export const loadAnalytics = (app) => analytics.event(
  APP,
  APP_LOAD_EVENT,
  getAnalyticsEvent(app),
).then((res) => log.info(res))
 .catch((err) => log.error(err));

export const checkHeartbeat = (app, updateAvailable, autoUpdater) => {
  setInterval(() => {
    if (!updateAvailable) autoUpdater.checkForUpdatesAndNotify();

    analytics.event(
      APP,
      HEARTBEAT_EVENT,
      getAnalyticsEvent(app),
    ).then((res) => log.info(res))
     .catch((err) => log.error(err));
  }, HEARTBEAT_INTERVAL);
}
