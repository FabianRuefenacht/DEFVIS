[Gehe zurück zur Hauptseite](index.html)

# Architektur

Die Web-App DEFVIS basiert auf einer Server-Client-Architektur. Die Schnittstelle zwischen dem Client (frontend) und dem Server (backend) basiert auf FastAPI <a href="https://fastapi.tiangolo.com/" target="_blank">fastapi.com</a>. Als Speichermedium für die Daten dient eine SQLite-Datenbank [<a href="https://www.sqlite.org/" target="_blank">www.sqlite.org</a>.

Die nachfolgende Grafik zeigt die Geodateninfrastruktur schematisch auf und verweist auf die wichtigsten Komponenten der Applikation.

<img src="screenshots/architektur.png" alt="Architektur" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

## Frontend

Die Umsetzung im Frontend wurde mit _next.js_ (<a href="https://nextjs.org/docs" target="_blank">nextjs.org</a>) gemacht. Als Programmiersprache im Frontend wurde _TypeScript_ (<a href="https://www.typescriptlang.org/" target="_blank">www.typescriptlang.org</a>) gewählt. TypeScript (TS) stellt im Gegensatz zu JavaScript (JS) sicher, dass die Datentypen definiert sind, was die Anwendung weniger Fehleranfällig macht. Für die Darstellung im frontend wurde auf _tailwind_ (<a href="https://tailwindcss.com/" target="_blank">tailwindcss.com</a>) gesetzt. Tailwind ist ein CSS-Framework, welches die wichtigsten Styling-Attribute von CSS abdeckt und einwandfrei mit Next.js und TS kombinierbar ist. Die Kommunikation zum Backend wird durch _axios_ (<a href="https://axios-http.com/docs/intro" target="_blank">axios-http.com</a>) gelöst. Die nachfolgende Auflistung zeigt die **js\*- & **.tsx*-Dateien im Ordner *frontend/src/app\*, welche für den Client verwendet werden und ihre Funktionalitäten auf:

- **layout.tsx:** Hauptdatei, für Layout zuständig
- **page.tsx:** Hauptbildschirm, regelt ob Benutzer / Benutzerin Zugriff auf die Applikation hat
- **components/Button.tsx:** Einheitliche Darstellung der Buttons
- **components/Detail.tsx:** Verwaltung der States und Einbindung der 3D-Darstellung
- **components/Navbar.tsx:** Serverkomponente welche die Routen für Login, Registrierung und Logout bereitstellt
- **components/OlMap.tsx:** Darstellung der Punkte und Verschiebungen in der Karte
- **components/Settings.tsx:** Verwalten von allen Punkt- Sessions- und Projektdaten, Einbindung der verschiedenen Ansichten
- **components/TableView.tsx:** Darstellung der Punktverschiebungen in einer Tabelle
- **components/ThreeScene.tsx:** Darstellung der Punkte auf dem 3D-Modell
- **components/cookies/cookiecreator.tsx:** Schreiben von Cookies (für Login benötigt)
- **components/cookies/cookiereader.tsx:** Lesen von Cookies (für Login benötigt)
- **components/login/page.tsx:** Einlogen von Benutzenden
- **components/logout/page.tsx:** Abmelden von Benutzenden
- **components/register/page.tsx:** Registrierung von neuen Benutzern / Benutzerinnen

## Backend

Das Backend ist in der Programmiersprache _Python_ (<a href="https://www.python.org/" target="_blank">python.org</a>) geschrieben. In der Datei _db.py_ ist eine Klasse enthalten, welche die Interaktion mit der Datenbank ermöglich. Dafür wird die Python-Bibliothek _sqlite3_ verwendet. Total sind 15 Funktionen vorhanden. Diese sind in folgende Kategorien zu unterteilen:

- **DB erstellen:** Erstellen der Datenbank und einrichten der Tabellen
- **User:** Interaktion mit der Tabelle user (User erstellen und lesen)
- **Project:** Interaktion mit der Tabelle projects (Projekte erstellen und lesen)
- **Sessions:** Interaktion mit der Tabelle sessions (Sessionen erstellen und lesen)
- **Points:** Interaktion mit der Tabelle points (Punkte erstellen und lesen)

Die Funktionen der Datei _db.py_ werden in der Datei _main.py_ aufgerufen. Hier werden die Bibliotheken _fastapi_, _pydantic_ und _uvicorn_ benötigt. Durch FastAPI werden 7 Routen mit den folgenden Zwecken eröffnet:

- **/user:** Benutzer erstellen
- **/login:** Login prüfen
- **/newProject:** Projekt erstellen
- **/openProject:** Projekte der nutzenden Person laden
- **/newSession:** Neue Session im Projekt anlegen
- **/getSessions:** Vorhandene Sessionen im Projekt anzeigen & Punkte beziehen

## Datenbank

Die Datenbank hat vier Tabellen:

- **user**
- **projects**
- **sessions**
- **points**
  In diesen vier Tabellen werden alle nötigen Informationen gespeichert. Die Integrität der Daten wird durch python im backend sichergestellt und durch entsprechende Fehlermeldungen im frontend den Nutzenden mitgeteilt. In der anschliessenden Grafik ist das Datenbankschema ersichtlich. Die **fett** geschriebenen Attribute sind gemeinsam eindeutig.

<img src="screenshots/db_schema.png" alt="ERD" style="max-width: 100%; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);">

---

[zurück nach ganz oben](architecture.html)
