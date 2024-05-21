# DEFVIS, die WebApp für Ingenieure

<video controls autoplay loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/teaser.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Die Web-App **DEFVIS** bietet Dir folgende Tools:

- Deformationsmessungen zu verwalten
- Dreidimensionale Verschiebungen zu visualisieren
- Wirkungsvolle Überwachung und Analyse von geophysikalischen Veränderungen

Die Darstellung dieser Daten im dreidimensionalen Kontext bietet Dir als Nutzer\*in eine intuitive und umfassende Sicht auf die Daten, was zu fundierteren und informierteren Entscheidungen führt.

Die Implementierung dieser Funktionen zielt darauf ab, eine effiziente und effektive Datenanalyse sowie eine ansprechende Visualisierung zu ermöglichen, wodurch die Web-App viele Anwendungsgebieten abdecken kann.

ℹ️ Um die Web-App optimal zu nutzen, empfiehlt sich ein Laptop oder Desktopmonitor mit einer Mindestgrösse von 15 Zoll.

---

## Wie wird die App installiert {#section1}

hier gehts zur [Schnellinstallation](https://github.com/FabianRuefenacht/6230_FRNMLW/?tab=readme-ov-file#schnellinstallation){:target="\_blank"}

---

## Features von DEFVIS {#section2}

Erkunde die grossartigen Funktionen von DEFVIS. Weitere Informationen und detaillierte Anleitungen zu den Funktionen findest Du alles im <a href="https://fabianruefenacht.github.io/6230_FRNMLW/index.html#section3">Benutzerhandbuch</a>.

### 3D-Ansicht

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/3D.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Unsere App bietet eine breite Palette von Funktionen, die Dir vielfältige Möglichkeiten bieten, ohne Dich zu überfordern. Eine herausragende Funktion ist der 3D-Viewer, der es Dir ermöglicht, Fehlervektoren in einer dreidimensionalen Ansicht zu betrachten. Durch diese Darstellung in Bezug auf das Gelände kannst Du nicht nur 2D-Informationen erhalten, sondern auch den Fehlervektor im Kontext einer Oberfläche visualisieren. Dies ermöglicht es Dir, einen direkten Bezug herzustellen, beispielsweise um zu sehen, wie ein Punkt am Hang abrutscht.

### 2D-Ansicht

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/2D.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

In der 2D-Ansicht kannst Du die Punkte, die Du in Dein Projekt importiert hast, visualisieren. Der Fehlervektor wird angezeigt, sodass Du weisst, wie stark sich ein Punkt in welche Richtung bewegt.

### Punktinformationen

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/punktinfo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Um die Daten nicht nur visuell zu haben, sondern auch in einer Tabelle, werden aus den Daten der importierten Sessionen die Fehlervektoren in Ost-, Nord-Richtung und Höhe berechnet und in die Tabelle geschrieben. Durch Anklicken eines Punktes zoomst Du automatisch auf den Punkt in der Ansicht.

---

## Angewandte Methoden {#section4}

Deformationsmessungen sind Teil des Fachbereichs Ingenieurvermessung und Geodäsie. Ziel einer Deformationsmessung ist es, die Verschiebung von Überwachungspunkten in Bezug zu den, als stabil angenommenen, Festpunkten zu bestimmen. Dabei können diverse Vermessungsmethoden wie zum Beispiel: Nivellement, Triangulation, Distanzmessung, Lotung, Inklinometer oder GNSS, je nach den projektspezifischen Ansprüchen, in Betracht gezogen werden. Aus den beobachteten Messgrössen werden mit der Methode der kleinsten Quadrate in einer geodätischen Ausgleichung Koordinaten berechnet. Die Koordinaten werden dann statistisch analysiert, um auf Grund der empirischen Genauigkeit signifikante Deformationsvektoren aus zwei zeitlich verschiedenen Messungen zu bestimmen.

Die Interpretation und Kontrolle der Deformationsvektoren gestaltet sich aufgrund von Zahlen anspruchsvoll. Eine dreidimensionale Visualisierung der Deformationsvektoren auf einem Geländemodell vereinfacht die Kontrolle für die geodätische Fachperson und die Interpretation für die geologische Fachperson.

---

## Benutzerhandbuch {#section3}

Entdecke die vielfältigen Tools und Funktionen, die DEFVIS bietet. Klicke auf die Links unten, um zu den einzelnen Seiten zu gelangen und mehr über ihre Funktionen zu erfahren:

| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **[Home](home.html):** | ist die Startseite der App, wo Du Dich orientieren und weitere Schritte planen kannst |
| **[Registrieren](register.html):** | hier kannst Du ein neues Benutzerkonto erstellen, um alle Funktionen der App nutzen zu können |
| **[Anmelden](login.html):** | melde Dich mit deinem Benutzerkonto an, um Zugriff auf Deine Projekte zu erhalten |
| **[Menü](main_view.html):** | ist die zentrale Ansicht Deiner App, wo Du Projekte verwalten und Daten visualisieren kannst |
| **[Projekt erstellen](create_project.html):** | beginne ein neues Projekt und füge Daten hinzu, um sie zu analysieren |
| **[Projekt laden](load_project.html):** | lade ein vorhandenes Projekt, um fortzufahren oder es zu bearbeiten |
| **[Session erfassen](capture_session.html):** | erfasse neue Sessionen für Dein aktuelles Projekt |
| **[Ansichten](current_project.html):**| sehe die Daten in Deinem ausgewählten Projekt ein |
| **[Abmelden](logout.html):** | melde Dich von deinem Benutzerkonto ab, wenn du die App verlassen möchtest |

---

## Verwendete Ressourcen {#section5}

Unsere App-Datenbank wird mit Benutzerdaten gefüllt und zur korrekten Darstellung verwenden wir <a href="https://threejs.org/" target="_blank">three.js</a>. Die Hintergrundkarte beziehen wir von swisstopo.ch (Situationsplan farbig).

### Messdaten

Die Messdaten werden von den Nutzern in Sessionen zur Verfügung gestellt und in einer zentralen SQLite-Datenbank verwaltet (siehe [www.sqlite.org](https://www.sqlite.org/)).

### Tabelle

In einer Tabelle werden die Punktverschiebungen (in mm) zwischen den gewählten Sessionen dargestellt. Die Verschiebungen werden aus der Differenz **neu - alt** berechnet. Durch Klick auf eine Punktnummer wird die 2D oder 3D Ansicht geladen.

### 2D-Karte

Die Messdaten und Verschiebungen\* werden durch _openlayers_ (siehe <a href="https://openlayers.org/" target="_blank">openlayers.org</a>) dargestellt. Um die Verschiebungen auf der Karte besser sichtbar zu machen, werden sie mit dem Faktor **1000** multipliziert.

Als Hintergrundkarte wird die **Landeskarte farbe 1:10'000** von ©swisstopo verwendet (siehe <a href="https://www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10" target="_blank">www.swisstopo.admin.ch/de/landeskarte-swiss-map-raster-10</a>). Die Einbindung der Karte erfolgt als Web-Map-Service mit folgenden Parametern.

| Attribut             | Wert                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| source.url           | https://wms.geo.admin.ch/                                                                          |
| source.crossOrigin   | "anonymous"                                                                                        |
| source.attributions  | <a href="http://www.geo.admin.ch/internet/geoportal/en/home.html" target="_blank">geo.admin.ch</a> |
| source.projection    | "EPSG:2056"                                                                                        |
| source.params.LAYERS | "ch.swisstopo.landeskarte-farbe-10"                                                                |
| source.params.FORMAT | "image/jpeg"                                                                                       |
| source.serverType    | "mapserver"                                                                                        |

## 3D-Modell

Die dreidimensionale Darstellung der Punkte und der Vektoren erfolgt durch _three.js_ (siehe <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank">threejs.org/docs</a>). Die Überwachungspunkte werden als Sphere (Kugel) dargestellt. Die Verschiebungen in Ost, Nord und Höhe werden durch TubeGeometries (Röhren) dargestellt.

Das Hintergrundmodell wird derzeit noch nicht automatisch erstellt. Das Modell, welches in der Web-App verwendet wird, wurde durch das QGIS-Plugin _Qgis2threejs_ [<a href="https://github.com/minorua/Qgis2threejs" target="_blank">github.com/minorua</a> vorprozessiert. Um die Orientierung auf dem Geländemodell zu ermöglichen, wurde die Landeskarte aus der 2D-Darstellung auf das Modell projiziert.

---

## Ausblick von DEFVIS {#section6}

### Zeitreihenanalyse

Die Einbindung einer Zeitreihenanalyse würde den Benutzern ermöglichen, Positionsänderungen im Laufe der Zeit genauer zu verfolgen. Dies könnte durch die Berücksichtigung von Temperaturänderungen oder anderen meteorologischen Einflüssen geschehen.
Bereits jetzt wird beim Session <a href="https://fabianruefenacht.github.io/6230_FRNMLW/capture_session.html">Session erfassen</a> ein Zeitstempel erfasst, sodass man diese Information einer Session zuweisen und somit in einer Zeitreihenanalyse darstellen könnte.

### Farbcodierte Punkte

Eine weitere mögliche Erweiterung für Benutzer wäre, Schwellwerte für jedes Projekt festzulegen. Punkte, die signifikante Bewegungen aufweisen, könnten anders eingefärbt oder markiert werden, um sofortige Aufmerksamkeit zu erregen.

### 2D-Balken neben 3D-Vektoren

Die Grösse eines Vektors im dreidimensionalen Raum ist schwierig zu vergleichen, insbesondere aufgrund von Perspektive und Entfernung. Um dieses Problem anzugehen, könnte ein 2D-Balkendiagramm neben den Vektoren platziert werden. Dadurch erhalten Benutzer ein Verhältnis zu weiter entfernten oder näheren Punkten und können die Größenverhältnisse besser einschätzen.

### vollständige 3D-Karte

Die Erstellung einer vollständigen 3D-Karte der Schweiz stellt uns vor Herausforderungen. Es wäre sinnvoll, die Karte zukünftig durch einen FME-Prozess vorzubereiten und anschliessend zu komprimieren, um sowohl die Auflösung der Karte als auch die Kompression der Kartendaten zu optimieren. Sobald ein geeigneter Prozessablauf für diesen Schritt gefunden ist, kann die Karte weltweit erweitert werden.

### Erweiterung des Sprachpakets

Die App DEFVIS ist derzeit nur auf Deutsch verfügbar. Zukünftig wäre es sinnvoll, die Web-App in mehreren Sprachen anzubieten, darunter Englisch, Französisch und Italienisch, um eine breitere Nutzerbasis anzusprechen und die Benutzerfreundlichkeit zu verbessern. Dies würde es internationalen Nutzern ermöglichen, die App in ihrer bevorzugten Sprache zu nutzen, was die Zugänglichkeit und Akzeptanz erheblich steigern könnte.

---

[zurück nach ganz oben](index.html)
