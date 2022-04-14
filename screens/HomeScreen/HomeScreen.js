import { createBottomTabsNavigator } from '@react-navigation/bottom-tabs';
import GeneratorScreen from './GeneratorScreen';
import SavedSchemesScreen from './SavedSchemesScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabsNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Generator" component={GeneratorScreen} />
      <Tab.Screen name="Saved" component={SavedSchemesScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
