# 📅 SISTEMA DI PUBBLICAZIONI E TAG - Weazel News

## 🎯 Come Funziona il Nuovo Sistema

Il sito ora funziona con un sistema di **pubblicazioni cronologiche** e **archivio per tag**.

---

## 📰 Homepage - Ultimi Articoli

### Cosa Appare in Homepage
**Solo gli articoli NON archiviati** (`"archived": false`)

Gli articoli vengono ordinati automaticamente dal **più recente al più vecchio** in base alla data di pubblicazione (`publishedDate`).

### Layout Homepage
- **Articolo Principale**: L'articolo più recente
- **Featured Media**: Il secondo più recente  
- **Side Feature**: Il terzo più recente
- **Bottom Stories**: Altri articoli recenti

---

## 📅 Data di Pubblicazione

Ogni articolo DEVE avere una data di pubblicazione in formato ISO:

```json
{
  "id": "1",
  "title": "Titolo Articolo",
  "publishedDate": "2025-10-29T20:00:00Z",
  ...
}
```

### Formato Data
- `2025-10-29T20:00:00Z` = 29 Ottobre 2025, ore 20:00 UTC
- `2025-10-28T15:30:00Z` = 28 Ottobre 2025, ore 15:30 UTC

### Come Impostare la Data

**Per pubblicare ORA:**
Usa la data e ora corrente in formato ISO.

**Per articoli vecchi (archiviati):**
Usa una data passata:
```json
"publishedDate": "2025-10-25T10:00:00Z",
"archived": true
```

---

## 🏷️ Sistema Tag

### Cos'è un Tag
Un tag è una categoria/argomento dell'articolo.

Esempio:
```json
{
  "id": "1",
  "title": "Rapina alla Pacific Standard",
  "tags": ["cronaca", "criminalità", "los-santos", "breaking"],
  ...
}
```

### Tag Consigliati

**Per Categoria:**
- `cronaca` - Notizie di cronaca
- `sport` - Notizie sportive
- `politica` - Notizie politiche
- `economia` - Notizie economiche
- `cultura` - Eventi culturali
- `lifestyle` - Lifestyle e tendenze
- `meteo` - Previsioni e eventi meteorologici

**Per Località:**
- `los-santos` - Città di Los Santos
- `vinewood` - Quartiere Vinewood
- `sandy-shores` - Sandy Shores
- `blaine-county` - Contea di Blaine
- `paleto-bay` - Paleto Bay

**Per Tipo:**
- `breaking` - Notizia dell'ultima ora
- `emergenza` - Situazione di emergenza
- `traffico` - Viabilità e trasporti
- `crimine` / `criminalità` - Criminalità

**Altro:**
- `calcio`, `basket`, `tennis` - Sport specifici
- `cinema`, `musica`, `teatro` - Cultura
- `turismo`, `hotel`, `ristorazione` - Settore turistico

### Regole Tag
1. **Usa minuscolo**: `cronaca` non `Cronaca`
2. **Usa trattini**: `los-santos` non `los santos`
3. **Max 5-6 tag** per articolo
4. **Sii specifico**: Più dettagli = migliore organizzazione

---

## 📦 Archivio

### Come Archiviare un Articolo

Imposta `"archived": true`:

```json
{
  "id": "5",
  "title": "Articolo Vecchio",
  "archived": true,
  ...
}
```

### Cosa Succede agli Articoli Archiviati
- **NON appaiono** in homepage
- **Sono accessibili** tramite navbar (filtro per tag)
- **Sono accessibili** tramite link diretto
- **Sono inclusi** nell'archivio per tag

---

## 🗂️ Navbar - Archivio per Tag

### Come Funziona
La navbar sotto il titolo mostra:
- **"Tutti"** - Torna alla homepage
- **Tag disponibili** - Uno per ogni tag presente negli articoli

Esempio navbar:
```
Tutti | Cronaca | Sport | Politica | Los Santos | Vinewood
```

### Quando Clicchi su un Tag
Mostra **tutti gli articoli** (anche archiviati) con quel tag, ordinati dal più recente.

---

## ✏️ Esempio Completo di Articolo

```json
{
  "id": "1",
  "title": "Rapina alla Pacific Standard Bank",
  "summary": "Una banda organizzata ha colpito la banca ieri sera.",
  "content": [
    "Los Santos - Una rapina audace ha scosso il centro finanziario.",
    "## La Dinamica",
    "I rapinatori hanno operato con precisione militare.",
    "## Risposta della Polizia",
    "La polizia è intervenuta immediatamente."
  ],
  "author": "Marcus Thompson",
  "category": "CRONACA",
  "tags": ["cronaca", "criminalità", "los-santos", "breaking"],
  "publishedDate": "2025-10-29T20:00:00Z",
  "readTime": "5 MIN",
  "image": "https://i.imgur.com/esempio.jpg",
  "imageCaption": "La scena della rapina",
  "imageCredit": "Foto: Weazel News",
  "archived": false
}
```

