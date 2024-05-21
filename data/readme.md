# Testdaten
Die in diesem Ordner vorhandenen Dateien können für den Test der Web-App im Bereich [_Session erfassen_](https://fabianruefenacht.github.io/DEFVIZ/capture_session.html) verwendet werden.

Die Dateien _SiP_Sess*.csv_ enthalten Punktdaten für die jeweiligen Sessionen. Dabei handelt es sich nicht um _echte_ Messdaten. Bei den Punkten handelt es sich um eine Auswahl an frei erfundenen Punkten im Bereich des Geisshorns bei Saas im Prättigau. Die Messungen wurden zwischen den Sessionen mit der Datei _randomize_Sessions.ipynb_ mit einem Noise von maximal 2 cm ausgestattet.

## Eigene Testdaten produzieren
Es muss **eine** _*.csv_-Datei [Nr, E, N, H] erstellt werden. Mit der Datei _randomize_Sessions.ipynb_ kann diese Datei eingelesen werden (variable _file_path_ anpassen). Es werden weitere Dateien mit einem Noise (Variable _noise_ anpassen) erstellt. Die Anzahl an Dateien kann verändert werden (Variable _sessions_ anpassen.).

## Aufbau der vorhandenen Test-Dateien
Die vorhandenen Testdateien enthalten 12 Punkte. Diese sind folgendermassen aufgebaut:

Punktnummer, Ost, Nord, Höhe

Diese Vorlage ist zwingend zu übernehmen. Die Anzahl der Punkte und Sessionen können nach belieben verändert werden.

_WICHTIG:_ Die Punkte müssen im Landeskoordinatensystem der Schweiz vorliegen (LV95, EPGS:2056).
