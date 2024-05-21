# 6230_FRNMLW

Server Client Projekt für eine Geodateninfrastruktur DEFVIS im Rahmen des Moduls 4230 und 6230

- **Frontend:** Next.js, OpenLayers, Three.js und tailwindcss
- **Backend:** FastAPI, SQLite

GitHub Pages: <a href="https://fabianruefenacht.github.io/DEFVIS/" target="_blank">https://fabianruefenacht.github.io/DEFVIS/</a>

## Requirements

- <a href="https://git-scm.com/" target="_blank">Git</a>
- IDE wie <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
- <a href="https://www.anaconda.com/products/distribution" target="_blank">Anaconda Distribution</a>
- Node.js (Version 20.8.1) und npm (Version 10.1.0) (<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">Node.js und npm herunterladen und installieren</a>)
- Python (Version 3.9.19) (<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">herunterladen</a>)

## Repository lokal klonen

Mit Git in einem Terminal das GitHub Repository 6230_FRNMLW in ein lokales Verzeichnis klonen.

```shell
cd /path/to/workspace
```

```shell
git clone git@github.com:FabianRuefenacht/6230_FRNMLW.git
```

### Git Projekt mit Visual Studio Code lokal klonen

Öffne ein neues Visual Studio Code Fenster und wähle unter Start Clone Git Repository. Alternativ öffne die Command Palette in VS Code CTRL+Shift+P (View / Command Palette) und wähle Git: clone. Füge die Git web URL `https://github.com/FabianRuefenacht/6230_FRNMLW` ein und bestätige die Eingabe mit Enter. Wähle einen Ordner in welchen das Repository _geklont_ werden soll.

## QuickSetup

### Schnellinstallation

Um die Installation und den Start der Web-App zu vereinfachen wurden zwei JavaScirpt-Dateien erstellt, welche die meiste Arbeit abnehmen. Falls die Schnellinstallation fehlschlagen sollte, verwenden Sie bitte die <a href="https://github.com/FabianRuefenacht/6230_FRNMLW/blob/main/README.md#ausf%C3%BChrliche-installationsanleitung" target="_blank">ausführliche Anleitung</a>.

```shell
conda create -n defvis python=3.11 pip
```

```shell
conda activate defvis
```
Installieren der Abhängigkeiten:
```shell
node install.js
```

### Schnellstart

```shell
conda activate defvis
```
Front- und Backend starten:
```shell
node run.js
```

### Starte im Browser

```
http://localhost:3000
```

## Ausführliche Installationsanleitung

### Frontend installieren

Öffne ein Terminal (Command Prompt in VS Code) und wechsle in den _frontend_-Ordner in diesem Projekt

1.  Verzeichnis öffnen

Öffne die Commandprompt und navigiere in den Ordner frontend

```shell
cd frontend
```

2.  Installation der Bibliotheken

```shell
npm install
```

3.  Start des Frontends

```shell
npm start
```

4.  Vergewissere dich, dass die Web-App läuft

Gebe folgende URL im Webbrowser ein:

```shell
http://localhost:3000/
```

### Backend installieren

Öffne ein Terminal und wechsle in den _backend_-Ordner.

Virtuelle Umgebung für Python mit allen Requirements in der `requirements.txt` Datei aufsetzen.

1.  Verzeichnis öffnen

Öffne die Commandprompt (Anaconda Prompt) und navigieren in den Ordner _backend_

```shell
cd path/to/backend
```

2.  Installation der Python-Bibliotheken

```shell
conda create --name defvis python=3.9 --file app/requirements.txt
```

<br />

Backend ausführen, virtuelle Umgebung starten und server starten.

1.  In den Ordner _backend_ navigieren

```shell
cd backend
```

2.  Conda-environment aktivieren

```shell
conda activate defvis
```

3.  Bachend ausführen

```shell
python main.py
```

4.  Verifizieren ob das backend läuft. Öffnen Sie im Browser die URL:

```shell
http://localhost:8000/docs
```

## API Dokumentation

Fast API kommt mit vorinstallierter Swagger UI. Wenn der Fast API Backen Server läuft, kann auf die Dokumentation der API über Swagger UI auf <a href="http://localhost:8000/docs" target="_blank">http://localhost:8000/docs</a> verfügbar.
