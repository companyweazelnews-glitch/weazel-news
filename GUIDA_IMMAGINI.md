# 📸 GUIDA IMMAGINI - Weazel News

## Come Aggiungere Immagini agli Articoli

Hai **DUE opzioni** per le immagini:
1. **Immagini Locali** - Nella cartella `src/assets/img/`
2. **Immagini Online** - Hostate su servizi esterni (Imgur, Cloudinary, ecc.)

---

## 🗂️ Opzione 1: Immagini Locali (Nella Cartella del Progetto)

### Vantaggi
- ✅ Tutto in un posto
- ✅ Nessuna dipendenza da servizi esterni
- ✅ Controllo completo

### Svantaggi
- ❌ Aumenta dimensione del progetto
- ❌ Più difficile aggiornare dopo il deploy

### Come Usare

1. **Metti le immagini in**: `src/assets/img/articles/`
   ```
   src/assets/img/
   └── articles/
       ├── cronaca/
       │   └── rapina-bank.jpg
       ├── sport/
       │   └── derby-ls-fc.jpg
       └── politica/
           └── sindaco-asia.jpg
   ```

2. **Usa percorsi relativi in articles.json**:
   ```json
   {
     "id": "1",
     "title": "Rapina alla Pacific Standard",
     "image": "src/assets/img/articles/cronaca/rapina-bank.jpg",
     ...
   }
   ```

3. **Fatto!** L'immagine verrà caricata dal progetto

---

## 🌐 Opzione 2: Immagini Online (CONSIGLIATA per Facilità)

Poiché il sito è solo frontend (no database), le immagini possono essere hostate online. Ecco le opzioni:

---

## 🖼️ Opzione 2A: Imgur (Veloce e Facile)

### Vantaggi
- ✅ Gratuito
- ✅ Velocissimo
- ✅ Non serve registrazione
- ✅ Ottimo per GTA RP

### Come Usare

1. Vai su https://imgur.com
2. Clicca "New post"
3. Carica la tua immagine
4. Una volta caricata, fai click destro sull'immagine
5. Seleziona "Copia indirizzo immagine"
6. Incolla l'URL in `articles.json` nel campo `"image"`

**Esempio URL:** `https://i.imgur.com/AbC123.jpg`

```json
{
  "id": "1",
  "title": "Mio Articolo",
  "image": "https://i.imgur.com/AbC123.jpg",
  ...
}
```

---

## 🖼️ Opzione 2B: Cloudinary

### Vantaggi
- ✅ Professionale
- ✅ Ottimizzazione automatica
- ✅ Ridimensionamento automatico
- ✅ Piano gratuito generoso

### Come Usare

1. Registrati su https://cloudinary.com (gratuito)
2. Carica le immagini nel tuo account
3. Copia l'URL dell'immagine
4. Usalo in `articles.json`

**Esempio URL:** `https://res.cloudinary.com/your-account/image/upload/v123/photo.jpg`

---

## 📦 Opzione 2C: Discord (Trucco Veloce)

### Vantaggi
- ✅ Già usi Discord
- ✅ Istantaneo
- ✅ Zero configurazione

### Come Usare

1. Carica l'immagine in un canale Discord (anche DM a te stesso)
2. Click destro sull'immagine
3. "Copia link"
4. Incolla in `articles.json`

⚠️ **ATTENZIONE**: I link Discord possono scadere. Usa solo per test.

---

## 🖥️ Opzione 2D: GitHub (Se usi GitHub)

### Vantaggi
- ✅ Stesso posto del codice
- ✅ Controllo versione
- ✅ Affidabile

### Come Usare

1. Nel tuo repository, crea una cartella `images/`
2. Carica le immagini lì
3. Dopo il commit, usa questo URL:

```
https://raw.githubusercontent.com/TUO-USERNAME/TUO-REPO/main/images/nome-immagine.jpg
```

**Esempio:**
```json
{
  "image": "https://raw.githubusercontent.com/johndoe/weazel-news/main/images/breaking-news.jpg"
}
```

