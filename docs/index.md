# DEFVIS, die WebApp für Ingenieure

<video controls autoplay loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/teaser.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

## Überblick der Web-App DEFVIS

Die Web-App **DEFVIS** bietet Dir folgende Tools:

- **Deformationsmessungen verwalten**: Verwalte und analysiere Deformationsdaten effizient durch intuitive Eingabemasken und Projektübersichten.
- **Dreidimensionale Verschiebungen visualisieren**: Visualisiere die Bewegungen von Punkten in 3D, um komplexe geophysikalische Veränderungen besser zu verstehen.
- **Wirkungsvolle Überwachung und Analyse**: Überwache geophysikalische Veränderungen kontinuierlich und analysiere die Daten, um fundierte Entscheidungen zu treffen.

### Grafische Übersicht der implementierten und geplanten Features

| Feature                      | Status        | Beschreibung                                                                                                                                            |
| ---------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deformationsmessungen        | Implementiert | Verwalten von Messdaten, Hinzufügen neuer Sessions, und Organisieren von Projekten.                                                                     |
| 3D-Visualisierung            | Implementiert | Darstellung von Verschiebungen in einer dreidimensionalen Ansicht, inklusive Fehlervektoren und detaillierten Punktinformationen.                       |
| Zeitreihenanalyse            | Geplant       | Zukünftige Erweiterung zur Verfolgung von Positionsänderungen über die Zeit, inklusive Berücksichtigung von Temperatur- und Wetterdaten.                |
| Farbcodierte Punkte          | Geplant       | Möglichkeit, Schwellwerte festzulegen und signifikante Bewegungen durch Farbcodierung hervorzuheben.                                                    |
| 2D-Balkendiagramme           | Geplant       | Ergänzung der 3D-Vektoren mit 2D-Balkendiagrammen, um Grössenverhältnisse und Bewegungen klarer zu visualisieren.                                       |
| Vollständige 3D-Karte        | Geplant       | Erstellung einer vollständigen 3D-Karte der Schweiz, vorbereitet durch einen FME-Prozess zur Optimierung der Auflösung und Kompression der Kartendaten. |
| Erweiterung des Sprachpakets | Geplant       | Einführung weiterer Sprachoptionen wie Englisch, Französisch und Italienisch, um eine breitere Nutzerbasis zu erreichen.                                |

Detailliertere Infos, was DEFVIS in Zukunft noch bieten wird, findest Du unter <a href="https://fabianruefenacht.github.io/DEFVIS/index.html#section6">Ausblick</a>.

ℹ️ Um die Web-App optimal zu nutzen, empfiehlt sich ein Laptop oder Desktopmonitor mit einer Mindestgröße von 15 Zoll.

---

## Wie wird die App installiert {#section1}

