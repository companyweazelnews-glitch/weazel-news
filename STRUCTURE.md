# 📂 STRUTTURA PROGETTO - Weazel News

## 🗂️ Organizzazione File

Il progetto è organizzato in modo professionale con separazione dei file per tipo:

```
weazel-news/
│
├── 📄 index.html                    # Homepage principale
├── 📄 articles.json                 # Database articoli (MODIFICA QUESTO!)
├── 📄 validator.html                # Tool validazione JSON
│
├── ⚙️  vercel.json                  # Configurazione Vercel
├── ⚙️  package.json                 # Info progetto e dipendenze
├── ⚙️  .gitignore                   # File da escludere da Git
│
├── 📖 START_HERE.md                 # 👈 Inizia da qui!
├── 📖 README.md                     # Documentazione principale
├── 📖 GUIDA_ARTICOLI.md             # Come gestire articoli
├── 📖 GUIDA_IMMAGINI.md             # Come gestire immagini
├── 📖 RESPONSIVE.md                 # Info responsive design
├── 📖 DEPLOY.md                     # Come pubblicare online
├── 📖 STRUCTURE.md                  # Questo file
│
└── 📁 src/                          # Cartella sorgenti
    ├── 📁 css/                      # Fogli di stile
    │   └── styles.css               # CSS principale
    │
    ├── 📁 js/                       # JavaScript
    │   └── script.js                # JS principale
    │
    └── 📁 assets/                   # Risorse multimediali
        └── 📁 img/                  # Immagini
            ├── 📄 README.md         # Guida immagini
            ├── 📁 articles/         # Immagini articoli
            │   ├── cronaca/
            │   ├── sport/
            │   ├── politica/
            │   └── lifestyle/
            ├── 📁 backgrounds/      # Sfondi e banner
            ├── 📁 logos/            # Loghi e branding
            └── 📁 placeholders/     # Immagini placeholder
```

---

## 📝 Descrizione Cartelle

### Root (Cartella Principale)
**File HTML e JSON:**
- `index.html` - La pagina web principale del sito
- `articles.json` - Database con tutti gli articoli (JSON)
- `validator.html` - Tool per validare articles.json

**File di Configurazione:**
- `vercel.json` - Configurazione per deployment su Vercel
- `package.json` - Metadata del progetto NPM
- `.gitignore` - File da escludere dal version control

**Documentazione:**
Tutti i file .md (Markdown) sono guide e documentazione

---

### 📁 src/ (Sorgenti)

Contiene tutti i file di codice e risorse del sito.

#### 📁 src/css/
Contiene i fogli di stile CSS.

**File:**
- `styles.css` - CSS principale con tutto lo stile del sito
  - Layout responsive
  - Design identico al NYT
  - Media queries per mobile/tablet
  - ~15KB di stili ottimizzati

#### 📁 src/js/
Contiene i file JavaScript.

**File:**
- `script.js` - JavaScript principale che:
  - Carica gli articoli da articles.json
  - Gestisce il routing (homepage ↔ articolo)
  - Implementa interazioni touch
  - Gestisce navigazione mobile

#### 📁 src/assets/
Contiene tutte le risorse multimediali.

##### 📁 src/assets/img/
Cartella principale per le immagini.

**Struttura:**
```
img/
├── articles/          # Immagini per articoli
│   ├── cronaca/      # Notizie di cronaca
│   ├── sport/        # Notizie sportive
│   ├── politica/     # Notizie politiche
│   └── lifestyle/    # Lifestyle e cultura
├── backgrounds/       # Sfondi e banner
├── logos/            # Loghi e branding Weazel News
└── placeholders/     # Immagini placeholder per test
```

**Note:**
- Le cartelle hanno file `.gitkeep` per mantenere la struttura in Git
- Puoi aggiungere altre sottocartelle se necessario
- Consulta `src/assets/img/README.md` per dettagli

---

## 🎯 File da Modificare (Per il Team)

### File Principali da Modificare
1. **articles.json** ← Il più importante!
   - Aggiungi/modifica articoli qui
   - Segui GUIDA_ARTICOLI.md

