import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function App() {
  const handleLoad = () => {
    console.log('WebView loaded successfully');
  };

  const handleError = (error) => {
    console.error('Error loading WebView:', error);
  };

  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://dvangonen.github.io/monaco-editor/' }}
      onLoad={handleLoad}
      onError={handleError}
      startInLoadingState={true}
      renderLoading={() => (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});