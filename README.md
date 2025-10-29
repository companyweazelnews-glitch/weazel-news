# 📰 Weazel News - GTA RP Newspaper Website

Sito web per giornale in stile New York Times per il tuo server GTA RP.

## 🚀 Caratteristiche

- ✅ Design identico al New York Times
- ✅ **Completamente Responsive** - Perfetto su Desktop, Tablet e Mobile
- ✅ Homepage dinamica con articoli in evidenza
- ✅ Sistema di gestione articoli tramite JSON (facile per utenti non tecnici)
- ✅ Articoli completi con routing
- ✅ **Touch-friendly** - Ottimizzato per dispositivi touch
- ✅ **Progressive Enhancement** - Funziona su tutti i browser
- ✅ Nessun backend necessario
- ✅ Pronto per Vercel

## 📱 Breakpoints Responsive

Il sito è ottimizzato per:
- **Desktop**: 1280px+ (Design completo NYT)
- **Laptop**: 1024px - 1279px (Layout adattato)
- **Tablet**: 768px - 1023px (Grid a 2 colonne)
- **Mobile Large**: 481px - 767px (Single column)
- **Mobile**: 360px - 480px (Ottimizzato per smartphone)
- **Mobile Small**: < 360px (Dispositivi compatti)

## 📁 Struttura File

```
weazel-news/
├── src/
│   ├── css/
│   │   └── styles.css          # Stili del sito
│   ├── js/
│   │   └── script.js           # Logica JavaScript
│   └── assets/
│       └── img/                # Immagini (organizzate per categoria)
│           ├── articles/       # Immagini articoli
│           ├── backgrounds/    # Sfondi
│           ├── logos/          # Loghi
│           └── placeholders/   # Placeholder
├── index.html                  # Homepage principale
├── articles.json               # Database articoli (MODIFICA QUESTO!)
├── vercel.json                 # Configurazione Vercel
├── package.json                # Informazioni sul progetto
├── validator.html              # Tool validazione JSON
├── .gitignore                  # File da ignorare in Git
│
├── START_HERE.md               # 👈 Inizia da qui!
├── GUIDA_ARTICOLI.md           # Come gestire gli articoli
├── GUIDA_IMMAGINI.md           # Come gestire le immagini
├── RESPONSIVE.md               # Info design responsive
├── DEPLOY.md                   # Come pubblicare online
└── README.md                   # Questo file
```

## 🎯 Come Usare

### 1. Modificare gli Articoli

Gli articoli si trovano in `articles.json`. Per aggiungere/modificare articoli:

1. Apri `articles.json`
2. Copia un articolo esistente
3. Modifica i campi (id, title, content, ecc.)
4. Salva il file

**Leggi GUIDA_ARTICOLI.md per istruzioni dettagliate!**

### 2. Posizionamento Articoli in Homepage

Il campo `"featured"` determina dove appare l'articolo:

- `"main"` - Articolo principale (alto sinistra)
- `"media"` - Articolo con immagine grande (centro)
- `"side"` - Articolo laterale (destra)
- `"secondary"` - Articoli secondari (sotto main)
- `"bottom"` - Articoli in basso

### 3. Struttura Articolo

```json
{
  "id": "1",
  "title": "Titolo dell'Articolo",
  "summary": "Breve riassunto per homepage",
  "content": [
    "Primo paragrafo dell'articolo completo.",
    "Secondo paragrafo.",
    "## Sottotitolo",
    "Altri paragrafi..."
  ],
  "author": "Nome Giornalista",
  "category": "CRONACA",
  "date": "29 Ottobre 2025",
  "readTime": "5 MIN DI LETTURA",
  "image": "URL_IMMAGINE",
  "imageCaption": "Descrizione immagine",
  "featured": "main",
  "breaking": true,
  "time": "1h fa"
}
```

## 🌐 Deploy su Vercel

### Metodo 1: Deploy con GitHub (Consigliato)

