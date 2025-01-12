import { Redirect, Route, } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Movies from './pages/Movies';
import { homeOutline, filmOutline, locateOutline } from 'ionicons/icons';





setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList>
                        <IonListHeader>
                            <IonLabel>Navigation</IonLabel>
                        </IonListHeader>
                        <IonMenuToggle autoHide>
                            <IonItem button routerLink="/Home">
                                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                            <IonItem routerLink="/Movies">
                                <IonIcon slot="start" icon={filmOutline}></IonIcon>
                                <IonLabel>Movies</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
    <IonReactRouter>
      <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
 
);

export default App;
