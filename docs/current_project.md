[Gehe zurück zur Hauptseite](index.html)

# Ansichten

<ul>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/current_project.html#dreid">3D-Ansicht</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/current_project.html#zweid">2D-Ansicht</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/current_project.html#punktinfo">Punktinformation</a></li>
</ul>

<img src="screenshots/current_project.png" alt="geladenes_Projekt" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

DEFVIS bietet eine Vielzahl von verschiedenen Ansichten der hochgeladenen Punkte. Eine herausragende Funktion ist der 3D-Viewer, der es Dir ermöglicht, Fehlervektoren in einer dreidimensionalen Ansicht zu betrachten. Durch diese Darstellung in Bezug auf das Gelände kannst Du nicht nur 2D-Informationen erhalten, sondern auch den Fehlervektor im Kontext einer Oberfläche visualisieren. Dies ermöglicht es Dir, einen direkten Bezug herzustellen, beispielsweise um zu sehen, wie ein Punkt am Hang abrutscht.
Die Vektoren werden im Bezug zur Hintergrundkarte 1000 mal grösser dargestellt.

---

## 3D-Ansicht {#dreid}

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/3D.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Du kannst die 3D-Ansicht starten, indem Du auf den Button **3D** klickst oder einen Punkt auswählst und auf **3D-Modell laden** klickst. Dadurch wird ein 3D-Modell mit den erfassten Punkten gerendert. Die Punkte zeigen die Fehlerdifferenz zur Nullmessung in den Richtungen E (rot), N (grün) und Höhe (blau) an. Wenn Du die linke Maustaste gedrückt hältst, kannst Du Dich umsehen. Über das Mausrad kannst Du die Zoomstufen ändern. Mit der rechten Maustaste gedrückt bewegst Du Dich durch die Gegend.

Da die 3D-Karten im Verzeichnis /data noch nicht automatisch prozessiert werden, kannst Du selber von einem Ausschnitt ein Modell generieren. Dazu empfiehlt sich die Anleitung unter <a href="https://giscrack.com/how-to-make-a-3d-model-in-qgis-using-the-qgis2threejs-extension" target="_blank">giscrack.com</a>.
Mehr Informationen über das Plugin Qgis2threejs findest Du unter <a href="https://plugins.qgis.org/plugins/Qgis2threejs/#plugin-about" target="_blank">plugins.qgis.org</a>

## 2D-Ansicht {#zweid}

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/2D.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Du kannst die 2D-Ansicht starten, indem Du auf den Button **2D** klickst. Dadurch wird eine 2D-Ansicht mit den erfassten Punkten geladen. Die Punkte zeigen den Fehlervektor (grün) zur Nullmessung an, sodass Du weisst, in welche Richtung sich ein Punkt bewegt. Wenn Du die linke Maustaste gedrückt hältst, kannst Du die Ansicht verschieben. Über das Mausrad oder die Buttons **+** und **-** kannst Du die Zoomstufen ändern. Über den Button rechts oben vom Ansichtsfenster kannst Du die Ansicht auf volle Grösse maximieren und auch wieder minimieren. Rechts unten kannst D u die Quelle der Hintergrundkarte anzeigen lassen. Durch Anklicken eines Punktes erhältst Du weitere Informationen und die Möglichkeit, das 3D-Modell zu laden.

## Punktinformationen {#punktinfo}

<video controls autoplay muted loop style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">
<source src="./videos/punktinfo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

<p></p>

Um die Daten nicht nur visuell zu haben, sondern auch in einer Tabelle, werden aus den Daten der importierten Sessionen die Fehlervektoren in Ost-, Nord-Richtung und Höhe berechnet und in die Tabelle geschrieben. Durch Anklicken eines Punktes zoomst Du automatisch auf den Punkt in der Ansicht.

**_Probleme und Verbesserungsvorschläge_**

- _Der Projektname könnte grösser dargestellt werden, um die Sichtbarkeit zu verbessern._
- _Der Block auf der linken Seite könnte möglicherweise schmaler gemacht oder die Texte schöner formatiert werden, um die Ästhetik zu verbessern._
- _In der 2D-Ansicht könnte ein Nordpfeil implementiert werden._
- _Farbschema der Punktinformationen stimmt nicht mit dem Layout überein._
- _In der 3D-Ansicht könnten die Punkte mit Ihren Namen versehen werden und._

---

<div style="text-align: left; float: left;"><a href="projektverwaltung.html">< Projektverwaltung</a></div>
