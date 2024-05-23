**Projekt Feedback GitHub Pages:** DEFVIS

**GitHub Projekt:** Fabian Rüfenacht, Nathan Matzinger, Lucas Wunderli

- https://github.com/FabianRuefenacht/6230_FRNMLW
- https://fabianruefenacht.github.io/6230_FRNMLW/

**README**: Einleitung zur Installation und Projekt ergänzen mit einem Beschrieb, was das Repository bietet mit einem klaren Verweis auf die GitHub Pages. Dann ergänzen mit den Systemanforderungen mit den genutzten Technologien in Frontend und Backend.

- Vergleicht, ob die Angaben zur Architektur auf der GitHub Pages mit den Frontend Backend Angaben auf GitHub übereinstimmt.
- **done, Versionen in Readme ergänzt** Ab welcher Python, Node Version etc. wird das Projekt unterstützt oder welche werden benötigt?
- **done** About (oben rechts) ergänzen mit Kurzbeschrieb und GitHub Pages Link
- **done** Titel _6230_FRNMLW_ in Projektnamen ändern

Code Organisation:

- **done, beschrieben was es macht** Unter Schnellinstallation fehlt die Beschreibung des Scritps _install.js_
- Code ist gut strukturiert jedoch kaum kommentiert.

**done, erklärt wofür die Daten sind und wie sie verwendet werden können** Daten: Ist der Ordner _test_data_ final? ev in _data_ unbenennen. Hier fehlt ein README zu den Daten und Angaben zu den aufgeführten Datensätzen und zur Datennutzung.

**GitHub Pages:**

<!-- **Allgemein**: Gute Übersicht zum Projekt, es fehlt eine grafische Übersicht der implementierten und geplanten Features. Zu den drei Claims der Hauptfeatures Verwaltung, Visualisierung und Überwachung, könnte man genauer aufzeigen, wie diese momentan erfüllt werden und welche Features in Zukunft hinzukommen und den Prototypen ergänzen. -->

<!-- - Auf Formulierungen wie *grossartig* und *ohne Dich zu überfordern* verzichten. Das eine erhöht die Erwartungen oder scheint ironisch und das Zweite ist für User nicht auf Augenhöhe formuliert. -->

<!-- - Reflektion einführen -->

- **was ist damit gemeint? es gibt ja schritt für schritt anleitung** Workflow einführen (Flussdiagramm oder eine aktualisierte Version aus dem Konzept verwenden, ev kennzeichnen was umgesetzt und was geplant ist.)
- Literatur Übersicht am Ende oder geeigneter Stelle einfügen

Kommentare zu den einzelnen Pages/Abschnitten:

<!-- - Angewandte Methoden: sehr knapp.

  - mit einer Illustration ergänzen, wo sinnvoll mit einer Formel und zusätzlich mit Literaturangaben für die interessierten User. Sowie aufzeigen, wo im Prozess der Deformationsmessung Euer Tool die User unterstützt.
  - Was ist genau anspruchsvoll bei der Interpretation und Kontrolle der Deformationsvektoren? Und inwiefern vereinfacht die 3D Visualisierung die Interpretation? Dies sollte erweitert werden, damit verständlicher wird, wie Euer Projekt dies unterstützt. -->

- Architektur:

  - **done** Bildbeschriftung viel zu klein und die Pfeile zu dominant. Pfeil von User mit den Punktdaten zur Auswertung nicht ganz klar. Ev. die Pfeile beschriften.
  - **done** Backend-Frontend Kommunikation mit Axios und FastAPI genauer erläutern.
  - **done** Datenbank ist nur die _points_ Tabelle genauer beschriftet. Hier wäre eine Einleitung zusätzlich noch nützlich, sowie die Beschreibung aller Tabellen.

- Benutzerhandbuch:
  <!-- - Hier könnte man auf eine Seite untereinander das Registrieren und Einloggen zusammenfassen, sowie Projekt erstellen, laden und Session erfassen, so wird der Lesefluss weniger unterbrochen und User können direkt die einzelnen Schritte durchscrollen -->

  <!-- - Da das Höhenmodell nicht automatisch online geladen wird, benötigt das Benutzerhandbuch noch eine Anleitung zu, wie ein Höhenmodell von einem anderen Gebiet aufbereitet und integriert wird. -->

- Ressourcen:

  <!-- - Ergänzen mit Literaturangaben, respektive Daten-, Software- und Literatur als Quellen verlinken und aufführen. -->

  - Die Aufführung und Ziel sowie Hierarchie der Unterabschnitte sind nicht ganz eindeutig. Sind nun die verwendeten Ressourcen aufgeführt oder wie die _verwendeten Ressourcen_ verwendet werden?

- Ausblick:
  <!-- - Einleitung/Text vor der nächsten Abschnitt mit Titel verwenden -->
  - **ist ja bereits vorhanden, wo nötig..** Feature Übersicht als Grafik mit den erstellten und geplanten Features einfügen
  - Reflektion/Diskussion vor Ausblick oder im Ausblick einfügen

**Visualisierung und weitere Kommentare**

<!-- - **den Satz einfach entfernen** Die 3D-Visualisierung ermöglicht weder eine _effiziente_ noch _effektive_ visuelle Datenanalyse - solche Aussagen werden allenfalls für das Marketing gebraucht, sind aber schnell entlarvt, wenn nicht tatsächliche entweder eine Untersuchung der Effizienz und Effektivität oder das Abstützen auf Literatur vorhanden ist -->

- spezifisch
  - **und was ist das Fazit?** die 3D-Elemente der Visualisierung werden je nach Perspektive unterschiedliche gelesen/interpretiert - 2D-Balken daneben zu stellen wäre nur bedingt eine Lösung
  - **und was soll das heissen???** Navigation ist immer ineffizienter als Blickvergleich
  - **done (Kugel kleiner gemacht)** die rote Kugel in der Mitte macht den Startpunkt der Vektoren unleserlich bzw. es ist unklar, wo genau der Verschiebungsvektor startet
- **was ist genau das Problem?!?**_wichtig_: Visualisierungen sollten nie nur Dekoration sein, wenn eine Visualisierung die genaue visuelle Erfassung der Werte (was hier das Ziel ist) erschwert oder gar verunmöglicht, dann sollte eine andere Form der Visualisierung gefunden oder die Visualisierung weggelassen werden
- **done** Die Punktbeschriftungen im Viewer sind zu klein
- **done** Was ist der Zweck der schwarzen Umrandung der roten Punkte?
- **ist das nicht selbstverständlich?!?**Was bedeutet die blaue Farbe in der Liste links?
- **done** Legenden fehlen
- schlichtes, klares Layout - konsequentere Anwendung der Gestaltprinzipien wäre hilfreich für intuitivere Interpretation des Layouts
