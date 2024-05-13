```
hier der Video-Teaser
```

Die Web-App **3D-Deform** bietet Dir folgende Tools:

- Deformationsmessungen zu verwalten
- Dreidimensionale Verschiebungen zu visualisieren
- Wirkungsvolle Überwachung und Analyse von geophysikalischen Veränderungen in Echtzeit

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

## Features der App {#section2}

Unsere App bietet eine breite Palette von Funktionen, die den Nutzern vielfältige Möglichkeiten bieten, ohne sie zu überfordern. Eine herausragende Funktion ist der 3D-Viewer, der es den Benutzern ermöglicht, Fehlervektoren in einer dreidimensionalen Ansicht zu betrachten. Durch diese Darstellung in Bezug auf das Gelände können Benutzer nicht nur 2D-Informationen erhalten, sondern auch den Fehlervektor im Kontext einer Oberfläche visualisieren. Dies ermöglicht es, einen direkten Bezug herzustellen, beispielsweise um zu sehen, wie ein Punkt am Hang abrutscht.

---

## Benutzung der Web-App {#section3}

Entdecke die vielfältigen Tools und Funktionen, die sie bietet. Klicke auf die Links unten, um zu den einzelnen Seiten zu gelangen und mehr über ihre Funktionen zu erfahren:

**[Home](home.html):**

- ist die Startseite der App, wo Du Dich orientieren und weitere Schritte planen kannst

**[Registrieren](register.html):**

- hier kannst Du ein neues Benutzerkonto erstellen, um alle Funktionen der App nutzen zu können

**[Anmelden](login.html):**

- melde Dich mit deinem Benutzerkonto an, um Zugriff auf Deine Projekte zu erhalten

**[Hauptansicht](main_view.html):**

- ist die zentrale Ansicht Deiner App, wo Du Projekte verwalten und Daten visualisieren kannst

**[Projekt erstellen](create_project.html):**

- beginne ein neues Projekt und füge Daten hinzu, um sie zu analysieren.

**[Projekt laden](load_project.html):**

- lade ein vorhandenes Projekt, um fortzufahren oder es zu bearbeiten

**[Session erfassen](capture_session.html):**

- erfasse neue Sessionen für Dein aktuelles Projekt

**[Geladenes Projekt](current_project.html):**

- sehe die Daten in Deinem ausgewählten Projekt ein

**[Abmelden](logout.html):**

- melde Dich von deinem Benutzerkonto ab, wenn du die App verlassen möchtest

---

## Methoden zum Produkt {#section4}

Die Entwicklung der App basierte auf einer Reihe von bewährten Methoden, darunter:

- ...
- ...
- ...

---

## Verwendete Ressourcen {#section5}

Unsere App-Datenbank wird mit Benutzerdaten gefüllt und zur korrekten Darstellung verwenden wir three.js. Die Hintergrundkarte beziehen wir von swisstopo.ch (Situationsplan farbig).

---

## Ausblick der App {#section6}

### Zeitreihenanalyse

Die Integration einer Zeitreihenanalyse war aus Zeitgründen nicht möglich. Dies würde den Benutzern ermöglichen, Positionsänderungen im Laufe der Zeit genauer zu verfolgen, beispielsweise durch die Berücksichtigung von Temperaturänderungen oder anderen meteorologischen Einflüssen.

### Farbcodierte Punkte

Eine zukünftige Erweiterung könnte die Möglichkeit für Benutzer umfassen, Schwellwerte für jedes Projekt festzulegen. Punkte, die signifikante Bewegungen aufweisen, könnten anders eingefärbt oder markiert werden, um sofortige Aufmerksamkeit zu erregen.

### 2D-Balken neben 3D-Vektoren

Die grösse eines Vektors ist schwierig zu vergleichen. Alleine durch die perspektive reicht oft nicht aus. Deshalb könnte man einen 2D-Balkendiagramm neben den Vektor setzen. So sieht man ein verhältnis zu weiter entfernten oder näheren Punkten.

### API Dokumentation