---

## 🔄 Workflow Giornaliero

### 1. Nuovo Articolo (Oggi)
```json
{
  "id": "nuovoID",
  "title": "Notizia di Oggi",
  "publishedDate": "2025-10-29T18:00:00Z",  ← Data di oggi!
  "archived": false,  ← Non archiviato
  "tags": ["cronaca", "los-santos"],
  ...
}
```
→ Apparirà automaticamente in homepage come articolo più recente!

### 2. Archiviare Articoli Vecchi
Dopo qualche giorno, imposta `"archived": true` sugli articoli vecchi:

```json
{
  "id": "3",
  "title": "Notizia di 5 Giorni Fa",
  "publishedDate": "2025-10-24T10:00:00Z",
  "archived": true,  ← Ora è archiviato
  ...
}
```
→ Sparirà dalla homepage ma resterà nell'archivio per tag!

---

## 📊 Gestione Articoli

### Homepage "Pulita"
Mantieni in homepage solo 5-10 articoli recenti:
- Articoli nuovi: `"archived": false`
- Articoli vecchi (>1 settimana): `"archived": true`

### Archivio Completo
Gli utenti possono accedere a **tutti** gli articoli (anche vecchi) tramite:
- Navbar → Click su tag specifico
- Link diretto all'articolo

---

## 🎨 Visualizzazione Tag

### Nell'Articolo
I tag appaiono sotto il titolo:
```
#cronaca #criminalità #los-santos #breaking
```

### Nella Navbar
I tag appaiono come voci di menu:
```
Tutti | Cronaca | Criminalità | Los Santos | Breaking
```

### Nell'Archivio
Pagina dedicata con tutti gli articoli del tag:
```
Archivio: Cronaca
5 articoli trovati

[Lista articoli con quel tag]
```

---

## ⚙️ Campi Obbligatori vs Opzionali

### OBBLIGATORI
- `id` - ID univoco
- `title` - Titolo
- `summary` - Riassunto
- `content` - Contenuto (array)
- `author` - Autore
- `category` - Categoria
- `tags` - Tag (array)
- `publishedDate` - Data pubblicazione
- `archived` - true/false

### OPZIONALI
- `readTime` - Tempo di lettura
- `image` - URL immagine
- `imageCaption` - Didascalia
- `imageCredit` - Crediti foto

---

## 🚀 Quick Start

### Pubblicare un Nuovo Articolo

1. **Copia un articolo esistente** in `articles.json`
2. **Cambia l'ID** (usa il prossimo numero)
3. **Imposta data di OGGI**:
   ```json
   "publishedDate": "2025-10-29T20:00:00Z"
   ```
4. **Imposta archived = false**:
   ```json
   "archived": false
   ```
5. **Aggiungi tag appropriati**:
   ```json
   "tags": ["cronaca", "breaking", "los-santos"]
   ```
6. **Salva e ricarica il sito**

L'articolo apparirà automaticamente in homepage come il più recente!

---

## 💡 Suggerimenti

### Tag Naming
- **Corto**: `sport` non `notizie-sportive`
- **Generico**: `cronaca` copre molti articoli
- **Specifico quando serve**: `los-santos-fc` per articoli sulla squadra

### Gestione Homepage
- Mantieni max 10 articoli attivi (`archived: false`)
- Archivia articoli dopo 3-7 giorni
- Gli articoli archiviati restano accessibili per tag!

### Organizzazione
- Usa tag consistenti (sempre gli stessi)
- Non creare troppi tag (max 20-30 tag totali)
- Riutilizza tag esistenti quando possibile

---

## 🔍 Navigazione Utente

### Dall'Homepage
1. Utente vede gli ultimi articoli
2. Click su articolo → Legge articolo completo
3. Click su tag (#cronaca) → Vede tutti gli articoli "cronaca"

### Dalla Navbar
1. Utente click su "Cronaca" nella navbar
2. Vede archivio con tutti gli articoli cronaca
3. Click su articolo → Legge articolo completo

### Dall'Articolo
1. Utente legge un articolo
2. Vede i tag sotto il titolo
3. Click su #tag → Vede altri articoli simili

---

## ✅ Vantaggi del Sistema

- ✅ **Homepage sempre aggiornata** - Articoli recenti in automatico
- ✅ **Archivio organizzato** - Per tag, facile da navigare
- ✅ **Nessun lavoro manuale** - Ordinamento automatico
- ✅ **Flessibile** - Archivia quando vuoi
- ✅ **Navigazione intuitiva** - Utenti trovano facilmente contenuti

---

**Il sistema è pronto! Inizia a pubblicare articoli con date e tag! 📰🎉**
