import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonApp, IonButton, IonButtons, IonMenu, IonItem, IonIcon, IonLabel, IonList, IonListHeader, IonMenuToggle} from '@ionic/react';

import { homeOutline, reorderThreeOutline, apertureOutline, videocamOutline, filmOutline, locateOutline } from "ionicons/icons";
import './Home.css';

const Home: React.FC = () => {
  return (
    
            <IonPage id="main-content" >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>
          <IonTitle>Entering</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 className='header'>Welcome</h1>
        <p className='text'>This is a Application where you can find movieschedules for Finnkino theaters. </p>
        <IonButton  expand='block' shape='round' routerLink='./Movies'>Enter</IonButton>
      
      </IonContent>
    </IonPage>
   
  );
};

export default Home;
