[Gehe zurück zur Hauptseite](index.html)

# Verwendete Ressourcen

<ul>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/ressourcen.html#datenquellen">Datenquellen</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/ressourcen.html#visualisierung">Visualisierungsansätze</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/ressourcen.html#tabelle">Tabelle</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/ressourcen.html#literatur">Literatur</a></li>
</ul>

---

Unsere App-Datenbank wird mit Benutzerdaten gefüllt und zur korrekten Darstellung verwenden wir [three.js](https://threejs.org/). Die Hintergrundkarte beziehen wir von [swisstopo.ch](https://swisstopo.ch/) (Situationsplan farbig).

---

## Datenquellen

### Messdaten

Die Messdaten werden von den Nutzern in Sessions bereitgestellt und in einer zentralen SQLite-Datenbank verwaltet. Weitere Informationen zur SQLite-Datenbank findest Du auf [www.sqlite.org](https://www.sqlite.org/).

### Hintergrundkarte

Die Hintergrundkarte, **Landeskarte farbig 1:10'000**, wird von ©swisstopo bezogen und als Web-Map-Service (WMS) eingebunden. Weitere Details zur Karte findest Du auf [swisstopo](https://www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10).

| Attribut             | Wert                                                                    |
| -------------------- | ----------------------------------------------------------------------- |
| source.url           | https://wms.geo.admin.ch/                                               |
| source.crossOrigin   | "anonymous"                                                             |
| source.attributions  | [geo.admin.ch](http://www.geo.admin.ch/internet/geoportal/en/home.html) |
| source.projection    | "EPSG:2056"                                                             |
| source.params.LAYERS | "ch.swisstopo.landeskarte-farbe-10"                                     |
| source.params.FORMAT | "image/jpeg"                                                            |
| source.serverType    | "mapserver"                                                             |

### Software und Bibliotheken

- **three.js**: Zur dreidimensionalen Darstellung der Punkte und Vektoren. Weitere Informationen findest Du in der [three.js-Dokumentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).
- **OpenLayers**: Zur Darstellung der Messdaten und Verschiebungen auf der Karte. Weitere Details findest Du auf [openlayers.org](https://openlayers.org/).

---

## Visualisierungsansätze

### 2D-Karte

Die Messdaten und Verschiebungen werden durch [OpenLayers](https://openlayers.org/) visualisiert. Um die Verschiebungen auf der Karte besser sichtbar zu machen, werden sie mit dem Faktor **1000** multipliziert.

### 3D-Modell

Die dreidimensionale Darstellung der Punkte und Vektoren erfolgt durch [three.js](https://threejs.org/). Die Überwachungspunkte werden als Kugeln dargestellt, während die Verschiebungen in Ost, Nord und Höhe durch Röhren (TubeGeometries) visualisiert werden. Das Hintergrundmodell wird derzeit noch nicht automatisch erstellt, sondern mithilfe des QGIS-Plugins [Qgis2threejs](https://github.com/minorua/Qgis2threejs) vorprozessiert. Die Landeskarte aus der 2D-Darstellung wird auf das 3D-Modell projiziert, um die Orientierung zu erleichtern. Mehr Informationen findest Du unter dem Abschnitt<a href="https://fabianruefenacht.github.io/DEFVIS/current_project.html#dreid">3D-Ansicht</a>.

---

## Tabelle

In einer Tabelle werden die Punktverschiebungen (in mm) zwischen den gewählten Sessions dargestellt. Die Verschiebungen werden aus der Differenz **neu - alt** berechnet. Durch Klick auf eine Punktnummer wird die 2D- oder 3D-Ansicht geladen.

---

## Literatur

- **SQLite**: [www.sqlite.org](https://www.sqlite.org/)
- **Three.js**: [three.js](https://threejs.org/)
- **OpenLayers**: [openlayers.org](https://openlayers.org/)
- **swisstopo**: [swisstopo](https://www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10)
- **Qgis2threejs**: [github.com/minorua](https://github.com/minorua/Qgis2threejs)

---

[zurück nach ganz oben](ressourcen.html)
