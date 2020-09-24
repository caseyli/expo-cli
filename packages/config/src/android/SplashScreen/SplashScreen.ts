import { ExpoConfig } from '../../Config.types';
import { getSplashConfig } from './SplashConfig';
import { setSplashDrawableAsync } from './SplashDrawable';
import { setSplashImageDrawablesAsync } from './SplashImages';
import { setSplashStylesAsync } from './SplashStyles';

export { setSplashMainActivity } from './SplashMainActivity';
export { setSplashManifest } from './SplashManifest';

export async function setSplashScreenAsync(config: ExpoConfig, projectRoot: string) {
  const splashConfig = getSplashConfig(config);

  // try {
  if (splashConfig) {
    await Promise.all([
      setSplashImageDrawablesAsync(config, projectRoot),
      setSplashDrawableAsync(splashConfig, projectRoot),
      setSplashStylesAsync(config, projectRoot),
    ]);
  }
  // } catch (e) {
  //   addWarningAndroid('splash', e);
  // }
}