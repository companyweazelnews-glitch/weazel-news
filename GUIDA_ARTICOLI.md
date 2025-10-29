# 📰 GUIDA PER MODIFICARE GLI ARTICOLI - WEAZEL NEWS

## 📝 Introduzione
Questa guida spiega come aggiungere o modificare articoli nel sito Weazel News modificando il file `articles.json`.

---

## 🎯 Come Funziona

Il sito legge tutti gli articoli dal file **articles.json**. Per aggiungere un nuovo articolo, basta copiare il formato di un articolo esistente e modificare i contenuti.

---

## 📋 Struttura di un Articolo

Ogni articolo ha questi campi:

```json
{
  "id": "9",
  "title": "Il Titolo del Tuo Articolo",
  "summary": "Un breve riassunto che appare in homepage (1-2 frasi)",
  "content": [
    "Il primo paragrafo dell'articolo completo.",
    "Il secondo paragrafo dell'articolo completo.",
    "## Sottotitolo (usa ## per i sottotitoli)",
    "Continua con altri paragrafi..."
  ],
  "author": "Nome Giornalista",
  "category": "CRONACA",
  "date": "29 Ottobre 2025",
  "readTime": "5 MIN DI LETTURA",
  "image": "URL_DELL_IMMAGINE",
  "imageCaption": "Descrizione dell'immagine",
  "imageCredit": "Foto: Weazel News",
  "featured": "main",
  "breaking": true,
  "time": "1h fa"
}
```

---

## 🔑 Spiegazione dei Campi

### Campi Obbligatori

- **id**: Un numero unico per l'articolo (usa il prossimo numero disponibile)
- **title**: Il titolo dell'articolo
- **summary**: Il riassunto che appare in homepage
- **content**: L'articolo completo (array di paragrafi)
- **author**: Nome del giornalista
- **category**: Categoria dell'articolo
- **date**: Data di pubblicazione
- **featured**: Dove apparirà l'articolo in homepage

### Campi Opzionali

- **readTime**: Tempo di lettura stimato (es: "5 MIN DI LETTURA")
- **image**: URL dell'immagine dell'articolo
- **imageCaption**: Descrizione dell'immagine
- **imageCredit**: Chi ha scattato la foto
- **breaking**: true se è una notizia dell'ultim'ora
- **time**: Quanto tempo fa è stato pubblicato (es: "1h fa")
- **audio**: true se è un articolo audio
- **audioDuration**: Durata dell'audio (es: "11 MIN")

---

## 📍 Posizionamento in Homepage (featured)

Il campo **"featured"** determina dove appare l'articolo:

- **"main"**: Articolo principale in alto a sinistra
- **"media"**: Articolo con video/immagine grande al centro
- **"side"**: Articolo laterale a destra
- **"secondary"**: Articoli secondari sotto quello principale
- **"bottom"**: Articoli in basso nella grid
- **null o non specificato**: Articolo solo nell'archivio

**IMPORTANTE**: Puoi avere un solo articolo per ogni posizione (eccetto "secondary" e "bottom" che possono averne 2).

---

## 🆕 Come Aggiungere un Nuovo Articolo

### Passo 1: Apri articles.json
Apri il file `articles.json` con un editor di testo (Notepad++, VS Code, o anche Notepad).

### Passo 2: Copia un Articolo Esistente
Copia un articolo esistente dall'inizio `{` alla fine `}`, inclusa la virgola.

### Passo 3: Incolla e Modifica
Incolla l'articolo copiato prima dell'ultima parentesi quadra `]` del file.

### Passo 4: Modifica i Contenuti
Cambia tutti i campi con le tue informazioni:
- Cambia l'**id** con il prossimo numero disponibile
- Cambia il **title**, **summary**, **content**, ecc.

### Passo 5: Salva
Salva il file e ricarica la pagina del sito.

---

## ✏️ Esempio Pratico

