/*
  Dit eget katalog over webshows og serier, som TMDB/JustWatch ikke dækker
  (YouTube, Dailymotion, Vimeo, Twitch, Nebula, Dropout, egne hjemmesider osv.).

  Alt du lægger her, kan alle brugere af appen se og søge i.
  Shows du tilføjer via knappen "Tilføj show" i appen gemmes kun i din egen browser.
  Brug "Eksportér" i appen og indsæt resultatet her for at dele dem med alle.

  Felter:
    id        unik tekst, fx "murder-drones"
    title     titel
    aliases   (valgfri) andre navne der skal kunne søges på
    type      "tv" (serie) eller "movie" (film)
    year      (valgfri) år
    poster    (valgfri) billed-URL. Uden billede laves en farvet plakat med initialer
    overview  (valgfri) kort beskrivelse
    tmdb      (valgfri) { id: 1399, media: "tv" } kobler showet til en TMDB-titel,
              så dine links vises sammen med TMDB's tjenester
    links     liste over hvor showet kan ses:
      platform   fx "YouTube", "Dailymotion", "Vimeo", "Twitch", "Nebula", "Dropout", "Hjemmeside"
      url        direkte link
      kind       "free", "ads", "flatrate", "rent" eller "buy"
      countries  ["*"] for hele verden, ellers landekoder som ["DK", "SE", "NO"]
    extras    (valgfri) andre links: [{ label: "Officiel hjemmeside", url: "https://…" }]
              fx hjemmeside, Instagram, Discord, wiki
    merch     (valgfri) merch-butikker: [{ label: "Officiel shop", url: "https://…" }]

  Eksemplerne nedenfor er gode udgangspunkter. Tjek links og landebegrænsninger,
  før du lægger appen online.
*/
window.SHOWS = [
  {
    id: "murder-drones",
    title: "Murder Drones",
    type: "tv",
    year: 2021,
    overview: "Animeret sci-fi-horror-serie fra Glitch Productions om dræberdroner på en øde planet.",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/@GLITCH", kind: "free", countries: ["*"] }
    ]
  },
  {
    id: "the-amazing-digital-circus",
    title: "The Amazing Digital Circus",
    aliases: ["TADC", "Digital Circus"],
    type: "tv",
    year: 2023,
    overview: "Animeret serie fra Glitch Productions om mennesker fanget i et surrealistisk digitalt cirkus.",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/@GLITCH", kind: "free", countries: ["*"] }
    ]
  },
  {
    id: "helluva-boss",
    title: "Helluva Boss",
    type: "tv",
    year: 2020,
    overview: "Voksen animationsserie fra VivziePop om et lille firma af lejemordere i helvede.",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/@VivziePop", kind: "free", countries: ["*"] }
    ]
  },
  {
    id: "critical-role",
    title: "Critical Role",
    type: "tv",
    year: 2015,
    overview: "Stemmeskuespillere spiller Dungeons & Dragons. Kampagnerne ligger gratis online.",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/@criticalrole", kind: "free", countries: ["*"] },
      { platform: "Twitch", url: "https://www.twitch.tv/criticalrole", kind: "free", countries: ["*"] }
    ],
    extras: [
      { label: "Officiel hjemmeside", url: "https://critrole.com" }
    ],
    merch: [
      { label: "Critical Role Shop", url: "https://shop.critrole.com" }
    ]
  },
  {
    id: "dimension-20",
    title: "Dimension 20",
    type: "tv",
    year: 2018,
    overview: "Bordrollespil med Brennan Lee Mulligan som spilleder. Hele sæsoner kræver abonnement.",
    links: [
      { platform: "Dropout", url: "https://www.dropout.tv/dimension-20", kind: "flatrate", countries: ["*"] },
      { platform: "YouTube", url: "https://www.youtube.com/@Dimension20", kind: "free", countries: ["*"] }
    ],
    extras: [
      { label: "Dropout", url: "https://www.dropout.tv" }
    ]
  },
  {
    id: "hot-ones",
    title: "Hot Ones",
    type: "tv",
    year: 2015,
    overview: "Kendte gæster svarer på spørgsmål, mens de spiser stadig stærkere kyllingevinger.",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/@FirstWeFeast", kind: "free", countries: ["*"] }
    ],
    merch: [
      { label: "Hot Ones-saucer hos Heatonist", url: "https://heatonist.com" }
    ]
  }
];
