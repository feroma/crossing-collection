export const state = () => ({
  // Configurazioni generali del sito
  config: {
    siteName: 'Crossing Collection',
    siteDescription: 'Una collezione unica che attraversa confini e culture',
    author: 'Crossing Collection Team',
    version: '1.0.0',
    language: 'en',
    theme: {
      primaryColor: '#2563eb',
      secondaryColor: '#64748b',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    },
    contact: {
      email: 'info@crossingcollection.com',
      phone: '+39 123 456 7890',
      address: 'Via Roma, 123 - 00100 Roma (RM)'
    },
    social: {
      instagram: '',
      facebook: '',
      twitter: '',
      linkedin: ''
    }
  },

  // Stato dell'interfaccia utente
  modalOpen: false,
  locationsModalOpen: false,

  // Array dei partner
// Array dei partner
  partners: [
    {
      id: 1,
      name: 'Mr & Mrs Smith',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/01_mr_mrs_smith.png',
      alt: 'Mr & Mrs Smith - Boutique hotel booking platform and luxury travel specialists'
    },
    {
      id: 2,
      name: 'Aficionados',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/02_aficionados.png',
      alt: 'The Aficionados - Curated design hotels and luxury travel culture magazine'
    },
    {
      id: 3,
      name: 'Tablet Hotels',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/03_tablet_hotels.png',
      alt: 'Tablet Hotels - Original curated luxury and boutique hotel selection, a Michelin experience'
    },
    {
      id: 4,
      name: 'XO',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/04_xo.png',
      alt: 'XO - Luxury private jet travel platform and aviation experience provider'
    },
    {
      id: 5,
      name: 'The Thinking Traveller',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/05_the_thinking_traveller.png',
      alt: 'The Thinking Traveller - World\'s best villa rental company with luxury Mediterranean properties'
    },
    {
      id: 6,
      name: 'Virtuoso',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/06_virtuoso.png',
      alt: 'Virtuoso - Leading global luxury travel network and agency consortium'
    },
    {
      id: 7,
      name: 'SmartFlyer',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/07_smartflyer.png',
      alt: 'SmartFlyer - Full-service luxury travel agency for curious travelers worldwide'
    },
    {
      id: 8,
      name: 'Fora',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/08_fora.png',
      alt: 'Fora - Modern travel agency platform empowering luxury travel advisors'
    },
    {
      id: 9,
      name: 'Serendipians',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/09_serendipians.png',
      alt: 'Serendipians - Exclusive community of luxury travel designers and bespoke experience creators'
    },
    {
      id: 10,
      name: 'Savenio',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/10_savenio.png',
      alt: 'Savenio - Luxury travel and lifestyle concierge services platform'
    },
    {
      id: 11,
      name: 'Quintessentially',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/11_quintessentially.png',
      alt: 'Quintessentially - Premier luxury lifestyle management and concierge services'
    },
    {
      id: 12,
      name: 'Abercrombie & Kent',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/12_abercrombie_kent.png',
      alt: 'Abercrombie & Kent - Luxury adventure travel and safari specialists since 1962'
    },
    {
      id: 13,
      name: 'Carson',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/13_carson.png',
      alt: 'Carson - Luxury travel and hospitality management services'
    },
    {
      id: 14,
      name: 'CB',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/14_cb.png',
      alt: 'CB - Premium travel and lifestyle brand partner'
    },
    {
      id: 15,
      name: 'Frosch',
      logo: 'https://www.stage72.info/crossing-collection/repo/logo/15_frosch.png',
      alt: 'Frosch - Luxury travel agency and vacation planning specialists'
    }
  ],

  // Array delle locations/proprietà
  locations: [
    {
      name: 'Crossing Manzoni',
      description: 'Boutique Lodging',
      location: 'Milan',
      website: 'https://www.crossingmanzoni.it',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_meta.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_meta.jpg',
        alt: 'Crossing Manzoni boutique Lodging facade in Milan'
      },
      gallery: [
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_01.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_01.jpg',
          alt: 'Crossing Manzoni boutique hotel bedroom with exposed wooden beams, charcoal walls, golden circular pendant light and designer desk area'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_02.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_02.jpg',
          alt: 'Crossing Manzoni stylish seating area detail featuring contemporary gray armchair, curated books including "A Man & His Watch", and artistic coral sculpture'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_03.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_03.jpg',
          alt: 'Crossing Manzoni bedroom featuring illuminated vertical slat headboard design with architectural lighting and luxurious white bedding'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_04.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_04.jpg',
          alt: 'Crossing Manzoni guest lifestyle moment showing woman in felt hat enjoying coffee in plush white bathrobe with elegant classical artwork backdrop'
        }
      ]
    },
    {
      name: 'Crossing Condotti',
      description: 'Boutique Lodging',
      location: 'Rome',
      website: 'https://www.crossingcondotti.it',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_meta.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_meta.jpg',
        alt: 'Crossing Condotti boutique Lodging entrance near Via dei Condotti in Rome'
      },
      gallery: [
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_01.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_01.jpg',
          alt: 'Crossing Condotti duplex suite with dramatic green walls, natural fiber staircase runner, modern yellow velvet sofa and botanical artwork'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_02.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_02.jpg',
          alt: 'Crossing Condotti sleek black kitchen with hanging white ceramic cups, fresh Italian ingredients, eucalyptus branches and open cookbook'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_03.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_03.jpg',
          alt: 'Crossing Condotti elegant living room with golden yellow velvet sofa, framed classical landscapes, design elephant sculpture and vintage tile detail'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_04.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_04.jpg',
          alt: 'Crossing Condotti sophisticated console styling on sage green wall with white pearl beaded cactus sculpture, botanical arrangements and design books'
        }
      ]
    },
    {
      name: 'Crossing Corso',
      description: 'Apartment',
      location: 'Rome',
      website: 'https://www.crossingcondotti.it',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/corso_meta.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/corso_meta.jpg',
        alt: 'Crossing Corso luxury apartment building exterior in central Rome'
      },
      gallery: [
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/corso_01.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/corso_01.jpg',
          alt: 'Crossing Corso apartment minimalist living area with Danish cord lounge chair, cream bouclé sofa, brass accents and view of Roman architecture'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/corso_02.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/corso_02.jpg',
          alt: 'Crossing Corso modern bathroom featuring black stone vanity, circular mirror, brass fixtures and architectural glass shower partition'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/corso_03.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/corso_03.jpg',
          alt: 'Crossing Corso bedroom with French doors opening to classic Roman balcony, neutral tones, modern lighting and traditional Italian shutters'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/corso_04.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/corso_04.jpg',
          alt: 'Crossing Corso elegant detail shot of design books including Milan guide on reflective surface with eucalyptus branches and natural lighting'
        }
      ]
    },
    {
      name: 'Crossing The Rock',
      description: 'Villa',
      location: 'Sicily',
      website: 'https://www.crossingtherock.com',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_meta.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_meta.jpg',
        alt: 'Crossing The Rock luxury villa overlooking the Mediterranean Sea in Sicily'
      },
      gallery: [
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_01.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_01.jpg',
          alt: 'Crossing The Rock villa master bedroom with ornate baroque crystal chandelier, panoramic Mediterranean sea views and classic Sicilian elegance'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_02.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_02.jpg',
          alt: 'Crossing The Rock aerial view showcasing infinity pool, lush tropical gardens with palm trees and direct Mediterranean coastline access'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_03.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_03.jpg',
          alt: 'Crossing The Rock dramatic pool terrace with guest in flowing red dress and historic Sicilian watchtower rising from volcanic rock formation'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_04.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_04.jpg',
          alt: 'Crossing The Rock contemporary outdoor lounge area with modern white pergola, guest relaxing with Mediterranean views and ancient tower backdrop'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_05.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_05.jpg',
          alt: 'Crossing The Rock formal living room featuring white marble floors, ornate fireplace, antique paintings, crystal chandelier and sea view terrace'
        }
      ]
    },
    {
      name: 'Crossing The Sea',
      description: 'Family sailing',
      location: 'Mediterranean Sea',
      website: 'https://www.crossing-the-sea.com',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_meta.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_meta.jpg',
        alt: 'Crossing The Sea luxury yacht sailing in the crystal-clear Mediterranean waters'
      },
      gallery: [
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_01.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_01.jpg',
          alt: 'Crossing The Sea authentic family sailing moment with children learning to operate yacht winches and rigging on sparkling Mediterranean waters'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_02.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_02.jpg',
          alt: 'Crossing The Sea yacht al fresco dining setup with fresh herbs, wine bottle, blue glassware and Mediterranean culinary spread at sea'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_03.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_03.jpg',
          alt: 'Crossing The Sea aerial view of sailing yacht anchored in pristine turquoise bay surrounded by forested hills and other pleasure craft'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_04.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_04.jpg',
          alt: 'Crossing The Sea luxury beach setup with perforated blue shade sails, coordinated cushions and pineapple refreshment on pristine sand'
        },
        {
          desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_05.jpg',
          mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_05.jpg',
          alt: 'Crossing The Sea yacht deck lifestyle featuring pineapple-shaped cocktail glasses, fresh sea urchins, yellow dinnerware and Mediterranean entertaining'
        }
      ]
    }
  ],

  // Array delle locations per listing (senza gallery, senza Crossing Corso)
  locationsList: [
    {
      name: 'Crossing Condotti & Corso',
      location: 'Rome',
      website: 'https://www.crossingcondotti.it',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/condotti_thumb.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/condotti_thumb.jpg',
        alt: 'Crossing Condotti & Corso - Main view'
      }
    },
    {
      name: 'Crossing Manzoni',
      location: 'Milan',
      website: 'https://www.crossingmanzoni.it',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/manzoni_thumb.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/manzoni_thumb.jpg',
        alt: 'Crossing Manzoni - Main view'
      }
    },
    {
      name: 'Crossing The Rock',
      location: 'Sicily',
      website: 'https://www.crossingtherock.com',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/rock_thumb.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/rock_thumb.jpg',
        alt: 'Crossing The Rock - Main view'
      }
    },
    {
      name: 'Crossing The Sea',
      location: 'Mediterranean Sea',
      website: 'https://www.crossing-the-sea.com',
      mainImage: {
        desktop: 'https://www.stage72.info/crossing-collection/repo/lg/JPEG/sea_thumb.jpg',
        mobile: 'https://www.stage72.info/crossing-collection/repo/sm/JPEG/sea_thumb.jpg',
        alt: 'Crossing The Sea - Main view'
      }
    }
  ],

  // Array delle sezioni della landing page
  sections: [
    {
      id: 'concept',
      name: 'Concept Section',
      type: 'concept',
      visible: true,
      order: 1,
      content: {
        _title: 'Concept',
        summary: 'A stay with Crossing is all about relaxing into the <em>comfort of elegance, design</em> and <em>assiduous concierge service</em> to elevate each day. Let us sweep you off your feet with Italian lifestyle and hospitality.',
        body: 'Crossing Collection is an Italian boutique property group with two accommodations in Milan and Rome, a luxury villa in Sicily and a premium yachting holiday experience with routes in Greece and Italy. Our enterprise is the result of a lifetime passion for iconic design, contemporary art, and an eternal wanderlust fuelling a curiosity and passion to meet and host cosmopolitan travellers from all over the world.'
      }
    },
    {
      id: 'whereabouts',
      name: 'Whereabouts Section',
      type: 'whereabouts',
      visible: true,
      order: 2,
      content: {
        title: 'Whereabouts',
        summary: 'Our city properties are defined by their <em>prestigious locations</em>, and our sea holidays are located in the <em>most desirable Mediterranean spots.</em>',
        body: 'Crossing Manzoni is (literally!) right around the corner from Milan\'s coveted fashion mecca that is Via Montenapoleone while down in Rome Crossing Condotti is nestled between the Spanish Steps and the luxury fashion street Via dei Condotti. <br><br>' +
          'Our Mediterranean Sea experiences take guests from the shore line to the horizon with a luxury villa in Sicily located directly on the coastline between Catania and Taormina and a private yacht experience around the Italian Aeolian Islands or the Greek Sporades Archipelago.\n'
      }
    },
    {
      id: 'properties',
      name: 'Properties & Packages Section',
      type: 'properties',
      visible: true,
      order: 3,
      content: {
        title: 'Properties & Packages'
      }
    },
    {
      id: 'art-design',
      name: 'Art & Design Section',
      type: 'art-design',
      visible: true,
      order: 4,
      content: {
        title: 'Art & Design',
        body: 'A stay at a Crossing Collection property is like visiting a friend whose taste and style give you a sense of sophistication and elegance just by being there. Timeless design pieces, modern art and family heirlooms furnish and decorate each unique room.',
        gallery: [
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/1__Alessio_Barchitta_Sculptures___MILAN.jpg",
            "alt": "Alessio Barchitta Sculptures - Milan"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/5__Charles_&_Ray_Eames_Wire_Chair_DKW____MILAN.jpg",
            "alt": "Charles & Ray Eames Wire Chair DKW - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/3__Wetfloor_Painting____ROME.jpg",
            "alt": "Wetfloor Painting - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/2__Piero_Fornasetti_Wall_Paper___ROME.jpg",
            "alt": "Piero Fornasetti Wall Paper - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/6__Unknown_Designer_Gold_Vintage_Sun_Mirror___ROME.jpg",
            "alt": "Unknown Designer Gold Vintage Sun Mirror - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/7__Unknown_Designer_Vintage_Floor_Lamp___ROME.jpg",
            "alt": "Unknown Designer Vintage Floor Lamp - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/12__Jacques_Adnet_Wall_Mirror___MILAN.jpg",
            "alt": "Jacques Adnet Wall Mirror - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/21__Castiglioni_Manzù_Suspension_Parentesi___MILAN.jpg",
            "alt": "Castiglioni Manzù Suspension Parentesi - Milan"
          },


          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/19__Mathieu_Matégot_Coat_Rack___ROME.jpg",
            "alt": "Mathieu Matégot Coat Rack - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/20__Renzo_Serafini_Wall_Lamp___MILAN.jpg",
            "alt": "Renzo Serafini Wall Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/8__Vico_Magistretti_Atollo_Lamp___ROME.jpg",
            "alt": "Vico Magistretti Atollo Lamp - Rome"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/17__Antique_Portrait___ROME.jpg",
            "alt": "Antique Portrait - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/11__Louis_Weisdorf_Multi_Lite_Pendant____ROME.jpg",
            "alt": "Louis Weisdorf Multi Lite Pendant - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/30__Bernard_Schottlander_Mantis_BS5_Wall_Lamp___MILAN.jpg",
            "alt": "Bernard Schottlander Mantis BS5 Wall Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/4__Bernard_Schottlander_DCW_Mantis_Floor_Lamp___ROME.jpg",
            "alt": "Bernard Schottlander DCW Mantis Floor Lamp - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/13__Lars_Tornøe_Kizu_Lamp___MILAN.jpg",
            "alt": "Lars Tornøe Kizu Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/31__Antique_Portrait___MILAN.jpg",
            "alt": "Antique Portrait - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/18__Benedetta_Mori_Ubaldini_Sculptures___ROME.jpg",
            "alt": "Benedetta Mori Ubaldini Sculptures - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/9__Vittoriano_Viganò_VV_Cinquanta_Wall_Lamp___MILAN.jpg",
            "alt": "Vittoriano Viganò VV Cinquanta Wall Lamp - Milan"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/10__Benedetta_Mori_Ubaldini_Sculptures___MILAN.jpg",
            "alt": "Benedetta Mori Ubaldini Sculptures - Milan"
          },


          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/23__Hans_Wegner_Shell_Chair___ROME.jpg",
            "alt": "Hans Wegner Shell Chair - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/16__Vintage_Mirrors___ROME.jpg",
            "alt": "Vintage Mirrors - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/34__Boqa_Acapulco_Chair___ROME.jpg",
            "alt": "Boqa Acapulco Chair - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/32__G_lab_Iron_Cubes___ROME.jpg",
            "alt": "G Lab Iron Cubes - Rome"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/24__Jamie_Hayon_Formakami_Lantern___ROME.jpg",
            "alt": "Jamie Hayon Formakami Lantern - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/25__Papua_New_Guinea_Collar___ROME.jpg",
            "alt": "Papua New Guinea Collar - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/33___G_lab_Sculpture___ROME.jpg",
            "alt": "G Lab Sculpture - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/27__Richard_Sapper_Tizio_Desk_Lamp___MILAN.jpg",
            "alt": "Richard Sapper Tizio Desk Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/28__Beatrice_Spadea_Sculptures___ROME.jpg",
            "alt": "Beatrice Spadea Sculptures - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/29__Sergio_Vanni_Paintings___ROME.jpg",
            "alt": "Sergio Vanni Paintings - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/15__Morten_Gøttler_MG501_Chair___MILAN.jpg",
            "alt": "Morten Gøttler MG501 Chair - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/14__Esben_Klint_EK61_Pendat___MILAN.jpg",
            "alt": "Esben Klint EK61 Pendat - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/22__Le_Corbusier_Lampe_De_Marseille___ROME.jpg",
            "alt": "Le Corbusier Lampe De Marseille - Rome"
          },


        ],
        _gallery: [
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/1__Alessio_Barchitta_Sculptures___MILAN.jpg",
            "alt": "Alessio Barchitta Sculptures - Milan"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/5__Charles_&_Ray_Eames_Wire_Chair_DKW____MILAN.jpg",
            "alt": "Charles & Ray Eames Wire Chair DKW - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/3__Wetfloor_Painting____ROME.jpg",
            "alt": "Wetfloor Painting - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/2__Piero_Fornasetti_Wall_Paper___ROME.jpg",
            "alt": "Piero Fornasetti Wall Paper - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/6__Unknown_Designer_Gold_Vintage_Sun_Mirror___ROME.jpg",
            "alt": "Unknown Designer Gold Vintage Sun Mirror - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/7__Unknown_Designer_Vintage_Floor_Lamp___ROME.jpg",
            "alt": "Unknown Designer Vintage Floor Lamp - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/12__Jacques_Adnet_Wall_Mirror___MILAN.jpg",
            "alt": "Jacques Adnet Wall Mirror - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/21__Castiglioni_Manzu_Suspension_Parentesi___MILAN.jpg",
            "alt": "Castiglioni Manzù Suspension Parentesi - Milan"
          },


          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/19__Mathieu_Matégot_Coat_Rack___ROME.jpg",
            "alt": "Mathieu Matégot Coat Rack - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/20__Renzo_Serafini_Wall_Lamp___MILAN.jpg",
            "alt": "Renzo Serafini Wall Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/8__Vico_Magistretti_Atollo_Lamp___ROME.jpg",
            "alt": "Vico Magistretti Atollo Lamp - Rome"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/17__Antique_Portrait___ROME.jpg",
            "alt": "Antique Portrait - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/11__Louis_Weisdorf_Multi_Lite_Pendant____ROME.jpg",
            "alt": "Louis Weisdorf Multi Lite Pendant - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/30__Bernard_Schottlander_Mantis_BS5_Wall_Lamp___MILAN.jpg",
            "alt": "Bernard Schottlander Mantis BS5 Wall Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/4__Bernard_Schottlander_DCW_Mantis_Floor_Lamp___ROME.jpg",
            "alt": "Bernard Schottlander DCW Mantis Floor Lamp - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/13__Lars_Tornøe_Kizu_Lamp___MILAN.jpg",
            "alt": "Lars Tornøe Kizu Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/31__Antique_Portrait___MILAN.jpg",
            "alt": "Antique Portrait - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/18__Benedetta_Mori_Ubaldini_Sculptures___ROME.jpg",
            "alt": "Benedetta Mori Ubaldini Sculptures - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/9__Vittoriano_Viganò_VV_Cinquanta_Wall_Lamp___MILAN.jpg",
            "alt": "Vittoriano Viganò VV Cinquanta Wall Lamp - Milan"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/10__Benedetta_Mori_Ubaldini_Sculptures___MILAN.jpg",
            "alt": "Benedetta Mori Ubaldini Sculptures - Milan"
          },


          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/23__Hans_Wegner_Shell_Chair___ROME.jpg",
            "alt": "Hans Wegner Shell Chair - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/16__Vintage_Mirrors___ROME.jpg",
            "alt": "Vintage Mirrors - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/34__Boqa_Acapulco_Chair___ROME.jpg",
            "alt": "Boqa Acapulco Chair - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/32__G_lab_Iron_Cubes___ROME.jpg",
            "alt": "G Lab Iron Cubes - Rome"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/24__Jamie_Hayon_Formakami_Lantern___ROME.jpg",
            "alt": "Jamie Hayon Formakami Lantern - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/25__Papua_New_Guinea_Collar___ROME.jpg",
            "alt": "Papua New Guinea Collar - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/33___G_lab_Sculpture___ROME.jpg",
            "alt": "G Lab Sculpture - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/27__Richard_Sapper_Tizio_Desk_Lamp___MILAN.jpg",
            "alt": "Richard Sapper Tizio Desk Lamp - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/28__Beatrice_Spadea_Sculptures___ROME.jpg",
            "alt": "Beatrice Spadea Sculptures - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/29__Sergio_Vanni_Paintings___ROME.jpg",
            "alt": "Sergio Vanni Paintings - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/15__Morten_Gøttler_MG501_Chair___MILAN.jpg",
            "alt": "Morten Gøttler MG501 Chair - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/14__Esben_Klint_EK61_Pendat___MILAN.jpg",
            "alt": "Esben Klint EK61 Pendat - Milan"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/22__Le_Corbusier_Lampe_De_Marseille___ROME.jpg",
            "alt": "Le Corbusier Lampe De Marseille - Rome"
          },

          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/26__Jeff_Fischer_Dune_Wallpaper___ROME.jpg",
            "alt": "Jeff Fischer Dune Wallpaper - Rome"
          },


          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/35__Antique_Paintings___ROME.jpg",
            "alt": "Antique Paintings - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/36__Charles_&_Ray_Eames_Plastic_Armchair_RAR___ROME.jpg",
            "alt": "Charles & Ray Eames Plastic Armchair RAR - Rome"
          },
          {
            "desktop": "https://www.stage72.info/crossing-collection/repo/art/37__Antique_Tureen___ROME.jpg",
            "alt": "Antique Tureen - Rome"
          }
        ]

      }
    },
    {
      id: 'team',
      name: 'Meet Our Team Section',
      type: 'team',
      visible: true,
      order: 5,
      content: {
        title: 'Meet <em>Our</em> Team',
        staff: [
          {
            name: 'Alfio',
            role: 'Owner',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_06.png',
            description: 'Alfio and Carlotta and are the visionary owners behind Crossing Collection. Alfio, a proud Sicilian, is the perfect host. His warmth and hospitality can be felt wherever you stay - at their boutique city properties, villa, or the yacht. His love for both the familiar and the unknown shapes the Crossing Collection offering, making each stay a journey in itself. He is the brain behind the books, he takes care of the finance, accounting and administration of each property and the group as a whole. It is thanks to his business acumen and finesse that the group has grown into the collection of properties and holiday experiences that it is today.'
          },
          {
            name: 'Carlotta',
            role: 'Owner',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_06.png',
            description: 'Carlotta, a lawyer who always felt her calling lay more in contemporary art and interior design, has an eye for iconic pieces that elevate any space. Crossing Condotti in Rome was her first serious foray into architecture and interior design. With that she found her way to her passion, and has never looked back! From lighting to bespoke furniture and artisanal carpentry, she brings a sophisticated, modern touch to each of their properties. Through a carefully curated mix of colours and textures, she creates environments that exude class, style, and an unexpected elegance, making each space both timeless and inviting.'
          },
          {
            name: 'Francesca',
            role: 'Brand Specialist, Crossing Collection, Milan',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_02.png',
            description: 'Francesca is our multi-talented Brand Specialist in the corporate office in Milan. Her brilliant organisation skills allow her to execute all manner of tasks including office management, occasional back-up concierge support, hiring, and marketing. Francesca loves a challenge and has plenty come her way while keeping things running smoothly behind the scenes. She has been with us for going on ten years and has always proven herself to be a key support staff member for our leadership team to count on.'
          },
          {
            name: 'Gérald',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_01.png',
            role: 'Front Manager and Concierge at Crossing Condotti, Rome',
            description: 'Gérald has a work ethic from time\'s past that is so rare to find, he takes care of guests in Rome with great elegance. A genuine passion for service, performed with discretion and class await those who check in and stay with us in Rome. Gérald\'s hosting skills are defined by his dedication to the client and conscientious execution of tasks. With a knack for finding those hidden treasures around town, Gérald\'s got a list of local secrets that go beyond the typical tourist path. Forget automated replies---at Crossing Condotti, it\'s all about the personal touch.'
          },
          {
            name: 'Francesco',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_01.png',
            role: 'Front Manager and Concierge at Crossing Condotti, Rome',
            description: 'Francesco is a breath of fresh air, warmly inviting guest to make themselves at home. The key components of his role as concierge are suggestions, reservations and overall management of requests. Francesco takes great joy in thinking up creative and exciting ideas and planning with clients. We all appreciate his sunny disposition and ability to think fast on his feet.'
          },
          {
            name: 'Sean',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_01.png',
            role: 'Front Manager and Concierge at Crossing Manzoni, Milan',
            description: 'Sean is our Milanese expert who manages reservations and requests with gusto. Whether you need a taxi, a last-minute dinner spot, or a secret shopping gem, Sean\'s your go to. From the moment you arrive, he\'ll greet you and make sure that you have everything you need to feel right at home. He quickly understands each guest\'s needs and always goes that extra mile make sure preparations are just right. Sean\'s here to make your experience unforgettable, with warmth and personality in every little detail.'
          },
          {
            name: 'Sabrina',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_01.png',
            role: 'Front Manager and Concierge at Crossing Manzoni, Milan',
            description: 'Sabrina looks after guests and reservation requests with great care, ensuring that everything is in place for a flawless stay. With a natural flair for elegance, Sabrina adds a touch of sophistication and style to her work, blending her professional skills with a warm, welcoming approach. Whether it\'s arranging transport, booking the perfect dinner, or curating personalized recommendations, Sabrina\'s attention to detail always shines through. She brings a thoughtful, refined charm to everything she does, so that you feel not just taken care of---but truly looked after.'
          },
          {
            name: 'Fatima & Gina',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_03.png',
            role: 'Housekeepers, Rome',
            description: 'From the door handle at the entranceway to the hidden corner behind the curtain, Fatima and Gina keep tabs on every nook and cranny of our boutique to make sure it is always extremely clean and tidy. Legend has it that Fatima and Gina take housekeeping to a new level, and it is proven in the guest comments online which consistently remain at 9.7 for cleanliness.'
          },
          {
            name: 'Kelly & Melissa',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_03.png',
            role: 'Housekeepers, Milan',
            description: 'Kelly and Melissa are the dynamic duo guaranteeing every corner, cushion, and crevice is in perfect order. They meticulously work to preserve the cleanliness of the entire property. Their commitment to maintaining a welcoming, polished environment ensures that your stay is as comfortable as it is immaculate---always leaving you with the sense that no detail has been overlooked.'
          },
          {
            name: 'Flavia',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_04.png',
            role: 'House Master, Sicily',
            description: 'Flavia is the House Master at Crossing the Rock and a true embodiment of Sicilian hospitality. With a deep-rooted passion for her island and its traditions, she brings the warm, welcoming spirit of Sicily with her everywhere she goes. As House Master, she oversees the staff to ensure everything runs seamlessly. Discreet yet attentive, she\'s committed to making your time at the villa effortless and memorable.'
          },
          {
            name: 'Alfio',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_04.png',
            role: 'Breakfast Butler, Sicily',
            description: 'Alfio is the butler at Crossing the Rock, bringing years of experience in the hospitality industry to create a unique and memorable stay for everyone. Each day, he handpicks the freshest local produce at the market, so that only the best ingredients are used to prepare and serve a delicious breakfast. With his extensive background and sunny disposition, Alfio doesn\'t just serve meals---he crafts a moment of comfort and care. Attentive and professional, Alfio\'s breakfasts make every morning at Crossing the Rock a good morning.'
          },
          {
            name: 'Cettina',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_03.png',
            role: 'Housekeeper, Sicily',
            description: 'Cettina is the force behind the impeccable cleanliness of Crossing the Rock. She ensures every corner of the villa, from top to bottom, is spotless and perfectly maintained. Whether she\'s changing guest linens, or giving the entire property its daily clean, Cettina works tirelessly to keep the villa pristine. Known for her attentive methodical ways, she deep cleans in the winter season, even dusting the books one by one, making sure nothing is overlooked.'
          },
          {
            name: 'Roberto',
            role: 'Groundskeeper, Sicily',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_03.png',
            description: 'Roberto is the hardworking groundskeeper at Crossing the Rock where he manages the entire outdoor space, keeping it pristine and always welcoming. Each day, he\'s up before sunrise, tending to the garden and meticulously maintaining every corner of the property. Whether it\'s tidying up, removing leaves and twigs, or checking that the pool is sparkling with regular water changes, Roberto\'s care and precision never waver.'
          },
          {
            name: 'Emanuele',
            role: 'Skipper - Captain, Crossing the Sea',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_05.png',
            description: 'Emanuele is the skipper and captain of our boutique yacht holiday at Crossing the Sea, tasked with making every journey safe, enjoyable, and unforgettable. With decades of competitive sailing and ocean crossings under his belt, Emanuele\'s skill on the water is exceptional. Always cautious and meticulous, he studies the winds and sea conditions before setting sail, devising routes to guarantee the utmost safety and comfort for guests. Beyond his technical expertise, Emanuele\'s creativity shines when it comes to guest enjoyment. When the kids\' club is not in session, he takes time to engage with younger guests, crafting treasure maps and organising Robinson Crusoe-style picnics on land, turning each day on board into a thrilling adventure. He brings the perfect blend of adventure, skill, and care.'
          },
          {
            name: 'Francesca',
            role: 'Stewardess, Crossing the Sea',
            icon: 'https://www.stage72.info/crossing-collection/repo/icon_04.png',
            description: 'Francesca has been part of the Crossing the Sea team since our very first voyage in 2017. A true gem aboard, she keeps everything spotless, from the cabins to the bathrooms. Every space feels fresh and welcoming. But Francesca\'s talents go far beyond cleaning---she\'s a culinary magician, preparing divine breakfasts, lunches, aperitifs, and dinners with a flair for Mediterranean cuisine. Drawing inspiration from local ingredients found across the islands, her dishes bring a taste of the region\'s finest flavours directly to the table.'
          }
        ]
      }
    },
    {
      id: 'partners',
      name: 'Partners',
      type: 'partners',
      visible: true,
      order: 3,
      content: {
        title: 'IT’S ALWAYS A PLEASURE WORKING WITH'
      }
    }
  ]
})