2. **src/assets/img/** 
   - Aggiungi immagini qui (opzionale)
   - O usa immagini online (più facile)

### File da NON Modificare (Se non sei uno sviluppatore)
❌ `index.html` - Struttura HTML
❌ `src/css/styles.css` - Stili CSS
❌ `src/js/script.js` - Logica JavaScript
❌ `vercel.json` - Config deployment
❌ File .md - Documentazione

---

## 🔄 Percorsi File

### Da index.html
```html
<!-- CSS -->
<link rel="stylesheet" href="src/css/styles.css">

<!-- JavaScript -->
<script src="src/js/script.js"></script>
```

### Da articles.json (immagini locali)
```json
{
  "image": "src/assets/img/articles/cronaca/foto.jpg"
}
```

### Da articles.json (immagini online)
```json
{
  "image": "https://i.imgur.com/xyz123.jpg"
}
```

---

## 📊 Dimensioni File (Approssimative)

```
Totale Progetto: ~40KB (senza immagini)

Breakdown:
├── articles.json       ~12KB (8 articoli esempio)
├── src/css/styles.css  ~16KB (minificato ~10KB)
├── src/js/script.js    ~23KB (minificato ~8KB)
├── index.html          ~6KB
├── validator.html      ~15KB
└── Guide .md           ~50KB totali
```

**Con immagini locali:**
- Dipende da quante ne aggiungi
- Consigliato: max 5MB per immagine
- Vercel free tier: 100MB totali

---

## 🚀 Vantaggi di questa Struttura

### ✅ Organizzazione
- Facile trovare i file
- Separazione logica (CSS, JS, immagini)
- Scalabile per progetti più grandi

### ✅ Manutenzione
- Facile aggiornare stili (tutto in src/css/)
- Facile aggiungere funzionalità (tutto in src/js/)
- Immagini organizzate per categoria

### ✅ Deployment
- Vercel supporta questa struttura
- Nessuna configurazione extra necessaria
- Build e deploy automatici

### ✅ Professionalità
- Struttura standard dell'industria
- Pronto per espansioni future
- Facile per nuovi sviluppatori

---

## 🔧 Modificare la Struttura

### Aggiungere Nuove Cartelle Immagini
```bash
cd src/assets/img/articles
mkdir nuova-categoria
touch nuova-categoria/.gitkeep
```

### Aggiungere Nuovi CSS
1. Crea `src/css/custom.css`
2. Aggiungi in `index.html`:
   ```html
   <link rel="stylesheet" href="src/css/custom.css">
   ```

### Aggiungere Nuovi JS
1. Crea `src/js/custom.js`
2. Aggiungi in `index.html`:
   ```html
   <script src="src/js/custom.js"></script>
   ```

---

## 📱 Compatibilità

Questa struttura funziona con:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Qualsiasi hosting statico
- ✅ Server locale (Python, Node.js, PHP)

---

## 🆘 Problemi Comuni

### "File not found" per CSS/JS
**Causa:** Percorsi errati
**Soluzione:** Verifica che i file siano in `src/css/` e `src/js/`

### Immagini non si vedono
**Causa:** Percorso sbagliato in articles.json
**Soluzione:** 
- Usa percorsi relativi: `src/assets/img/articles/foto.jpg`
- O URL esterni: `https://i.imgur.com/xyz.jpg`

### Progetto troppo grande per Vercel
**Causa:** Troppe immagini locali
**Soluzione:** Usa servizi esterni (Imgur, Cloudinary)

---

## 💡 Best Practices

### 1. Gestione Immagini
- **Piccoli progetti**: Immagini locali in `src/assets/img/`
- **Grandi progetti**: Usa CDN esterni (Imgur, Cloudinary)

### 2. Organizzazione
- Mantieni le cartelle organizzate
- Usa nomi file descrittivi
- Non mescolare file di tipi diversi

### 3. Backup
- Fai backup di `articles.json`
- Fai backup delle immagini in `src/assets/img/`

### 4. Git
- Committa regolarmente
- Usa `.gitignore` per escludere file temporanei

---

## 🎓 Per Saperne di Più

- **Struttura generale**: Questo file (STRUCTURE.md)
- **Gestione articoli**: GUIDA_ARTICOLI.md
- **Gestione immagini**: GUIDA_IMMAGINI.md + src/assets/img/README.md
- **Responsive design**: RESPONSIVE.md
- **Deployment**: DEPLOY.md

---

**La struttura è pronta e professionale! 🎉**

Ora puoi concentrarti sul contenuto (articoli e immagini) senza preoccuparti dell'organizzazione dei file!
