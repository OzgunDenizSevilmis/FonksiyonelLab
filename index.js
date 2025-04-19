import { ExpoRoot } from 'expo-router';
import { registerRootComponent } from 'expo';

const App = () => {
  return <ExpoRoot />;
};

registerRootComponent(App);