1. Crea un repository su GitHub
2. Carica tutti i file
3. Vai su [Vercel](https://vercel.com)
4. Clicca "Import Project"
5. Seleziona il tuo repository
6. Clicca "Deploy"

### Metodo 2: Deploy Diretto

1. Installa Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Nella cartella del progetto:
   ```bash
   vercel
   ```

3. Segui le istruzioni

### Metodo 3: Drag & Drop

1. Vai su [Vercel](https://vercel.com)
2. Trascina la cartella del progetto
3. Fatto!

## 📝 Modificare Articoli Dopo il Deploy

### Se usi GitHub:
1. Modifica `articles.json` su GitHub
2. Commit le modifiche
3. Vercel farà il deploy automaticamente

### Se NON usi GitHub:
1. Modifica `articles.json` localmente
2. Esegui `vercel --prod` nella cartella
3. Il sito si aggiornerà

## 🎨 Personalizzazione

### Cambiare i Colori

Modifica `styles.css`:

```css
/* Colore pulsante abbonamento */
.subscribe-btn {
  background: #567b95; /* Cambia questo */
}

/* Colore badge LIVE */
.live-badge {
  background: #d0021b; /* Cambia questo */
}
```

### Aggiungere Sezioni

Modifica `index.html` e aggiungi nuove sezioni HTML.

### Modificare il Logo

Nel file `styles.css`, cerca:

```css
.site-logo {
  font-family: 'OldEnglishTextMT', ...;
  font-size: 60px;
}
```

## 🐛 Risoluzione Problemi

### Articoli non si vedono
- Verifica che `articles.json` sia corretto
- Usa [JSONLint](https://jsonlint.com) per validare il JSON

### Pagina bianca
- Controlla la console del browser (F12)
- C'è probabilmente un errore di sintassi nel JSON

### Immagini non si caricano
- Verifica che gli URL delle immagini siano corretti
- Assicurati che le immagini siano pubblicamente accessibili

### Il sito non si aggiorna dopo le modifiche
- Svuota la cache del browser (Ctrl+Shift+R)
- Su Vercel, potrebbe volerci 1-2 minuti

## 📱 Test in Locale

Per testare il sito in locale prima del deploy:

1. Apri `index.html` direttamente nel browser
2. Oppure usa un server locale:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve

# Con PHP
php -S localhost:8000
```

Poi apri: `http://localhost:8000`

## ⚠️ Limiti e Note

- **Immagini**: Devi hostare le immagini esternamente (Imgur, Cloudinary, ecc.)
- **Capacità**: Nessun limite al numero di articoli, ma potrebbero rallentare la pagina dopo centinaia di articoli
- **Backup**: Fai sempre un backup di `articles.json` prima di modifiche importanti

## 🎓 Per il Team non Tecnico

Se non sei un programmatore:

1. **Leggi prima GUIDA_ARTICOLI.md** - Spiega tutto passo passo
2. **Usa un editor di testo** - Notepad++, VS Code, o Sublime Text
3. **Valida sempre il JSON** - Usa JSONLint prima di salvare
4. **Testa sempre** - Ricarica la pagina per vedere le modifiche

## 🔧 Stack Tecnologico

- **HTML5** - Struttura
- **CSS3** - Stili (simili al NYT)
- **Vanilla JavaScript** - Logica (no framework)
- **JSON** - Database articoli
- **Vercel** - Hosting

## 📚 Risorse Utili

- [JSONLint](https://jsonlint.com) - Validatore JSON
- [Placeholder Images](https://placeholder.com) - Immagini temporanee
- [Vercel Docs](https://vercel.com/docs) - Documentazione Vercel
- [Can I Use](https://caniuse.com) - Compatibilità browser

## 🤝 Contribuire

Per suggerimenti o problemi:
1. Apri una issue su GitHub
2. Contatta il team tecnico
3. Consulta la GUIDA_ARTICOLI.md

## 📄 Licenza

Questo progetto è stato creato per uso interno nel server GTA RP.

## 🎉 Credits

Design ispirato al New York Times.
Sviluppato per Weazel News - Server GTA RP.

---

**Buon lavoro con Weazel News! 📰**