---

## 🎨 Opzione 2E: Placeholder (Per Test)

### Quando Usare
- Per testare il layout
- Quando non hai ancora l'immagine finale
- Per demo

### Come Usare

Usa questo formato URL:
```
https://via.placeholder.com/LARGHEZZA x ALTEZZA/COLORE-BG/COLORE-TESTO?text=Il+Tuo+Testo
```

**Esempi:**

```json
// Immagine 1200x600, sfondo scuro
"image": "https://via.placeholder.com/1200x600/333333/ffffff?text=Breaking+News"

// Immagine 800x400, sfondo rosso
"image": "https://via.placeholder.com/800x400/cc0000/ffffff?text=Weazel+News"

// Immagine 600x400, sfondo blu
"image": "https://via.placeholder.com/600x400/0066cc/ffffff?text=Los+Santos+FC"
```

---

## 📏 Dimensioni Consigliate

Per ogni posizione in homepage:

### Articolo Principale (featured: "main")
- **Non mostrata in homepage**
- Nell'articolo completo: **1200x600px** o **1920x1080px**

### Featured Media (featured: "media")
- **800x600px** o **1200x800px**
- Questa è l'immagine più grande

### Side Feature (featured: "side")
- **400x300px** o **800x600px**

### Bottom Stories (featured: "bottom")
- **400x200px** o **800x400px**

### Formato
- ✅ JPG (per foto)
- ✅ PNG (per grafica con testo)
- ✅ WEBP (più leggero, moderno)

---

## 💡 Consigli Pratici

### 1. Screenshot da GTA
```
1. Premi F1 in GTA (di solito fa screenshot)
2. Trova il file nella cartella GTA
3. Caricalo su Imgur
4. Usa l'URL in articles.json
```

### 2. Ottimizzare le Immagini
Se le immagini sono troppo grandi:
- Usa https://tinypng.com per comprimerle
- O https://squoosh.app
- Le immagini più leggere = sito più veloce

### 3. Nomi File
Usa nomi descrittivi:
- ✅ `rapina-pacific-standard.jpg`
- ❌ `IMG_20231029_123456.jpg`

### 4. Backup
Tieni una copia delle immagini sul tuo PC, non solo online.

---

## 🚫 Cosa NON Fare

❌ **Non usare immagini protette da copyright** (a meno che non siano tue)
❌ **Non usare link diretti da Facebook** (non funzionano pubblicamente)
❌ **Non usare immagini troppo grandi** (rallentano il sito)
❌ **Non usare Google Drive direct links** (spesso non funzionano)

---

## 🛠️ Esempio Completo

```json
{
  "id": "9",
  "title": "Sparatoria a Vespucci Beach",
  "summary": "Una sparatoria è scoppiata ieri sera sulla spiaggia.",
  "image": "https://i.imgur.com/xyz123.jpg",
  "imageCaption": "La polizia sul luogo della sparatoria.",
  "imageCredit": "Foto: John Doe / Weazel News",
  "content": [
    "Vespucci Beach - Una sparatoria ha scosso la tranquilla serata di ieri..."
  ],
  ...
}
```

---

## 📞 Problemi con le Immagini?

### Immagine non si vede
- Verifica che l'URL sia corretto
- Apri l'URL in una nuova scheda del browser
- Se non si apre, l'URL è sbagliato

### Immagine sfocata
- L'immagine è troppo piccola
- Usa un'immagine con risoluzione più alta

### Immagine troppo lenta
- L'immagine è troppo grande
- Comprimi con TinyPNG o Squoosh

---

## 🎯 Riepilogo Veloce

**Per iniziare subito:**
1. Vai su Imgur.com
2. Carica la tua immagine
3. Copia il link
4. Incolla in articles.json
5. Fatto! ✅

**URL formato:** `https://i.imgur.com/CODICE.jpg`

---

## 🆘 Serve Aiuto?

Consulta il team tecnico o rileggi questa guida.

**Buone immagini = Ottimi articoli! 📸**
