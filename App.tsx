import { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';


export default function App() {
  //Developed with study purposes by Ruan de Queiroz

  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <StatusBar backgroundColor={myColors.dark} />
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>

        <View
          style={{
            flexDirection: 'row', alignItems: 'center'
          }}>

          <Text style={{ color: myColors.gray }}>Alterar Tema</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </View>

        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