hier gehts zur [Schnellinstallation](https://github.com/FabianRuefenacht/DEFVIS/?tab=readme-ov-file#schnellinstallation){:target="\_blank"}

---

## Features von DEFVIS {#section2}

Erkunde die Funktionen von DEFVIS. Weitere Informationen und detaillierte Anleitungen zu den Funktionen findest Du alles im <a href="https://fabianruefenacht.github.io/DEFVIS/index.html#section3">Benutzerhandbuch</a>.

### 3D-Ansicht

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/3D.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Unsere App bietet eine breite Palette von Funktionen, die Dir vielfältige Möglichkeiten bieten. Eine herausragende Funktion ist der 3D-Viewer, der es Dir ermöglicht, Fehlervektoren in einer dreidimensionalen Ansicht zu betrachten. Durch diese Darstellung in Bezug auf das Gelände kannst Du nicht nur 2D-Informationen erhalten, sondern auch den Fehlervektor im Kontext einer Oberfläche visualisieren. Dies ermöglicht es Dir, einen direkten Bezug herzustellen, beispielsweise um zu sehen, wie ein Punkt am Hang abrutscht.

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

Die Interpretation und Kontrolle der Deformationsvektoren gestaltet sich aufgrund von numerischen Werten anspruchsvoll, weil gute Kenntnisse über die Orientierung des Koordinatensystems vorhanden sein müssen. Eine dreidimensionale Visualisierung der Deformationsvektoren auf einem Geländemodell vereinfacht die Kontrolle für die geodätische Fachperson und die Interpretation für die geologische Fachperson massiv. Genau diese Prozesse einer Deformationsmessung werden durch den DEVVIS vereinfacht und möglichst Benutzerfreundlich eingebunden.

---

## Benutzerhandbuch {#section3}

Entdecke die vielfältigen Tools und Funktionen, die DEFVIS bietet. Klicke auf die Links unten, um zu den einzelnen Seiten zu gelangen und mehr über ihre Funktionen zu erfahren:

| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **[Home](home.html):** | ist die Startseite der App, wo Du Dich orientieren und weitere Schritte planen kannst |
| **[Benutzerverwaltung](user.html):** | hier wird erklärt wie Du Benutzerkonto erstellst, dich an- und auch wieder abmeldest |
| **[Menü](main_view.html):** | ist die zentrale Ansicht Deiner App, wo Du Projekte verwalten und Daten visualisieren kannst |
| **[Projektverwaltung](projektverwaltung.html):** | hier erfährst du alles über die Projektverwaltung und wie du Sessionen erfasst |
| **[Ansichten](current_project.html):**| sehe die Daten in Deinem ausgewählten Projekt ein |

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

Das Hintergrundmodell wird derzeit noch nicht automatisch erstellt. Das Modell, welches in der Web-App verwendet wird, wurde durch das QGIS-Plugin _Qgis2threejs_ <a href="https://github.com/minorua/Qgis2threejs" target="_blank">github.com/minorua</a> vorprozessiert. Um die Orientierung auf dem Geländemodell zu ermöglichen, wurde die Landeskarte aus der 2D-Darstellung auf das Modell projiziert.

---

## Projektanalyse {#reflektion}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

### Reflektion

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

### Diskussion

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

### Fazit

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

---

## Ausblick von DEFVIS {#section6}

In diesem Kapitel werden zukünftige Erweiterungen und Verbesserungen, die DEFVIS optimierter und benutzerfreundlicher machen könnten erläutert. Diese möglichen Entwicklungen zielen darauf ab, die Funktionalität der App zu erweitern. Von der Einführung fortgeschrittener Analysetools über visuelle Verbesserungen bis hin zur sprachlichen Vielfalt gibt es zahlreiche Ideen, die DEFVIS in der Zukunft bereichern könnten.

### Zeitreihenanalyse

<img src="screenshots/ausblick/zra.png" alt="ZRA" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

Die Einbindung einer Zeitreihenanalyse würde den Benutzern ermöglichen, Positionsänderungen im Laufe der Zeit genauer zu verfolgen. Dies könnte durch die Berücksichtigung von Temperaturänderungen oder anderen meteorologischen Einflüssen geschehen.
Bereits jetzt wird beim <a href="https://fabianruefenacht.github.io/DEFVIS/projektverwaltung.html#erfassen">Session erfassen</a> ein Zeitstempel erfasst, sodass man diese Information einer Session zuweisen und somit in einer Zeitreihenanalyse darstellen könnte.
Wenn ein Punkt ausgewählt ist, kann durch das Klicken des Zeitreihenanalyse-Buttons die Zeitreihenanalyse geladen werden mit den dazugehörigen Punktinformationen.

### Farbcodierte Punkte

<img src="screenshots/ausblick/schwellwert.png" alt="Schwellwert" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

Eine weitere mögliche Erweiterung für Benutzer wäre, Schwellwerte für jedes Projekt festzulegen. Punkte, die signifikante Bewegungen aufweisen, könnten anders eingefärbt oder markiert werden, um sofortige Aufmerksamkeit zu erregen.

### 2D-Balken neben 3D-Vektoren

Die Grösse eines Vektors im dreidimensionalen Raum ist schwierig zu vergleichen, insbesondere aufgrund von Perspektive und Entfernung. Um dieses Problem anzugehen, könnte ein 2D-Balkendiagramm neben den Vektoren platziert werden. Dadurch erhalten Benutzer ein Verhältnis zu weiter entfernten oder näheren Punkten und können die Größenverhältnisse besser einschätzen.

### vollständige 3D-Karte

Die Erstellung einer vollständigen 3D-Karte der Schweiz stellt uns vor Herausforderungen. Es wäre sinnvoll, die Karte zukünftig durch einen FME-Prozess vorzubereiten und anschliessend zu komprimieren, um sowohl die Auflösung der Karte als auch die Kompression der Kartendaten zu optimieren. Sobald ein geeigneter Prozessablauf für diesen Schritt gefunden ist, kann die Karte weltweit erweitert werden.

### Erweiterung des Sprachpakets

Die App DEFVIS ist derzeit nur auf Deutsch verfügbar. Zukünftig wäre es sinnvoll, die Web-App in mehreren Sprachen anzubieten, darunter Englisch, Französisch und Italienisch, um eine breitere Nutzerbasis anzusprechen und die Benutzerfreundlichkeit zu verbessern. Dies würde es internationalen Nutzern ermöglichen, die App in ihrer bevorzugten Sprache zu nutzen, was die Zugänglichkeit und Akzeptanz erheblich steigern könnte.

---

[zurück nach ganz oben](index.html)
