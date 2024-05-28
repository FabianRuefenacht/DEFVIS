[Gehe zurück zur Hauptseite.](index.html)

# Angewandte Methoden

<ul>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/methoden.html#prozess">Prozess der Deformationsmessung</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/methoden.html#herausforderung">Herausforderung bei der Interpretation und Kontrolle</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/methoden.html#unterstuetzung">Unterstützung durch DEFVIS</a></li>
<li><a href="https://fabianruefenacht.github.io/DEFVIS/methoden.html#literatur">Literatur</a></li>
</ul>

---

Deformationsmessungen sind ein wesentlicher Bestandteil der Ingenieurvermessung und Geodäsie. Ziel ist es, die Verschiebung von Überwachungspunkten im Verhältnis zu stabilen Referenzpunkten zu bestimmen. Dabei kommen verschiedene Vermessungsmethoden zum Einsatz, darunter:

- **Nivellement**
- **Triangulation**
- **Distanzmessung**
- **Lotung**
- **Inklinometer**
- **GNSS (Global Navigation Satellite System)**

---

## Prozess der Deformationsmessung {#prozess}

(1.) **Datenerfassung**:

- **Nivellement**: Präzise Höhenmessung zur Erfassung von Höhenunterschieden.
- **Triangulation**: Bestimmung von Positionen durch Winkelmessungen in einem Netz von Punkten.
- **Distanzmessung**: Ermittlung von Entfernungen zwischen Punkten mittels elektronischer Distanzmessgeräte (Tachymeter).
- **Lotung**: Vertikale Abweichungsmessung von der Lotrichtung.
- **Inklinometer**: Messung von Neigungswinkeln zur Bestimmung von Verschiebungen in Strukturen.
- **GNSS**: Globale Positionsbestimmung mittels Satellitensignalen.

(2.) **Datenverarbeitung**:
Die beobachteten Messgrössen werden mit der Methode der kleinsten Quadrate in einer geodätischen Ausgleichung verarbeitet, um präzise Koordinaten zu berechnen.

**Formel der Methode der kleinsten Quadrate**:

$$
X = (A^T P A)^{-1} A^T P L
$$

- `X`: Vektor der Unbekannten (Koordinaten)
- `A`: Designmatrix
- `P`: Gewichtsmatrix
- `L`: Beobachtungsvektor

(3.) **Analyse und Interpretation**:
Die berechneten Koordinaten werden statistisch analysiert, um signifikante Deformationsvektoren zu bestimmen. Dies geschieht durch den Vergleich von Messungen aus verschiedenen Zeitpunkten.

---

## Herausforderungen bei der Interpretation und Kontrolle {#herausforderung}

**Die Interpretation und Kontrolle der Deformationsvektoren sind anspruchsvoll, da:**

- Gute Kenntnisse über die Orientierung des Koordinatensystems erforderlich sind.
- Numerische Werte allein schwer zu interpretieren sind.

**Die dreidimensionale Visualisierung der Deformationsvektoren auf einem Geländemodell erleichtert diese Aufgaben erheblich, indem sie:**

- Eine intuitive Darstellung der Verschiebungen ermöglicht.
- Eine schnellere Erkennung von Mustern und Anomalien erlaubt.
- Die Kommunikation der Ergebnisse zwischen geodätischen und geologischen Fachpersonen verbessert.

---

## Unterstützung durch DEFVIS {#unterstuetzung}

Das Tool DEFVIS unterstützt die Nutzenden im gesamten Prozess der Deformationsmessung:

- **Datenintegration**: Verschiedene Vermessungsmethoden können in das System integriert werden.
- **3D-Visualisierung**: Die Ergebnisse werden auf einem dreidimensionalen Geländemodell dargestellt, was die Interpretation und Kontrolle der Deformationsvektoren vereinfacht.

**Illustration der Prozesse**:

<img src="screenshots/illustration.png" alt="Illustration" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

<sub>https://tu-dresden.de/bu/umwelt/geo/gi/ig/ressourcen/dateien/lehrveranstaltungen/geodaesie/master_ig/BauWerkUeberw.pdf?lang=de [22. Mai 2024]</sub>

Die Illustration veranschaulicht den Prozess der messtechnischen Überwachung. Durch die Integration verschiedener Ansichten, insbesondere der 3D-Ansicht, bietet DEFVIS eine benutzerfreundliche Plattform, die die Komplexität der Deformationsmessung und -interpretation reduziert. Diese Integration ermöglicht es den Anwendern, bereits nach wenigen Messungen zu beurteilen, ob konstruktive Massnahmen erforderlich sind oder Massnahmen- und Notfallkonzepte. Somit wird auch der wirtschaftliche Aspekt dabei berücksichtigt. Im Vergleich zu einer Beurteilung in einer 2D-Ansicht kann mit der 3D-Ansicht von DEFVIS ein Bezug zum Höhenmodell erstellt werden. So ist etwa gut sichtbar, ob sich ein Punkt durch natürliche Einflüsse oder durch sonstige Einflüsse bewegt.

---

## Literatur {#literatur}

Name, Vorname (Jahreszahl): _Titel._ Untertitel, Auflage. Verlagsort: Verlag (= Reihe).

Methode der kleinsten Quadrate (MdkQ):
Wikipedia (2024). _Methode der kleinsten Quadrate._ https://de.wikipedia.org/wiki/Methode_der_kleinsten_Quadrate (28 Mai 2024).

Triangulation:
DETREKOI, A. (1976): _NETZAUSGLEICHUNG BEI INGENIEURGEODÄTISCHEN DEFORMATIONSMESSUNGEN._ Technische Universität Budapest: Geodätisches Institut, Lehrstuhl für Höhere Geodäsie.

Lotung:
Knoblach, Stefan: _Neue Methoden der Schachtlotung und Richtungsübertragung._ Kurzexposé. Technische Universität Dresden: Geodätisches Institut.

GNSS:
Semmling, Aaron Maximilian, Leister, Vera, Saynisch, Jan, Zus, Florian, Heise, Stefan, Wickert Jens (2016): _A Phase-Altimetric Simulator: Studying the Sensitivity of Earth-Reflected GNSS Signals to Ocean Topography._ IEEE Transactions on Geoscience and Remote Sensing.

Nivellement:
Möser, Michael, Fuhrland, Matthias (2006): _Ausgewählte Sensorik und Methodik zur Höhenbestimmung bei der Überwachung gefährdeter Objekte._ Technische Universität Dresden: Geodätisches Institut, Ingenieurgeodäsie.

---

[Zurück nach ganz oben.](methoden.html)
