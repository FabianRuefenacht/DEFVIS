const { exec } = require('child_process');
const path = require('path');

const frontend = './frontend';
const backend = './backend';

// Plattformunabhängige Pfadkonstruktion
const backendPath = path.join(__dirname, backend);
const frontendPath = path.join(__dirname, frontend);

// Funktion zum Ausführen von Befehlen und Anzeigen von Ausgaben
function executeCommand(command, cwd, description) {
  console.log(`Starte Befehl: ${description}`);
  console.log(`Befehl: ${command}`);
  
  const childProcess = exec(command, { cwd });
  
  childProcess.stdout.on('data', (data) => {
    console.log(`[stdout] ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`[stderr] ${data}`);
  });

  childProcess.on('close', (code) => {
    console.log(`Befehl ${description} beendet mit Exit-Code ${code}`);
  });
}

// Backend-Befehle ausführen
executeCommand(`python ${path.join(backendPath, 'main.py')}`, backendPath, 'Starte Backend');

// Frontend-Befehle ausführen
executeCommand(`npm run dev`, frontendPath, 'Starte Frontend-Entwicklungsmodus');