```json
{
  "id": "9",
  "title": "Incendio al Pier di Del Perro: Nessun Ferito",
  "summary": "Un incendio di vaste proporzioni ha colpito il molo di Del Perro questa mattina. I vigili del fuoco hanno domato le fiamme in poche ore.",
  "content": [
    "Del Perro - Un incendio è scoppiato questa mattina intorno alle 6:00 presso il molo di Del Perro, causando danni significativi a diverse strutture.",
    "Le fiamme si sono propagate rapidamente a causa del vento forte, ma fortunatamente non ci sono stati feriti.",
    "## Intervento dei Vigili del Fuoco",
    "I vigili del fuoco sono intervenuti con 8 squadre e hanno lavorato per oltre 3 ore per domare completamente l'incendio.",
    "\"È stato un intervento complesso a causa delle condizioni del vento,\" ha dichiarato il capo dei vigili del fuoco Rodriguez.",
    "## Cause dell'Incendio",
    "Le autorità stanno ancora indagando sulle cause dell'incendio. Non si esclude un corto circuito elettrico.",
    "Il molo resterà chiuso per almeno una settimana per le operazioni di messa in sicurezza e ricostruzione."
  ],
  "author": "Carlos Martinez",
  "category": "CRONACA",
  "date": "29 Ottobre 2025",
  "readTime": "4 MIN DI LETTURA",
  "image": "https://via.placeholder.com/1200x600/ff4500/ffffff?text=Incendio+Del+Perro",
  "imageCaption": "Il molo di Del Perro durante l'incendio di questa mattina.",
  "imageCredit": "Foto: Weazel News",
  "featured": "secondary",
  "breaking": false
}
```

---

## 📝 Suggerimenti per Scrivere

### Per il Summary (Riassunto)
- Massimo 2-3 frasi
- Spiega l'essenziale della notizia
- Invoglia a leggere l'articolo completo

### Per il Content (Contenuto)
- Scrivi ogni paragrafo come una stringa separata nell'array
- Usa `"## Titolo Sezione"` per creare sottotitoli
- Usa `"### Sottotitolo"` per sottotitoli più piccoli
- Inizia con informazioni più importanti
- Usa virgolette `\"` per i dialoghi (con backslash)

### Per le Immagini
- Puoi usare URL di immagini online
- Oppure placeholder temporanei: `https://via.placeholder.com/1200x600/colore/testo?text=Il+Tuo+Testo`
- Esempio: `https://via.placeholder.com/1200x600/333333/ffffff?text=Breaking+News`

---

## 🎨 Categorie Disponibili

- **CRONACA** - Notizie di cronaca locale
- **POLITICA** - Notizie politiche
- **SPORT** - Notizie sportive
- **METEO** - Notizie meteo
- **LIFESTYLE** - Lifestyle e tendenze
- **CULTURA** - Cultura e eventi
- **ECONOMIA** - Notizie economiche

---

## ⚠️ ERRORI COMUNI DA EVITARE

### 1. Virgole Mancanti
❌ SBAGLIATO:
```json
{
  "id": "1"
  "title": "Titolo"
}
```

✅ CORRETTO:
```json
{
  "id": "1",
  "title": "Titolo"
}
```

### 2. Virgolette Non Chiuse
❌ SBAGLIATO:
```json
"title": "Il mio titolo
```

✅ CORRETTO:
```json
"title": "Il mio titolo"
```

### 3. Virgola Dopo l'Ultimo Elemento
❌ SBAGLIATO:
```json
{
  "id": "1",
  "title": "Titolo",
}
```

✅ CORRETTO:
```json
{
  "id": "1",
  "title": "Titolo"
}
```

### 4. Dimenticare il Backslash per le Virgolette
❌ SBAGLIATO:
```json
"content": "Ha detto: "Ciao""
```

✅ CORRETTO:
```json
"content": "Ha detto: \"Ciao\""
```

---

## 🔧 Validare il JSON

Dopo aver modificato `articles.json`, puoi verificare che sia corretto usando:
- **JSONLint**: https://jsonlint.com/
- Copia e incolla il contenuto del file
- Clicca "Validate JSON"
- Se ci sono errori, ti dirà esattamente dove sono

---

## 📱 Test del Sito

Dopo aver modificato gli articoli:
1. Salva il file `articles.json`
2. Ricarica la pagina del sito (F5 o Ctrl+R)
3. Controlla che gli articoli appaiano correttamente
4. Clicca su un articolo per verificare che si apra correttamente

---

## 🆘 Problemi e Soluzioni

**Problema**: La pagina è bianca
- **Soluzione**: C'è un errore di sintassi nel JSON. Usa JSONLint per trovarlo.

**Problema**: Un articolo non appare
- **Soluzione**: Verifica che il campo "featured" sia impostato correttamente.

**Problema**: Le immagini non si vedono
- **Soluzione**: Verifica che l'URL dell'immagine sia corretto e accessibile.

**Problema**: L'articolo non si apre quando clicco
- **Soluzione**: Verifica che l'id sia unico e corretto.

---

## 📧 Supporto

Per problemi o domande, contatta il team tecnico o consulta questa guida.

**Buon lavoro! 🎉**
