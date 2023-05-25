import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider } from '@ui-kitten/components/theme';





const HomeScreen = () => {
  <Layout>
    <SafeAreaView>
      <Button>Press Me </Button>
      <TodoList/>
    </SafeAreaView>
  </Layout>
}

export default () => {
  return (
    <>
      <IconRegistry icons = {EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
      </ApplicationProvider>
    </>
    );
}

