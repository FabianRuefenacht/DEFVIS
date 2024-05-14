```
hier der Video-Teaser
```

Die Web-App **DEFVIS** bietet Dir folgende Tools:

- Deformationsmessungen zu verwalten
- Dreidimensionale Verschiebungen zu visualisieren
- Wirkungsvolle Überwachung und Analyse von geophysikalischen Veränderungen

Die Darstellung dieser Daten im dreidimensionalen Kontext bietet Dir als Nutzer\*in eine intuitive und umfassende Sicht auf die Daten, was zu fundierteren und informierteren Entscheidungen führt.

Die Implementierung dieser Funktionen zielt darauf ab, eine effiziente und effektive Datenanalyse sowie eine ansprechende Visualisierung zu ermöglichen, wodurch die Web-App viele Anwendungsgebieten abdecken kann.

## Suche (funktioniert noch nicht)

<div id="search-container">
    <input type="text" id="search-input" placeholder="Suche..." style="width: 100%;">
    <ul id="search-results"></ul>
</div>

---

## Wie wird die App installiert {#section1}

hier gehts zur [Schnellinstallation](https://github.com/FabianRuefenacht/6230_FRNMLW/?tab=readme-ov-file#schnellinstallation){:target="\_blank"}

---

## Features von DEFVIS {#section2}

### 3D-Ansicht

```
hier ein Video über die Funktion 3D-Viewer
```

Unsere App bietet eine breite Palette von Funktionen, die den Nutzern vielfältige Möglichkeiten bieten, ohne sie zu überfordern. Eine herausragende Funktion ist der 3D-Viewer, der es den Benutzern ermöglicht, Fehlervektoren in einer dreidimensionalen Ansicht zu betrachten. Durch diese Darstellung in Bezug auf das Gelände können Benutzer nicht nur 2D-Informationen erhalten, sondern auch den Fehlervektor im Kontext einer Oberfläche visualisieren. Dies ermöglicht es, einen direkten Bezug herzustellen, beispielsweise um zu sehen, wie ein Punkt am Hang abrutscht.

### 2D-Ansicht

```
hier ein Video über die Funktion 2D-Ansicht und wenn man auf den Punkt klickt, die Informationen dazu erscheinen
```

In der 2D-Ansicht kannst Du die Punkte, welche Du in Dein Projekt importiert hast visualisiern. Der Fehlervektor wird angezeigt, sodass Du weisst wie stark sich ein Punkt in welche Richtung bewegt.

### Punktinformationen

```
hier ein Video über die Punktinformation und wenn man auf den Punkt klickt, man auf der Ansicht darauf zoomt
```

Um die Daten nicht nur visuell zu haben sondern auch in einer Tabelle, werden aus den Daten der importierten Sessionen die Fehlervektoren in Ost-, Nord-Richtung und Höhet berechnet und in die Tabelle geschrieben.
Durch Anklicken eines Punktes, wird automatisch auf dem Punkt aus der Ansicht gezoomt.

---

## Benutzerhandbuch {#section3}

Entdecke die vielfältigen Tools und Funktionen, die DEFVIS bietet. Klicke auf die Links unten, um zu den einzelnen Seiten zu gelangen und mehr über ihre Funktionen zu erfahren:

| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **[Home](home.html):** | ist die Startseite der App, wo Du Dich orientieren und weitere Schritte planen kannst |
| **[Registrieren](register.html):** | hier kannst Du ein neues Benutzerkonto erstellen, um alle Funktionen der App nutzen zu können |
| **[Anmelden](login.html):** | melde Dich mit deinem Benutzerkonto an, um Zugriff auf Deine Projekte zu erhalten |
| **[Hauptansicht](main_view.html):** | ist die zentrale Ansicht Deiner App, wo Du Projekte verwalten und Daten visualisieren kannst |
| **[Projekt erstellen](create_project.html):** | beginne ein neues Projekt und füge Daten hinzu, um sie zu analysieren |
| **[Projekt laden](load_project.html):** | lade ein vorhandenes Projekt, um fortzufahren oder es zu bearbeiten |
| **[Session erfassen](capture_session.html):** | erfasse neue Sessionen für Dein aktuelles Projekt |
| **[Geladenes Projekt](current_project.html):**| sehe die Daten in Deinem ausgewählten Projekt ein |
| **[Abmelden](logout.html):** | melde Dich von deinem Benutzerkonto ab, wenn du die App verlassen möchtest |

---

## Methoden zum Produkt {#section4}

Die Entwicklung der App basierte auf einer Reihe von bewährten Methoden, darunter:

- ...
- ...
- ...

---

## Verwendete Ressourcen {#section5}

Unsere App-Datenbank wird mit Benutzerdaten gefüllt und zur korrekten Darstellung verwenden wir three.js. Die Hintergrundkarte beziehen wir von swisstopo.ch (Situationsplan farbig).
### Messdaten
Die Messdaten werden von den Nutzern in Sessionen zur Verfügung gestellt und in einer zentralen SQLite-Datenbank verwaltet (siehe [https://www.sqlite.org/](https://www.sqlite.org/)).

### Tabelle
In einer Tabelle werden die Punktverschiebungen (in mm) zwischen den gewählten Sessionen dargestellt. Die Verschiebungen werden aus der Differenz **neu - alt** berechnet. Durch Klick auf eine Punktnummer wird die 2D oder 3D Ansicht geladen.

### 2D-Karte
Die Messdaten und Verschiebungen* werden durch openlayers (siehe [https://openlayers.org/](https://openlayers.org/)) dargestellt. Um die Verschiebungen auf der Karte besser sichtbar zu machen, werden sie mit dem Faktor **1000** multipliziert.

Als Hintergrundkarte wird die **Landeskarte farbe 1:10'000** von ©swisstopo verwendet (siehe [https://www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10](https://www.swisstopo.ch)). Die Einbindung der Karte erfolgt als Web-Map-Service mit folgenden Parametern.
| Attribut               | Wert                                                                                                                                                   |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| extent                 | Wert der Variable `extent`                                                                                                                             |
| source.url             | [https://wms.geo.admin.ch/](https://wms.geo.admin.ch/)                                                                                                 |
| source.crossOrigin     | "anonymous"                                                                                                                                            |
| source.attributions    | [geo.admin.ch](http://www.geo.admin.ch/internet/geoportal/en/home.html)                                                                                 |
| source.projection      | "EPSG:2056"                                                                                                                                            |
| source.params.LAYERS   | "ch.swisstopo.landeskarte-farbe-10"                                                                                                                   |
| source.params.FORMAT   | "image/jpeg"                                                                                                                                           |
| source.serverType      | "mapserver"                                                                                                                                            |





---

## Ausblick von DEFVIS {#section6}

### Zeitreihenanalyse

Die Integration einer Zeitreihenanalyse war aus Zeitgründen nicht möglich. Dies würde den Benutzern ermöglichen, Positionsänderungen im Laufe der Zeit genauer zu verfolgen, beispielsweise durch die Berücksichtigung von Temperaturänderungen oder anderen meteorologischen Einflüssen.

### Farbcodierte Punkte

Eine zukünftige Erweiterung könnte die Möglichkeit für Benutzer umfassen, Schwellwerte für jedes Projekt festzulegen. Punkte, die signifikante Bewegungen aufweisen, könnten anders eingefärbt oder markiert werden, um sofortige Aufmerksamkeit zu erregen.

### 2D-Balken neben 3D-Vektoren

Die grösse eines Vektors ist schwierig zu vergleichen. Alleine durch die perspektive reicht oft nicht aus. Deshalb könnte man einen 2D-Balkendiagramm neben den Vektor setzen. So sieht man ein verhältnis zu weiter entfernten oder näheren Punkten.

---

## API Dokumentation

---

## Architektur
