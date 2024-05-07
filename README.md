# 6230_FRNMLW

Server Client Projekt für eine Geodateninfrastruktur Webportal im Rahmen des Moduls 4230 und 6230

<!-- - **Frontend:** React.js, OpenLayers und MUI
- **Backend:** FastAPI, GeoServer -->

GitHub Pages: https://fabianruefenacht.github.io/6230_FRNMLW/

<!-- Getestet mit Node version 20.11.1, 18.15.0, 16.19.0, openlayers 9.1.0, 7.3.0, 6.4.3 -->

## Requirements

<!-- - [Git](https://git-scm.com/)
- IDE wie [Visual Studio Code](https://code.visualstudio.com/)
- [Anaconda Distribution](https://www.anaconda.com/products/distribution) oder [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
- Node.js und npm ([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)) -->

## Repository lokal klonen

Mit Git in einem Terminal das GitHub Repository ^^App-Name^^ in ein lokales Verzeichnis klonen.

```shell
cd /path/to/workspace
# Clone Repository
git clone git@github.com:FabianRuefenacht/6230_FRNMLW.git
```

### Git Projekt mit Visual Studio Code lokal klonen

Öffne ein neues Visual Studio Code Fenster und wähle unter Start Clone Git Repository. Alternativ öffne die Command Palette in VS Code CTRL+Shift+P (View / Command Palette) und wähle Git: clone. Füge die Git web URL `https://github.com/FabianRuefenacht/6230_FRNMLW` ein und bestätige die Eingabe mit Enter. Wähle einen Ordner in welchen das Repository _geklont_ werden soll.

## Frontend installieren

Öffne ein Terminal (Command Prompt in VS Code) und wechsle in den _client_ Ordner in diesem Projekt

```shell
cd client
# aktiviere node.js (falls nvm genutzt wird)
# nvm use 21.7.1
# install all the node.js dependencies
npm install
# node Projekt ausführen
# npm start ist in package.json definiert
npm start
```

## Backend installieren

Öffne ein Terminal und wechsle in den _backend_ Ordner.

1. Virtuelle Umgebung für Python mit allen Requirements in der `requirements.txt` Datei aufsetzen.

```shell
# Requirements
cd backend
# Füge conda-forge den als Channel in conda hinzu, da sonst nicht alle Pakete installiert werden können.
conda config --add channels conda-forge
# Erstelle ein neues Conda Environment und füge die Python Packges requirements.txt hinzu, requirements.txt befindet sich im Ordner server/app
conda create --name 3dvectors python=3.9 --file app/requirements.txt
```

2. Backend ausführen, virtuelle Umgebung starten und server _uvicorn_ starten. Öffne http://localhost:8000/docs im Browser und verifiziere, ob das Backend läuft.

```shell
cd server
# aktiviere die conda umgebung gdiproject
conda activate gdiproject
# start server auf localhost aus dem Ordner "backend"
uvicorn app.main:app --reload
# Öffne die angegebene URL im Browser und verifiziere, ob das Backend läuft.
```

## API Dokumentation

Fast API kommt mit vorinstallierter Swagger UI. Wenn der Fast API Backen Server läuft, kann auf die Dokumentation der API über Swagger UI auf http://localhost:8000/docs verfügbar.
