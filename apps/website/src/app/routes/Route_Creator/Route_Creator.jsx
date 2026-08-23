import styles from "./Route_Creator.module.css";
import dropdown from "../../../assets/menu-button.svg";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RegionsMap from '../../../assets/RegionsMap.json';
import { useState } from "react";

function Route_Creator() {
    const regionStyle = { "color": "#225aab", "opacity": "0.25" }

    // const [activeLayer, SetActiveLayer] = useState(RegionsMap);

    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: (e) => {
                const target = e.target;
                target.setStyle({
                    color: '#0368f5',
                    opacity: '0.5'
                })
            },
                mouseout: (e) => {
                    const target = e.target;
                    target.setStyle({
                        color: '#225aab',
                        opacity: '0.25'
                    });
                },
            }
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigationContainer}>
                <a><img src={dropdown} className={styles.dropdown} alt="Dropdown" /></a>
                <div className={styles.generationToggleContainer}>
                    <p>Generate Route</p>
                    <input type="checkbox" className={styles.toggle} />
                    <p>Manual Route</p>
                </div>
            </div>
            <div className={styles.routeWrapper}>
                <div className={styles.mapWrapper}>
                    <h2 className={styles.mapTitle}>Select A Constituency From the Map</h2>
                    <div className={styles.mapContainer}>
                        <div className={styles.map}>
                            <MapContainer center={[53.663, -4.760]} maxBounds={[[49.5, -11], [61, 2]]} zoom={6} minZoom={6} maxBoundsViscosity={1} scrollWheelZoom={false} attributionControl={false}>
                                <TileLayer
                                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                                />
                                <GeoJSON key={JSON.stringify("features.id")} data={activeLayer} style={regionStyle} onEachFeature={onEachFeature} />
                            </MapContainer>
                        </div>
                    </div>
                    <div className={styles.mapStatsContainer}>
                        <div className={styles.mapStats}>
                            <p className={styles.mapStatsTitle}>Visited</p>
                            <p className={styles.mapStatsValue}>0%</p>
                        </div>
                        <div className={styles.mapStats}>
                            <p className={styles.mapStatsTitle}>Base Vote</p>
                            <p className={styles.mapStatsValue}>0%</p>
                        </div>
                        <div className={styles.mapStats}>
                            <p className={styles.mapStatsTitle}>Swing Vote</p>
                            <p className={styles.mapStatsValue}>0%</p>
                        </div>
                        <div className={styles.mapStats}>
                            <p className={styles.mapStatsTitle}>Hostile</p>
                            <p className={styles.mapStatsValue}>0%</p>
                        </div>
                    </div>
                </div>
                <div className={styles.searchWrapper}>
                    <h2 className={styles.searchTitle}>Or Search For A Constituency</h2>
                    <div className={styles.searchContainer}>
                        <input type="text" placeholder="Constituency / Ward" className={styles.searchInput} />
                    </div>
                    <div className={styles.resultContainer}>
                        <div className={styles.searchResult}>
                            <p>bleh</p>
                        </div>
                        <div className={styles.searchResult}>
                            <p>bleh</p>
                        </div>
                        <div className={styles.searchResult}>
                            <p>bleh</p>
                        </div>
                        <div className={styles.searchResult}>
                            <p>bleh</p>
                        </div>
                        <div className={styles.searchResult}>
                            <p>bleh</p>
                        </div>
                    </div>
                    <button className={styles.generateButton}>Generate Trail</button>
                </div>
            </div>
        </div>
    );
}

export default Route_Creator;