# 🚀 GUIDA RAPIDA - Deploy su Vercel

## ⚡ Inizio Veloce (5 minuti)

### Metodo 1: Drag & Drop (PIÙ FACILE)

1. **Vai su Vercel**
   - Apri https://vercel.com
   - Crea un account gratuito (usa GitHub, Google o email)

2. **Upload del progetto**
   - Una volta loggato, clicca "Add New..." → "Project"
   - Trascina l'intera cartella `weazel-news` nella finestra
   - Oppure clicca "Browse" e seleziona la cartella

3. **Deploy**
   - Clicca "Deploy"
   - Aspetta 30-60 secondi
   - ✅ FATTO! Il tuo sito è online

4. **Ottieni il Link**
   - Vercel ti darà un URL tipo: `weazel-news-xyz123.vercel.app`
   - Questo è il tuo sito web! Condividilo con tutti

---

### Metodo 2: Con GitHub (Per Aggiornamenti Automatici)

#### Parte A: Upload su GitHub

1. **Crea un Repository**
   - Vai su https://github.com
   - Clicca "New repository"
   - Nome: `weazel-news`
   - Visibilità: Public o Private (a tua scelta)
   - Clicca "Create repository"

2. **Upload dei File**
   - Nella pagina del repository, clicca "uploading an existing file"
   - Trascina tutti i file dalla cartella `weazel-news`
   - Scrivi "Initial commit" nel campo messaggio
   - Clicca "Commit changes"

#### Parte B: Connetti a Vercel

1. **Vai su Vercel**
   - https://vercel.com/new
   - Clicca "Continue with GitHub"
   - Autorizza Vercel ad accedere a GitHub

2. **Importa il Repository**
   - Vercel ti mostrerà i tuoi repository
   - Clicca "Import" sul repository `weazel-news`

3. **Deploy**
   - Lascia tutte le impostazioni di default
   - Clicca "Deploy"
   - Aspetta 30-60 secondi
   - ✅ FATTO!

**VANTAGGIO:** Ogni volta che modifichi `articles.json` su GitHub, il sito si aggiorna automaticamente!

---

## 📝 Come Aggiornare gli Articoli

### Se hai usato il Metodo 1 (Drag & Drop):

1. Modifica `articles.json` sul tuo computer
2. Vai su Vercel → Il tuo progetto → "Deployments"
3. Clicca "..." → "Redeploy"
4. Oppure trascina di nuovo la cartella aggiornata

### Se hai usato il Metodo 2 (GitHub):

1. Vai sul tuo repository GitHub
2. Clicca su `articles.json`
3. Clicca sull'icona della matita (Edit)
4. Modifica il contenuto
5. Scrolla in basso e clicca "Commit changes"
6. **Vercel aggiorna il sito automaticamente in 1-2 minuti!**

---

## 🔧 Personalizzazione del Dominio

### Dominio Gratuito Vercel
Vercel ti dà automaticamente: `tuo-progetto.vercel.app`

### Dominio Personalizzato
Se vuoi `weazelnews.com`:

1. Compra un dominio (Namecheap, GoDaddy, ecc.)
2. Su Vercel → Settings → Domains
3. Aggiungi il tuo dominio
4. Segui le istruzioni per configurare il DNS
5. Aspetta 24-48 ore per la propagazione

---

## 🎨 Configurazioni Utili su Vercel

### Impostazioni del Progetto

1. **Nome del Progetto**
   - Settings → General → Project Name
   - Cambialo in qualcosa di memorabile

2. **Variabili d'Ambiente** (Non necessarie per questo progetto)
   - Settings → Environment Variables

3. **Dominio**
   - Settings → Domains
   - Aggiungi domini personalizzati qui

---

## 🐛 Problemi Comuni

### "Il sito non si carica"
- Aspetta 2-3 minuti dopo il deploy
- Svuota la cache del browser (Ctrl+Shift+R)
- Controlla che tutti i file siano stati caricati

### "Gli articoli non si vedono"
- Verifica che `articles.json` sia presente
- Usa il `validator.html` per controllare errori nel JSON
- Controlla la console del browser (F12)

### "Deployment Failed"
- Verifica che tutti i file necessari siano presenti:
  - index.html
  - styles.css
  - script.js
  - articles.json
  - vercel.json

---

## 📊 Statistiche e Analytics

### Analytics di Vercel (Gratis)
1. Sul tuo progetto Vercel
2. Clicca "Analytics"
3. Vedi visite, pagine viste, ecc.

### Google Analytics (Opzionale)
Per statistiche più dettagliate:
1. Crea account su https://analytics.google.com
2. Aggiungi il tracking code nell'`index.html`

---

## 💡 Consigli Pro

### 1. Backup
- Tieni sempre una copia locale di `articles.json`
- Fai backup regolari

### 2. Test Prima del Deploy
- Testa sempre le modifiche in locale
- Usa `validator.html` per verificare il JSON

### 3. Versioning
- Se usi GitHub, ogni modifica viene salvata
- Puoi sempre tornare indietro a una versione precedente

### 4. Team
- Su GitHub: Settings → Collaborators (aggiungi il team)
- Su Vercel: Settings → Team (invita membri)

---

## 🎯 Checklist Prima del Deploy

- [ ] Tutti i file sono presenti
- [ ] `articles.json` è valido (controlla con validator.html)
- [ ] Le immagini hanno URL corretti
- [ ] Hai testato in locale
- [ ] Hai fatto backup di `articles.json`

---

## 📞 Aiuto

### Documentazione
- **Vercel**: https://vercel.com/docs
- **GitHub**: https://docs.github.com

### Video Tutorial
Cerca su YouTube: "How to deploy to Vercel" per tutorial video

---

## ✅ Recap Velocissimo

**Per pubblicare il sito in 5 minuti:**

1. Vai su https://vercel.com
2. Crea account (gratis)
3. Trascina la cartella `weazel-news`
4. Clicca "Deploy"
5. ✅ Sito online!

**Per aggiornare gli articoli:**

1. Modifica `articles.json`
2. Ricarica su Vercel
3. ✅ Sito aggiornato!

---

## 🎉 Complimenti!

Ora hai il tuo giornale online professionale per il tuo server GTA RP!

**Link Utili:**
- Vercel: https://vercel.com
- GitHub: https://github.com
- Validator JSON: https://jsonlint.com

**Buon divertimento con Weazel News! 📰**
