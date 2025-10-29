# 🔧 RISOLUZIONE ERRORI 404 SU VERCEL

## ❌ Problema: CSS e JS non si caricano (Errore 404)

Se vedi errori come questi nella console:
```
Failed to load resource: styles.css:1
Failed to load resource: script.js:1
```

---

## ✅ SOLUZIONE RAPIDA (3 Metodi)

### Metodo 1: Rideploy Completo (CONSIGLIATO)

1. **Vai su Vercel Dashboard**
2. **Vai al tuo progetto** → "Settings" → "General"
3. **Scroll in basso** e clicca "Delete Project"
4. **Rideploy da zero**:
   - Se usi GitHub: Reimporta il repository
   - Se usi drag & drop: Ricarica la cartella completa

**IMPORTANTE**: Assicurati di caricare TUTTA la cartella `weazel-news` inclusa la cartella `src/`

---

### Metodo 2: Verifica File Structure su Vercel

1. **Vai al tuo progetto su Vercel**
2. **Clicca sulla latest deployment**
3. **Clicca "Source"** in alto
4. **Verifica che ci sia la cartella `src/`** con:
   - `src/css/styles.css`
   - `src/js/script.js`
   - `src/assets/img/`

**Se manca la cartella `src/`:**
- Il problema è che non è stata caricata
- Ri-deploya includendo tutto

---

### Metodo 3: Build Settings su Vercel

Se continui ad avere problemi:

1. **Vai su Vercel** → Il tuo progetto
2. **Settings** → "General"
3. **Build & Development Settings**:
   - **Framework Preset**: Other
   - **Build Command**: (lascia vuoto)
   - **Output Directory**: . (punto)
   - **Install Command**: (lascia vuoto)
4. **Salva** e **Redeploy**

---

## 🔍 DEBUG: Come Verificare i File

### Check 1: Locale
Prima di deployare, verifica in locale:

```bash
cd weazel-news
ls -la src/css/
ls -la src/js/
```

Dovresti vedere:
- `src/css/styles.css` ✅
- `src/js/script.js` ✅

### Check 2: Su Vercel
Dopo il deploy:

1. Apri il sito
2. Premi F12 (Console)
3. Vai su "Network" tab
4. Ricarica la pagina (F5)
5. Cerca `styles.css` e `script.js`
6. Se vedi "404" → file non caricati

### Check 3: Direct URL
Prova ad aprire direttamente:
- `https://tuo-sito.vercel.app/src/css/styles.css`
- `https://tuo-sito.vercel.app/src/js/script.js`

Se mostrano il contenuto → File presenti ✅
Se danno 404 → File non caricati ❌

---

## 📦 WORKAROUND: Se Niente Funziona

### Opzione A: File nella Root

Se Vercel continua a dare problemi con `src/`, sposta i file nella root:

1. **Copia i file**:
   ```bash
   cp src/css/styles.css .
   cp src/js/script.js .
   ```

2. **Aggiorna index.html**:
   ```html
   <!-- Cambia da: -->
   <link rel="stylesheet" href="src/css/styles.css">
   <script src="src/js/script.js"></script>
   
   <!-- A: -->
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```

3. **Redeploy**

### Opzione B: GitHub Pages

Se Vercel continua a dare problemi, prova GitHub Pages:

1. **Carica su GitHub**
2. **Vai su Settings** → "Pages"
3. **Source**: Deploy from branch (main)
4. **Salva**
5. Dopo ~2 minuti: `https://tuo-username.github.io/weazel-news`

---

## ⚙️ Configurazioni Corrette

### vercel.json (Già incluso nel progetto)

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/src/(.*)",
      "dest": "/src/$1"
    },
    {
      "src": "/(.*\\.(css|js|json|html|png|jpg|jpeg|gif|svg))",
      "dest": "/$1"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

Questo file dice a Vercel:
1. Servi i file da `/src/` correttamente
2. Servi tutti i file statici (CSS, JS, immagini)
3. Per tutto il resto, mostra index.html

---

## 🚨 Errori Comuni

### Errore 1: "Cartella src/ non trovata"
**Causa**: Non hai caricato la cartella src/
**Soluzione**: Ricarica TUTTO il progetto includendo src/

### Errore 2: "404 su styles.css"
**Causa**: Percorso errato o file non caricato
**Soluzione**: 
1. Verifica che esista `src/css/styles.css`
2. Verifica `vercel.json`
3. Redeploy

### Errore 3: "Il sito funziona in locale ma non su Vercel"
**Causa**: Differenze tra file system locale e Vercel
**Soluzione**: 
1. Usa vercel.json corretto
2. Assicurati che tutti i file siano stati caricati
3. Controlla "Source" nel dashboard Vercel

---

## 📋 Checklist Pre-Deploy

Prima di deployare su Vercel, verifica:

- [ ] La cartella `src/` esiste nel progetto
- [ ] `src/css/styles.css` esiste
- [ ] `src/js/script.js` esiste
- [ ] `vercel.json` è presente nella root
- [ ] `.vercelignore` NON esclude la cartella `src/`
- [ ] In locale il sito funziona (apri index.html)
- [ ] Hai fatto backup di tutto

---

## 🎯 Test Finale

Dopo il deploy:

1. **Apri il sito** su Vercel
2. **Premi F12** → Console
3. **NON devono esserci errori rossi** 404
4. **Il sito deve essere stilizzato** (se vedi solo testo nero su bianco → CSS non caricato)
5. **Clicca su un articolo** → Deve aprirsi (se non funziona → JS non caricato)

Se tutto funziona: ✅ **Perfetto!**

---

## 💡 Suggerimento

Se hai deployato con drag & drop su Vercel:

1. **Comprimi la cartella** weazel-news in .zip
2. **Estrai lo zip** in una nuova cartella
3. **Verifica che ci sia src/**
4. **Trascina su Vercel** la cartella estratta

Questo assicura che tutti i file siano inclusi.

---

## 📞 Supporto Vercel

Se niente funziona:
1. Contatta Vercel Support: https://vercel.com/support
2. Oppure prova GitHub Pages come alternativa
3. O Netlify: https://netlify.com (anche più facile di Vercel)

---

## 🎉 Dopo che Funziona

Una volta che il sito è live e funziona:

1. **Salva l'URL** del progetto
2. **Fai screenshot** per documentazione
3. **Testa su mobile** per verificare il responsive
4. **Condividi con il team!**

---

**Il tuo sito Weazel News sarà online e perfetto! 🚀📰**
