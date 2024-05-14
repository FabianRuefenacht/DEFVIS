# 6230_FRNMLW

Server Client Projekt für eine Geodateninfrastruktur DEFVIS im Rahmen des Moduls 4230 und 6230

- **Frontend:** Next.js, OpenLayers, Three.js und tailwindcss
- **Backend:** FastAPI, SQLite

GitHub Pages: https://fabianruefenacht.github.io/6230_FRNMLW/

## Requirements

- [Git](https://git-scm.com/)
- IDE wie [Visual Studio Code](https://code.visualstudio.com/)
- [Anaconda Distribution](https://www.anaconda.com/products/distribution)
- Node.js und npm ([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))

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
Um die Installation und den Start der Web-App zu vereinfachen wurden zwei JavaScirpt-Dateien erstellt, welche die meiste Arbeit abnehmen. Falls die Schnellinstallation fehlschlagen sollte, verwenden Sie bitte die ausführlichere Anleitung (weiter unten).

```shell
conda create -n defvis python=3.11 pip
```

```shell
conda activate defvis
```

```shell
node install.js
```

### Schnellstart

```shell
conda activate defvis
```

```shell
node run.js
```
### Starte im Browser
```
http://localhost:3000
```

## Ausführliche Installationsanleitung
### Frontend installieren

Öffne ein Terminal (Command Prompt in VS Code) und wechsle in den _client_ Ordner in diesem Projekt

1  Verzeichnis öffnen

   Öffnen Sie die Commandprompt und navigieren Sie in den Ordner frontend
```shell
cd frontend
```
2  Installation der Bibliotheken
```shell
npm install
```
3  Start des Frontends
```shell
npm start
```
4  Vergewissern Sie sich, dass die Web-App läuft

Geben Sie folgende URL im Webbrowser ein:
```shell
http://localhost:3000/
```


### Backend installieren

Öffne ein Terminal und wechsle in den _backend_ Ordner.

1. Virtuelle Umgebung für Python mit allen Requirements in der `requirements.txt` Datei aufsetzen.
   
1.1  Verzeichnis öffnen
   
   Öffnen Sie die Commandprompt (Anaconda Prompt) und navigieren Sie in den Ordner backend
```shell
cd path/to/backend
```
1.2  Installation der Python-Bibliotheken
```shell
conda create --name defvis python=3.9 --file app/requirements.txt
```

2. Backend ausführen, virtuelle Umgebung starten und server _uvicorn_ starten. Öffne http://localhost:8000/docs im Browser und verifiziere, ob das Backend läuft.
   
2.1  In den Ordner backend navigieren
```shell
cd backend
```
2.2  Conda-environment aktivieren
```shell
conda activate defvis
```
2.3  Bachend ausführen
```shell
python main.py
```
2.4  Verifizieren ob das backend läuft. Öffnen Sie im Browser die URL:
```shell
http://localhost:8000/docs
```

## API Dokumentation

Fast API kommt mit vorinstallierter Swagger UI. Wenn der Fast API Backen Server läuft, kann auf die Dokumentation der API über Swagger UI auf http://localhost:8000/docs verfügbar.
