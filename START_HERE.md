# 👋 INIZIA DA QUI - Weazel News

Benvenuto nel progetto **Weazel News**! Questo è un clone perfetto del New York Times per il tuo server GTA RP.

---

## 🗂️ Cosa c'è in questa cartella?

### 📄 File Principali (NON modificare se non sai cosa fai)
- **index.html** - La pagina web principale
- **styles.css** - Gli stili del sito (colori, layout, ecc.)
- **script.js** - Il codice JavaScript che fa funzionare il sito
- **vercel.json** - Configurazione per il server Vercel
- **package.json** - Informazioni sul progetto

### ✏️ File da Modificare
- **articles.json** - 👈 **QUESTO È IL FILE CHE MODIFICHERAI!**
  - Contiene tutti gli articoli del giornale
  - È l'unico file che il tuo team deve modificare

### 📖 Guide e Documentazione
- **README.md** - Panoramica completa del progetto
- **GUIDA_ARTICOLI.md** - 📚 **LEGGI QUESTA PRIMA!** - Come aggiungere/modificare articoli
- **GUIDA_IMMAGINI.md** - Come aggiungere immagini agli articoli
- **DEPLOY.md** - Come pubblicare il sito online su Vercel

### 🔧 Strumenti Utili
- **validator.html** - Apri questo file nel browser per verificare se articles.json è corretto

---

## 🚀 Come Iniziare in 3 Passi

### Passo 1: Leggi la Guida Articoli
Apri e leggi **GUIDA_ARTICOLI.md**

Questa guida ti spiega:
- Come è strutturato un articolo
- Come aggiungere nuovi articoli
- Come modificare articoli esistenti
- Esempi pratici
- Errori comuni da evitare

### Passo 2: Prova a Modificare un Articolo
1. Apri `articles.json` con un editor di testo
2. Trova un articolo esistente
3. Modifica il titolo o il contenuto
4. Salva il file
5. Apri `index.html` nel browser per vedere le modifiche

### Passo 3: Valida il File
1. Apri `validator.html` nel browser
2. Trascina `articles.json` nella finestra
3. Controlla che non ci siano errori
4. Se ci sono errori, correggili e riprova

---

## 📝 Flusso di Lavoro Quotidiano

**Per pubblicare un nuovo articolo:**

1. Apri `articles.json`
2. Copia un articolo esistente (dall'inizio `{` alla fine `}`)
3. Incollalo prima della parentesi finale `]`
4. Modifica:
   - **id**: Usa il prossimo numero disponibile
   - **title**: Il titolo del tuo articolo
   - **summary**: Il riassunto (1-2 frasi)
   - **content**: L'articolo completo (array di paragrafi)
   - **author**: Il nome del giornalista
   - **category**: CRONACA, SPORT, POLITICA, ecc.
   - **featured**: Dove apparirà in homepage ("main", "media", "side", ecc.)
5. Salva il file
6. Valida con `validator.html`
7. Se tutto ok, carica online (vedi DEPLOY.md)

---

## 🎨 Posizioni in Homepage

Il campo **"featured"** determina dove appare l'articolo:

```
┌─────────────────────────────────────────────┐
│  ┌──────────┐  ┌────────────────┐  ┌──────┐ │
│  │          │  │                │  │      │ │
│  │   MAIN   │  │  MEDIA (video) │  │ SIDE │ │
│  │          │  │                │  │      │ │
│  ├──────────┤  └────────────────┘  └──────┘ │
│  │SECONDARY │                                │
│  ├──────────┤  ┌────────┐  ┌────────┐       │
│  │SECONDARY │  │ BOTTOM │  │ BOTTOM │       │
│  └──────────┘  └────────┘  └────────┘       │
└─────────────────────────────────────────────┘
```

---

## 🆘 In Caso di Problemi

### Il sito non si apre
- Controlla che `index.html` sia nella cartella
- Prova ad aprirlo con un altro browser

### Gli articoli non si vedono
- Usa `validator.html` per controllare `articles.json`
- Assicurati che il file JSON sia corretto

### Errore di sintassi JSON
- Controlla virgole, virgolette, parentesi
- Usa https://jsonlint.com per trovare l'errore

### Non so come procedere
- Rileggi **GUIDA_ARTICOLI.md**
- Guarda gli articoli di esempio in `articles.json`
- Chiedi aiuto al team tecnico

---

## 📚 Ordine di Lettura Consigliato

1. **Questo file** (START_HERE.md) ✅ Stai leggendo ora
2. **GUIDA_ARTICOLI.md** 👈 Leggi subito dopo
3. **GUIDA_IMMAGINI.md** - Se devi aggiungere immagini
4. **RESPONSIVE.md** - Info sul design responsive (mobile/tablet)
5. **DEPLOY.md** - Quando sei pronto a pubblicare
6. **README.md** - Per informazioni tecniche avanzate

---

## ✅ Checklist per Principianti

- [ ] Ho letto questo file (START_HERE.md)
- [ ] Ho letto GUIDA_ARTICOLI.md
- [ ] Ho aperto articles.json e visto come è fatto
- [ ] Ho provato a modificare un articolo di esempio
- [ ] Ho aperto validator.html e testato articles.json
- [ ] Ho aperto index.html nel browser e visto il sito
- [ ] So dove modificare per aggiungere nuovi articoli
- [ ] So come validare il file JSON

---

## 🎯 Regole d'Oro

1. **Fai sempre backup** di `articles.json` prima di modifiche importanti
2. **Valida sempre** il JSON con `validator.html` prima di pubblicare
3. **Testa sempre** in locale prima di caricare online
4. **Chiedi aiuto** se qualcosa non è chiaro
5. **Non modificare** gli altri file se non sai cosa fai

---

## 💡 Suggerimenti Utili

### Per Scrivere Bene
- Titoli chiari e accattivanti
- Riassunti che invoglino a leggere
- Paragrafi brevi e leggibili
- Usa sottotitoli (## Titolo) per organizzare

### Per le Immagini
- Usa immagini di alta qualità
- URL corretti (iniziano con http)
- Leggi GUIDA_IMMAGINI.md per dettagli

### Per l'Organizzazione
- Usa ID progressivi (1, 2, 3, 4...)
- Categorie consistenti (CRONACA, SPORT, ecc.)
- Featured positions senza duplicati

---

## 🎉 Sei Pronto!

Ora che hai letto questa guida, sei pronto per iniziare!

**Prossimi passi:**
1. Leggi **GUIDA_ARTICOLI.md**
2. Prova a modificare un articolo
3. Quando sei pronto, leggi **DEPLOY.md** per pubblicare online

**Buon lavoro con Weazel News! 📰**

---

## 📞 Contatti e Supporto

- **Problemi tecnici**: Contatta il team tecnico
- **Domande sugli articoli**: Rileggi GUIDA_ARTICOLI.md
- **Problemi con le immagini**: Rileggi GUIDA_IMMAGINI.md
- **Problemi con il deploy**: Rileggi DEPLOY.md

---

**Questo progetto è stato creato per facilitare la gestione del giornale Weazel News nel vostro server GTA RP. Divertitevi! 🎮📰**
