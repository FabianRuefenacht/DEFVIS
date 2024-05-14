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
Die Messdaten werden von den Nutzern in Sessionen zur Verfügung gestellt und in einer zentralen SQLite-Datenbank verwaltet (siehe [www.sqlite.org/](https://www.sqlite.org/)).

### Tabelle
In einer Tabelle werden die Punktverschiebungen (in mm) zwischen den gewählten Sessionen dargestellt. Die Verschiebungen werden aus der Differenz **neu - alt** berechnet. Durch Klick auf eine Punktnummer wird die 2D oder 3D Ansicht geladen.

### 2D-Karte
Die Messdaten und Verschiebungen* werden durch openlayers (siehe [openlayers.org/](https://openlayers.org/)) dargestellt. Um die Verschiebungen auf der Karte besser sichtbar zu machen, werden sie mit dem Faktor **1000** multipliziert.

Als Hintergrundkarte wird die **Landeskarte farbe 1:10'000** von ©swisstopo verwendet (siehe [www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10](https://www.swisstopo.ch)). Die Einbindung der Karte erfolgt als Web-Map-Service mit folgenden Parametern.

| Attribut               | Wert                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------|
| source.url             | [https://wms.geo.admin.ch/](https://wms.geo.admin.ch/)                                     |
| source.crossOrigin     | "anonymous"                                                                                |
| source.attributions    | [geo.admin.ch](http://www.geo.admin.ch/internet/geoportal/en/home.html)                    |
| source.projection      | "EPSG:2056"                                                                                |
| source.params.LAYERS   | "ch.swisstopo.landeskarte-farbe-10"                                                        |
| source.params.FORMAT   | "image/jpeg"                                                                               |
| source.serverType      | "mapserver"                                                                                |


## 3D-Modell
Die dreidimensionale Darstellung der Punkte und der Vektoren erfolgt durch three.js (siehe [threejs.org](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)). Die Überwachungspunkte werden als Sphere (Kugel) dargestellt. Die Verschiebungen in Ost, Nord und Höhe werden durch TubeGeometries (Röhren) dargestellt.

Das Hintergrundmodell wird derzeit noch nicht automatisch erstellt. Das Modell, welches in der Web-App verwendet wird, wurde durch das QGIS-Plugin Qgis2threejs [github.com/minorua](https://github.com/minorua/Qgis2threejs) vorprozessiert. Um die Orientierung auf dem Geländemodell zu ermöglichen, wurde die Landeskarte aus der 2D-Darstellung auf das Modell projiziert.

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
Fast API kommt mit vorinstallierter Swagger UI. Wenn der Fast API Backen Server läuft, kann auf die Dokumentation der API über Swagger UI auf http://localhost:8000/docs verfügbar.

---

## Architektur
Die Web-App VECVIS basiert auf einer Server-Client-Architektur. Die Schnittstelle zwischen dem Client (frontend) und dem Server (backend) basiert auf FastAPI [fastapi.com](https://fastapi.tiangolo.com/). Als Speichermedium für die Daten dient eine SQLite-Datenbank [www.sqlite.org/](https://www.sqlite.org/). 

### Backend
Das Backend ist in der Programmiersprache Python ([python.org](https://www.python.org/)) geschrieben. In der Datei *db.py* ist eine Klasse enthalten, welche die Interaktion mit der Datenbank ermöglich. Dafür wird die Python-Bibliothek *sqlite3* verwendet. Total sind 15 Funktionen vorhanden. Diese sind in folgende Kategorien zu unterteilen:
- **DB erstellen:** Erstellen der Datenbank und einrichten der Tabellen
- **User:** Interaktion mit der Tabelle user (User erstellen und lesen)
- **Project:** Interaktion mit der Tabelle projects (Projekte erstellen und lesen)
- **Sessions:** Interaktion mit der Tabelle sessions (Sessionen erstellen und lesen)
- **Points:** Interaktion mit der Tabelle points (Punkte erstellen und lesen)

Die Funktionen der Datei *db.py* werden in der Datei *main.py* aufgerufen. Hier werden die Bibliotheken *fastapi*, *pydantic* und *uvicorn* benötigt. Durch FastAPI werden 7 Routen mit den folgenden Zwecken eröffnet:
- **/user:** Benutzer erstellen
- **/login:** Login prüfen
- **/newProject:** Projekt erstellen
- **/openProject:** Projekte der nutzenden Person laden
- **/newSession:** Neue Session im Projekt anlegen
- **/getSessions:** Vorhandene Sessionen im Projekt anzeigen & Punkte beziehen

### Frontend
Die Umsetzung im Frontend wurde mit next.js ([nextjs.org](https://nextjs.org/docs)) gemacht. Als Programmiersprache im Frontend wurde TypeScript ([www.typescriptlang.org](https://www.typescriptlang.org/)) gewählt. TypeScript (TS) stellt im Gegensatz zu JavaScript (JS) sicher, dass die Datentypen definiert sind, was die Anwendung weniger Fehleranfällig macht. Für die Darstellung im frontend wurde auf tailwind ([tailwindcss.com](https://tailwindcss.com/)) gesetzt. Tailwind ist ein CSS-Framework, welches die wichtigsten Styling-Attribute von CSS abdeckt und einwandfrei mit Next.js und TS kombinierbar ist. Die Kommunikation zum Backend wird durch *axios* [axios-http.com](https://axios-http.com/docs/intro) gelöst. Die nachfolgende Auflistung zeigt die **js*- & **.tsx*-Dateien im Ordner *frontend/src/app*, welche für den Client verwendet werden und ihre Funktionalitäten auf:
- **layout.tsx:** Hauptdatei, für Layout zuständig
- **page.tsx:** Hauptbildschirm, regelt ob Benutzer / Benutzerin Zugriff auf die Applikation hat
- **components/Button.tsx:** Einheitliche Darstellung der Buttons
- **components/Detail.tsx:** Verwaltung der States und Einbindung der 3D-Darstellung
- **components/Navbar.tsx:** Serverkomponente welche die Routen für Login, Registrierung und Logout bereitstellt
- **components/OlMap.tsx:** Darstellung der Punkte und Verschiebungen in der Karte
- **components/Settings.tsx:** Verwalten von allen Punkt- Sessions- und Projektdaten, Einbindung der verschiedenen Ansichten
- **components/TableView.tsx:** Darstellung der Punktverschiebungen in einer Tabelle
- **components/ThreeScene.tsx:** Darstellung der Punkte auf dem 3D-Modell
- **components/cookies/cookiecreator.tsx:** Schreiben von Cookies (für Login benötigt)
- **components/cookies/cookiereader.tsx:** Lesen von Cookies (für Login benötigt)
- **components/login/page.tsx:** Einlogen von Benutzenden
- **components/logout/page.tsx:** Abmelden von Benutzenden
- **components/register/page.tsx:** Registrierung von neuen Benutzern / Benutzerinnen

Die nachfolgende Grafik zeigt die Geodateninfrastruktur schematisch auf und verweist auf die wichtigsten Komponenten der Applikation.

**Grafik**
