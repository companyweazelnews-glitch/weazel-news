# 📸 Cartella Immagini

Questa cartella contiene tutte le immagini locali del sito Weazel News.

## 📁 Struttura

```
src/assets/img/
├── articles/        # Immagini per articoli
├── backgrounds/     # Sfondi e banner
├── logos/          # Loghi e branding
└── placeholders/   # Immagini placeholder
```

## 🖼️ Come Usare le Immagini Locali

### Opzione 1: Immagini in questa Cartella

Se metti le immagini qui, usa percorsi relativi in `articles.json`:

```json
{
  "id": "1",
  "title": "Rapina alla Pacific Standard",
  "image": "src/assets/img/articles/rapina-bank.jpg",
  ...
}
```

### Opzione 2: Immagini Online (Consigliato)

Per facilità di gestione, usa URL esterni:

```json
{
  "id": "1",
  "title": "Rapina alla Pacific Standard",
  "image": "https://i.imgur.com/xyz123.jpg",
  ...
}
```

## 📏 Dimensioni Consigliate

### Homepage
- **Articolo Principale**: 1200x600px
- **Featured Media**: 1200x800px  
- **Side Feature**: 800x600px
- **Bottom Stories**: 800x400px

### Articoli Completi
- **Featured Image**: 1920x1080px o 1200x600px

## 🎨 Formati Supportati

- ✅ **JPG/JPEG** - Per fotografie (consigliato)
- ✅ **PNG** - Per grafica con trasparenza
- ✅ **WEBP** - Formato moderno e leggero
- ✅ **GIF** - Per animazioni (usa con parsimonia)

## 💡 Best Practices

1. **Nome File Descrittivi**
   - ✅ `rapina-pacific-standard-2025.jpg`
   - ❌ `IMG_20231029_123456.jpg`

2. **Ottimizza le Immagini**
   - Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
   - Dimensione target: < 500KB per immagine

3. **Organizzazione**
   - Crea sottocartelle per categoria
   - Mantieni una struttura ordinata

## 📂 Esempio di Struttura

```
src/assets/img/
├── articles/
│   ├── cronaca/
│   │   ├── rapina-bank-01.jpg
│   │   └── sparatoria-vespucci.jpg
│   ├── sport/
│   │   └── derby-ls-fc.jpg
│   └── politica/
│       └── sindaco-asia.jpg
├── backgrounds/
│   └── header-bg.jpg
├── logos/
│   └── weazel-logo.png
└── placeholders/
    └── default-article.jpg
```

## 🚀 Deploy

### Con Immagini Locali
Se usi immagini in questa cartella, assicurati di caricarle tutte su Vercel insieme al progetto.

### Con Immagini Online
Se usi URL esterni (Imgur, Cloudinary), questa cartella può rimanere vuota.

## ⚠️ Note Importanti

- Le immagini in questa cartella aumentano la dimensione del deploy
- Per progetti grandi, considera l'uso di CDN esterni (Imgur, Cloudinary)
- Vercel ha limiti sulla dimensione totale del progetto (100MB free tier)

## 🆘 Aiuto

Per domande su come gestire le immagini, consulta **GUIDA_IMMAGINI.md** nella root del progetto.
