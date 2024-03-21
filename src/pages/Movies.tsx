import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonMenu, IonIcon, IonList, IonListHeader, IonMenuToggle } from "@ionic/react";
import { reorderThreeOutline } from "ionicons/icons";
import '../Styles/style.css';


interface Movie {
    starting: string;
    auditorium: string;
    title: string;
    image: string;
}


const Movies: React.FC = () => {
    const [theater, setTheater] = useState('1033'); // Default theater value
    const [movies, setMovies] = useState<Movie[]>([]);


   useEffect(() => {
        loadAndParseXML();
    }, [theater]); // Load movies whenever theater changes


   const loadAndParseXML = () => {
        let url = `https://www.finnkino.fi/xml/Schedule/?area=${theater}&dt=`;
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                const shows: Movie[] = Array.from(xmlDoc.getElementsByTagName("Show")).map(show => ({
                    starting: show.getElementsByTagName("dttmShowStart")[0]?.textContent || '',
                    auditorium: show.getElementsByTagName("TheatreAuditorium")[0]?.textContent || '',
                    title: show.getElementsByTagName("Title")[0]?.textContent || '',
                    image: show.getElementsByTagName("EventSmallImagePortrait")[0]?.textContent || ''
                }));
                setMovies(shows);
            })
            .catch(error => console.error('Error fetching data:', error));
    };


   return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>
                    <IonTitle>Movies</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <h1 className='Name'>Movies today!</h1>
                <div className="movieSearch">
                    
                    <select id="theaterlist" className="theaterlist" value={theater} onChange={(e) => setTheater(e.target.value)}>
                        <option value="1033">Helsinki - Tennispalatsi</option>
                        <option value="1045">Helsinki - Itis</option>
                        <option value="1031">Helsinki - Kinopalatsi</option>
                        <option value="1032">Helsinki - Kinopalatsi</option>
                        <option value="1013">Vantaa - Flamingo</option>
                        <option value="1015">Jyväskylä - Fantasia</option>
                        <option value="1016">Kuopio - Scala</option>
                        <option value="1017">Lahti - Kuvapalatsi</option>
                        <option value="1041">Lappeenranta - Strand</option>
                        <option value="1018">Oulu - Plaza</option>
                        <option value="1019">Pori - Promemadi</option>
                        <option value="1034">Tampere - Cine atlas</option>
                        <option value="1035">Tampere - Plevna</option>
                        <option value="1022">Turku - Kinopalatsi</option>
                        <option value="1046">Raisio - Luxe mylly</option>
                    </select>
                  
                </div>
                <div className="content">
                    <table>
                        <tbody>
                            {movies.map((movie, index) => (
                                <tr key={index}>
                                    <td>{movie.starting}</td>
                                    <td>{movie.auditorium}</td>
                                    <td>{movie.title}</td>
                                    <td><img src={movie.image} alt={movie.title} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </IonContent>
        </IonPage>
    );
};


export default Movies;




