import Layout, { Content } from 'antd/es/layout/layout';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import { darkTheme } from './styles/antdConfig';
import { Quiz } from './components/Quiz';
import { Header } from './components/Header';
import styles from './App.module.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider theme={darkTheme}>
          <Layout className={styles.page}>
            <Header />
            <Content className={styles.content}>
              <Quiz />
            </Content>
          </Layout>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
