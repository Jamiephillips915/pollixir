import styles from "./Route_Creator.module.css";
import dropdown from "../../../assets/menu-button.svg";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RegionsMap from '../../../assets/RegionsMap.json';
import ConstituenciesMap from '../../../assets/Constituencies.json';
import exitButton from '../../../assets/left-arrow.svg';
import { useState, useEffect, useRef } from "react";
import Embedded_Accordian, { Bar } from "../../../Components/Embedded_Accordian/Embedded_Accordian";

function Route_Creator() {
    const [currentArea, SetArea] = useState(null);
    const [generationMode, SetGenMode] = useState(false); // false is Generated, true is Manual.
    const [workflowMode, SetWorkflowMode] = useState(null);
    const [continueClicked, Clicked] = useState(false);
    const [constituency, SetConstituency] = useState(null);


    return (
        <div className={styles.wrapper}>
            <div className={styles.navigationContainer}>
                <a><img src={dropdown} className={styles.dropdown} alt="Dropdown" /></a>
                <div className={styles.generationToggleContainer}>
                    <p>Generate Route</p>
                    <input type="checkbox" className={styles.toggle} onChange={() => { SetGenMode(!generationMode) }} />
                    <p>Manual Route</p>
                </div>
            </div>
            <div className={styles.routeWrapper}>
                <div className={styles.mapUtil}>
                    <div className={styles.mapWrapper}>
                        <h2 className={styles.mapTitle}>Select A Constituency From the Map</h2>
                        <Selection_Map currentArea={currentArea} SetArea={SetArea} />
                    </div>
                </div>
            </div>
            {workflowMode === false &&
                <Generation_Parameters />
            }
            {workflowMode === true &&
                <Manual_Selection constituency={constituency} />
            }
            <button className={styles.generateButton} onClick={() => { if (!continueClicked && currentArea !== null) { SetWorkflowMode(generationMode); Clicked(true); SetConstituency(currentArea); } }}>Continue</button>
        </div>
    );
}

function Selection_Map({ currentArea, SetArea }) {
    const regionStyle = { "color": "#225aab", "opacity": "0.25" }
    const [activeLayer, SetActiveLayer] = useState(RegionsMap)
    const [currentZoom, SetZoom] = useState(6);
    const [currentCenter, SetCenter] = useState([53.663, -4.760])

    const regionOnEachFeature = (feature, layer) => {
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
            click: () => {
                const regionName = feature.properties.ITL125NM;
                SetArea(regionName);

                const filteredConstituencies = ConstituenciesMap.features.filter((constituency) => {
                    return constituency.properties.REGION === regionName;
                });

                const filteredMap = {
                    type: "FeatureCollection",
                    features: filteredConstituencies
                };

                switch (regionName) {
                    case "Scotland":
                        SetZoom(6);
                        SetCenter([57.469, -4.120]);
                        break;
                    case "North East":
                        SetZoom(8);
                        SetCenter([54.966, -1.789]);
                        break;
                    case "North West":
                        SetZoom(8);
                        SetCenter([54.047, -2.801]);
                        break;
                    case "Yorkshire and the Humber":
                        SetZoom(8);
                        SetCenter([53.958, -1.082]);
                        break;
                    case "East Midlands":
                        SetZoom(8);
                        SetCenter([52.954, -0.764]);
                        break;
                    case "West Midlands":
                        SetZoom(8);
                        SetCenter([52.481, -1.902]);
                        break;
                    case "East":
                        SetZoom(8);
                        SetCenter([52.176, 0.654]);
                        break;
                    case "London":
                        SetZoom(10);
                        SetCenter([51.507, -0.127]);
                        break;
                    case "South East":
                        SetZoom(8);
                        SetCenter([51.276, -0.523]);
                        break;
                    case "South West":
                        SetZoom(7);
                        SetCenter([50.816, -3.636]);
                        break;
                    case "Wales":
                        SetZoom(7);
                        SetCenter([52.292, -3.738]);
                        break;
                    case "Northern Ireland":
                        SetZoom(8);
                        SetCenter([54.607, -6.492]);
                        break;
                    default:
                        SetZoom(6);
                        SetCenter([54.093, -2.894]);
                        break;
                }
                SetActiveLayer(filteredMap);
                SetFeatureFunction(() => constituencyOnEachFeature);
            }
        }
        );
    }

    const constituencyOnEachFeature = (feature, layer) => {
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
            click: (e) => {
                const target = e.target;

                const constituency = feature.properties.PCON24NM;
                SetArea("Constituency: " + constituency);
            }
        })
    }

    const [activeFeatureFunction, SetFeatureFunction] = useState(() => regionOnEachFeature);

    return (
        <div>
            <div className={styles.mapContainer}>
                <div className={styles.map}>
                    <MapContainer key={activeLayer === RegionsMap ? "regions" : "constituencies"} center={currentCenter} maxBounds={[[49.5, -11], [61, 2]]} zoom={currentZoom} minZoom={currentZoom} maxBoundsViscosity={1} attributionControl={false}>
                        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
                        <GeoJSON data={activeLayer} style={regionStyle} onEachFeature={activeFeatureFunction} />
                    </MapContainer>
                    <p className={styles.areaTitle}>{currentArea}</p>
                </div>
                <div className={styles.mapBackButton} onClick={() => { SetActiveLayer(RegionsMap), SetZoom(6), SetArea("Select an Area"), SetFeatureFunction(() => regionOnEachFeature) }}>
                    <img src={exitButton} />
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
    );
}

function Generation_Parameters() {
    return (
        <div className={styles.parameterWrapper}>
            <h2 className={styles.parameterTitle}>Select Generation Priorities</h2>
            <div className={styles.parameterContainer}>

            </div>
        </div>
    );
}

function Manual_Selection({ constituency }) {
    const [areaStats, SetAreaStats] = useState(0);
    const [wardTitles, SetWardTitles] = useState([])
    const [wardData, SetWardData] = useState([])

    useEffect(() => {
        const fetchWards = async () => {
            const wardsUrl = 'http://localhost:8000/fetchWards/?constituency=' + constituency.replace("Constituency: ", "")
            const wardCountUrl = 'http://localhost:8000/wardCount/?constituency=' + constituency.replace("Constituency: ", "")


            try {
                const [wardsResponse, wardCountResponse] = await Promise.all([
                    fetch(wardsUrl),
                    fetch(wardCountUrl),
                ])

                const wardsData = await wardsResponse.json();
                const wardCountData = await wardCountResponse.json();
                SetWardTitles(wardsData);
                SetAreaStats(wardCountData);

                const response = await fetch('http://localhost:8000/wardHouseholds/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ wards: wardsData })
                });

                const data = await response.json()

                SetWardData(data)
            }
            catch (err) {
                console.log(err)
            }
        }


        fetchWards();
    }, [])

    return (
        <Embedded_Accordian title={"Select Roads from the Constituency: "} constituency={constituency} areaStats={areaStats}>
            {wardTitles.map((ward, index) => {
                return (
                    <Bar key={ward} location={ward} areaStats={wardData[index] ?? 0}>

                    </Bar>
                );
            })}
        </Embedded_Accordian>

    );
}

export default Route_Creator;