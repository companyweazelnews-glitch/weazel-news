# Sistema di Posizionamento Articoli - Weazel News

## Come Funziona

Il sistema di posizionamento degli articoli utilizza due campi nel file `articles.json`:

### 1. **position** (Posizione)
Definisce dove l'articolo verrà visualizzato nella homepage:

- `"main"` - Articolo principale (grande, in alto a sinistra)
- `"media"` - Sezione media con immagine featured (centro-destra)
- `"side"` - Articolo laterale (destra)
- `"bottom"` - Articoli nella sezione inferiore

### 2. **priority** (Priorità)
Numero che determina l'importanza dell'articolo:

- **Numeri più bassi = più importante** (es: priority: 1 è più importante di priority: 5)
- Se non specifichi una posizione, gli articoli vengono assegnati in base alla priorità
- Gli articoli con `archived: true` non vengono mostrati nella homepage

## Esempio di Utilizzo

```json
{
  "id": "1",
  "title": "Rapina alla Pacific Standard",
  "position": "main",     // Sarà l'articolo principale
  "priority": 1,          // Massima priorità
  "archived": false
}
```

## Regole di Assegnazione

1. **Con position specificato**: L'articolo va nella posizione richiesta
2. **Senza position**: Il sistema assegna automaticamente in base alla priorità:
   - L'articolo con priority più bassa va in "main"
   - Il secondo va in "media"
   - Il terzo va in "side"
   - Gli altri vanno in "bottom"

## Tips

- Usa `priority: 1, 2, 3, 4...` per articoli normali
- Usa `priority: 99` o superiore per articoli meno importanti
- Combina `archived: true` con priority alta per articoli vecchi
- Non è necessario specificare sempre il campo `position`, il sistema è intelligente!

## Esempio Completo

```json
[
  {
    "id": "1",
    "title": "Breaking News!",
    "position": "main",
    "priority": 1,
    "archived": false
  },
  {
    "id": "2",
    "title": "Evento Importante",
    "position": "media",
    "priority": 2,
    "archived": false
  },
  {
    "id": "3",
    "title": "Storia Interessante",
    "priority": 3,
    // Nessuna position specificata, 
    // andrà automaticamente in "side" per via della priority
    "archived": false
  }
]
```