export const mutations = {
  // Mutations per il modal di navigazione
  SET_MODAL_OPEN (state, isOpen) {
    state.modalOpen = isOpen
  },

  TOGGLE_MODAL (state) {
    state.modalOpen = !state.modalOpen
  },

  // Mutations per il modal delle locations
  SET_LOCATIONS_MODAL_OPEN (state, isOpen) {
    state.locationsModalOpen = isOpen
  },

  TOGGLE_LOCATIONS_MODAL (state) {
    state.locationsModalOpen = !state.locationsModalOpen
  }
}

export const actions = {
  // Actions per il modal di navigazione
  openModal ({commit}) {
    commit('SET_MODAL_OPEN', true)
  },

  closeModal ({commit}) {
    commit('SET_MODAL_OPEN', false)
  },

  toggleModal ({commit}) {
    commit('TOGGLE_MODAL')
  },

  // Actions per il modal delle locations
  openLocationsModal ({commit}) {
    commit('SET_LOCATIONS_MODAL_OPEN', true)
  },

  closeLocationsModal ({commit}) {
    commit('SET_LOCATIONS_MODAL_OPEN', false)
  },

  toggleLocationsModal ({commit}) {
    commit('TOGGLE_LOCATIONS_MODAL')
  }
}

export const getters = {
  // Getters per la configurazione
  siteConfig: state => state.config,
  themeConfig: state => state.config.theme,
  contactInfo: state => state.config.contact,
  socialLinks: state => state.config.social,

  // Getter per il modal
  isModalOpen: state => state.modalOpen,
  isLocationsModalOpen: state => state.locationsModalOpen,

  // Getters per i partners
  allPartners: state => state.partners,
  getPartnerById: state => id => state.partners.find(partner => partner.id === id),
  getPartnerByName: state => name => state.partners.find(partner => partner.name === name),

  // Getters per le locations
  allLocations: state => state.locations,
  getLocationsByCity: state => city => state.locations.filter(location => location.location === city),
  getLocationByName: state => name => state.locations.find(location => location.name === name),

  // Getters per le locations list (senza gallery)
  allLocationsList: state => state.locationsList,
  getLocationsListByCity: state => city => state.locationsList.filter(location => location.location === city),
  getLocationsListByName: state => name => state.locationsList.find(location => location.name === name),

  // Getters per le sezioni
  allSections: state => state.sections,
  visibleSections: state => state.sections.filter(section => section.visible),
  sortedSections: state => state.sections.sort((a, b) => a.order - b.order),
  visibleSortedSections: state => state.sections
    .filter(section => section.visible)
    .sort((a, b) => a.order - b.order),

  getSectionById: state => id => state.sections.find(section => section.id === id),
  getSectionsByType: state => type => state.sections.filter(section => section.type === type)
}
