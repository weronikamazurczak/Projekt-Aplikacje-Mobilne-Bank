import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import OnboardScreens from './OnboardScreens';
import Login from './Login';


export default function App() {
  return (
    <GluestackUIProvider config={config}>
        <OnboardScreens />
        <Login />
    </GluestackUIProvider>
  );
}


