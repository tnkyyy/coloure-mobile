import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GeneratorScreen from './GeneratorScreen';
import SavedSchemesScreen from './SavedSchemesScreen';
import AboutScreen from './AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Generator':
              iconName = 'color-fill';
              break;
            case 'Saved':
              iconName = 'bookmark';
              break;
            case 'About':
              iconName = 'book';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen name="Generator" component={GeneratorScreen} />
      <Tab.Screen name="Saved" component={SavedSchemesScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
