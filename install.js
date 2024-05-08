const { exec } = require('child_process');
const path = require('path');

const frontend = './frontend';
const backend = './backend';
const requirements = 'requirements.txt'; // Relativer Pfad zur requirements.txt-Datei im Backend-Verzeichnis

const projname = "test";

// Funktion zum Ausführen von Befehlen und Anzeigen von Ausgaben
function executeCommand(command, cwd, description) {
  console.log(`Starte Befehl: ${description}`);
  console.log(`Befehl: ${command}`);
  
  return new Promise((resolve, reject) => {
    const childProcess = exec(command, { cwd });
    
    childProcess.stdout.on('data', (data) => {
      console.log(`[stdout] ${data}`);
    });
  
    childProcess.stderr.on('data', (data) => {
      console.error(`[stderr] ${data}`);
    });
  
    childProcess.on('close', (code) => {
      console.log(`Befehl ${description} beendet mit Exit-Code ${code}`);
      if (code === 0) {
        resolve();
      } else {
        reject(`Fehler beim Ausführen des Befehls ${description}`);
      }
    });
  });
}

// Backend-Befehle nacheinander ausführen
executeCommand(`pip install -r ${path.join(__dirname, backend, requirements)}`, backend, 'Installiere Python-Module')
  .then(() => {
    // Frontend-Befehle ausführen
    return executeCommand(`npm install`, frontend, 'Installiere npm-Pakete für Frontend');
  })
  .catch((error) => {
    console.error(error);
  });
