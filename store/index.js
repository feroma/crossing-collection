export const state = () => ({
  // Configurazioni generali del sito
  config: {
    siteName: 'Crossing Collection',
    siteDescription: 'Una collezione unica che attraversa confini e culture',
    author: 'Crossing Collection Team',
    version: '1.0.0',
    language: 'it',
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
      description: 'Boutique Hotel',
      location: 'Milan',
      website: 'https://www.crossingmanzoni.it',
      mainImage: {
        desktop: 'https://picsum.photos/1200/628?random=1',
        mobile: 'https://picsum.photos/322/498?random=1',
        alt: 'Crossing Manzoni - Main view'
      },
      gallery: [
        {
          desktop: 'https://picsum.photos/698/490?random=1',
          mobile: 'https://picsum.photos/322/498?random=1',
          alt: 'Crossing Manzoni - Interior view'
        },
        {
          desktop: 'https://picsum.photos/698/685?random=2',
          mobile: 'https://picsum.photos/322/498?random=2',
          alt: 'Crossing Manzoni - Bedroom'
        },
        {
          desktop: 'https://picsum.photos/698/927?random=3',
          mobile: 'https://picsum.photos/322/498?random=3',
          alt: 'Crossing Manzoni - Living area'
        },
        {
          desktop: 'https://picsum.photos/579/384?random=4',
          mobile: 'https://picsum.photos/322/498?random=4',
          alt: 'Crossing Manzoni - Living area'
        },
      ]
    },
    {
      name: 'Crossing Condotti',
      description: 'Boutique Hotel',
      location: 'Rome',
      website: 'https://www.crossingcondotti.it',
      mainImage: {
        desktop: 'https://picsum.photos/1200/628?random=5',
        mobile: 'https://picsum.photos/322/498?random=5',
        alt: 'Crossing Condotti - Main view'
      },
      gallery: [
        {
          desktop: 'https://picsum.photos/698/490?random=5',
          mobile: 'https://picsum.photos/322/498?random=5',
          alt: 'Crossing Condotti - Entrance'
        },
        {
          desktop: 'https://picsum.photos/698/685?random=6',
          mobile: 'https://picsum.photos/322/498?random=6',
          alt: 'Crossing Condotti - Suite'
        },
        {
          desktop: 'https://picsum.photos/698/927?random=7',
          mobile: 'https://picsum.photos/322/498?random=7',
          alt: 'Crossing Condotti - Terrace'
        },
        {
          desktop: 'https://picsum.photos/579/384?random=8',
          mobile: 'https://picsum.photos/322/498?random=8',
          alt: 'Crossing Condotti - Lounge'
        },
      ]
    },
    {
      name: 'Crossing Corso',
      description: 'Apartment',
      location: 'Rome',
      website: 'https://www.crossingcondotti.it',
      mainImage: {
        desktop: 'https://picsum.photos/1200/628?random=10',
        mobile: 'https://picsum.photos/322/498?random=10',
        alt: 'Crossing Corso - Main view'
      },
      gallery: [
        {
          desktop: 'https://picsum.photos/698/490?random=9',
          mobile: 'https://picsum.photos/322/498?random=9',
          alt: 'Crossing Corso - Interior view'
        },
        {
          desktop: 'https://picsum.photos/698/685?random=10',
          mobile: 'https://picsum.photos/322/498?random=10',
          alt: 'Crossing Corso - Living room'
        },
        {
          desktop: 'https://picsum.photos/698/927?random=11',
          mobile: 'https://picsum.photos/322/498?random=11',
          alt: 'Crossing Corso - Kitchen'
        },
        {
          desktop: 'https://picsum.photos/579/384?random=12',
          mobile: 'https://picsum.photos/322/498?random=12',
          alt: 'Crossing Corso - Bedroom'
        },
      ]
    },
    {
      name: 'Crossing The Rock',
      description: 'Villa',
      location: 'Sicily',
      website: 'https://www.crossingtherock.com',
      mainImage: {
        desktop: 'https://picsum.photos/1200/628?random=14',
        mobile: 'https://picsum.photos/322/498?random=14',
        alt: 'Crossing The Rock - Main view'
      },
      gallery: [
        {
          desktop: 'https://picsum.photos/1055/693?random=13',
          mobile: 'https://picsum.photos/322/498?random=13',
          alt: 'Crossing The Rock  - Interior view'
        },
        {
          desktop: 'https://picsum.photos/579/407?random=14',
          mobile: 'https://picsum.photos/322/498?random=14',
          alt: 'Crossing The Rock - Villa exterior'
        },
        {
          desktop: 'https://picsum.photos/698/490?random=15',
          mobile: 'https://picsum.photos/322/498?random=15',
          alt: 'Crossing The Rock - Pool area'
        },
        {
          desktop: 'https://picsum.photos/698/490?random=16',
          mobile: 'https://picsum.photos/322/498?random=16',
          alt: 'Crossing The Rock - Sea view'
        },
        {
          desktop: 'https://picsum.photos/579/407?random=17',
          mobile: 'https://picsum.photos/322/498?random=17',
          alt: 'Crossing The Rock - Master bedroom'
        },

      ]
    },
    {
      name: 'Crossing The Sea',
      description: 'Family sailing',
      location: 'Mediterranean Sea',
      website: 'https://www.crossing-the-sea.com',
      mainImage: {
        desktop: 'https://picsum.photos/1200/628?random=19',
        mobile: 'https://picsum.photos/322/498?random=19',
        alt: 'Crossing The Sea - Main view'
      },
      gallery: [
        {
          desktop: 'https://picsum.photos/1055/693?random=20',
          mobile: 'https://picsum.photos/322/498?random=20',
          alt: 'Crossing The Sea - Interior view'
        },
        {
          desktop: 'https://picsum.photos/579/407?random=21',
          mobile: 'https://picsum.photos/322/498?random=21',
          alt: 'Crossing The Sea - Villa exterior'
        },
        {
          desktop: 'https://picsum.photos/698/490?random=22',
          mobile: 'https://picsum.photos/322/498?random=22',
          alt: 'Crossing The Sea - Pool area'
        },
        {
          desktop: 'https://picsum.photos/698/490?random=23',
          mobile: 'https://picsum.photos/322/498?random=23',
          alt: 'Crossing The Sea - Sea view'
        },
        {
          desktop: 'https://picsum.photos/579/407?random=24',
          mobile: 'https://picsum.photos/322/498?random=24',
          alt: 'Crossing The Sea - Master bedroom'
        },

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
        desktop: 'https://picsum.photos/800/510?random=5',
        mobile: 'https://picsum.photos/400/255?random=5',
        alt: 'Crossing Condotti & Corso - Main view'
      }
    },
    {
      name: 'Crossing Manzoni',
      location: 'Milan',
      website: 'https://www.crossingmanzoni.it',
      mainImage: {
        desktop: 'https://picsum.photos/800/510?random=1',
        mobile: 'https://picsum.photos/400/255?random=1',
        alt: 'Crossing Manzoni - Main view'
      }
    },

    {
      name: 'Crossing The Rock',
      location: 'Sicily',
      website: 'https://www.crossingtherock.com',
      mainImage: {
        desktop: 'https://picsum.photos/800/510?random=14',
        mobile: 'https://picsum.photos/400/255?random=14',
        alt: 'Crossing The Rock - Main view'
      }
    },
    {
      name: 'Crossing The Sea',
      location: 'Mediterranean Sea',
      website: 'https://www.crossing-the-sea.com',
      mainImage: {
        desktop: 'https://picsum.photos/800/510?random=19',
        mobile: 'https://picsum.photos/400/255?random=19',
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
        title: 'Concept',
        summary: 'A stay with Crossing is all about relaxing into the <em>comfort of elegance</em>, <em>design</em> and <em>assiduous concierge service</em> to elevate each day. Let us sweep you off your feet with Italian lifestyle and hospitality. <em>Buona vacanza</em>!',
        body: 'Crossing Collection is an Italian boutique property group with a splash of mediterranean yachting for good measure.<br><br>Simply put, we own and operate two boutique accommodations in Milan and Rome, a luxury villa in Sicily and a premium yachting holiday experience with routes in Greece and Italy.<br><br>Our enterprise is the result of a lifetime passion for iconic design and contemporary art, a surplus of heirloom furniture pieces - that seemed a shame to leave in storage - and an eternal wanderlust fuelling a curiosity and passion to meet and host cosmopolitan travellers from all over the world.'
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
        body: 'Our city properties are defined by their prestigious locations, in person concierge service and plush interiors.<br><br><strong>Crossing Manzoni</strong> is (literally!) right around the corner from Milan\'s coveted fashion mecca that is Via Montenapoleone, and a few meters down the road from the opera house La Scala where Verdi and Puccini once debuted their works.<br><br><strong>Crossing Condotti</strong> in Rome is nestled between the infamous Spanish Steps (seen in more campaigns, films and magazines than we could possible list here!) and the luxury boutique shopping street Via dei Condotti.<br><br>The <strong>Sicily villa</strong> is a family or group holiday sanctuary, located directly on the coastline between Catania and Taormina, with its own private gardens, pool and butler service.<br><br>The <strong>private yacht experiences</strong> are like floating boutique hotels where guests define as they please, from customising bespoke itineraries to picking out the menus featuring Italian ingredients which we transport down to Greece for Sporades departures'
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
            desktop: 'https://picsum.photos/460/618?random=801',
            mobile: 'https://picsum.photos/322/498?random=801',
            alt: 'Art & Design - Contemporary artwork'
          },
          {
            desktop: 'https://picsum.photos/320/618?random=802',
            mobile: 'https://picsum.photos/322/498?random=802',
            alt: 'Art & Design - Designer furniture'
          },
          {
            desktop: 'https://picsum.photos/520/618?random=803',
            mobile: 'https://picsum.photos/322/498?random=803',
            alt: 'Art & Design - Interior details'
          },
          {
            desktop: 'https://picsum.photos/460/618?random=804',
            mobile: 'https://picsum.photos/322/498?random=804',
            alt: 'Art & Design - Family heirlooms'
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
            description: 'Alfio and Carlotta and are the visionary owners behind Crossing Collection. Alfio, a proud Sicilian, is the perfect host. His warmth and hospitality can be felt wherever you stay - at their boutique city properties, villa, or the yacht. His love for both the familiar and the unknown shapes the Crossing Collection offering, making each stay a journey in itself. He is the brain behind the books, he takes care of the finance, accounting and administration of each property and the group as a whole. It is thanks to his business acumen and finesse that the group has grown into the collection of properties and holiday experiences that it is today.'
          },
          {
            name: 'Carlotta',
            role: 'Owner',
            description: 'Carlotta, a lawyer who always felt her calling lay more in contemporary art and interior design, has an eye for iconic pieces that elevate any space. Crossing Condotti in Rome was her first serious foray into architecture and interior design. With that she found her way to her passion, and has never looked back! From lighting to bespoke furniture and artisanal carpentry, she brings a sophisticated, modern touch to each of their properties. Through a carefully curated mix of colours and textures, she creates environments that exude class, style, and an unexpected elegance, making each space both timeless and inviting.'
          },
          {
            name: 'Francesca',
            role: 'Brand Specialist, Crossing Collection, Milan',
            description: 'Francesca is our multi-talented Brand Specialist in the corporate office in Milan. Her brilliant organisation skills allow her to execute all manner of tasks including office management, occasional back-up concierge support, hiring, and marketing. Francesca loves a challenge and has plenty come her way while keeping things running smoothly behind the scenes. She has been with us for going on ten years and has always proven herself to be a key support staff member for our leadership team to count on.'
          },
          {
            name: 'Gérald',
            role: 'Front Manager and Concierge at Crossing Condotti, Rome',
            description: 'Gérald has a work ethic from time\'s past that is so rare to find, he takes care of guests in Rome with great elegance. A genuine passion for service, performed with discretion and class await those who check in and stay with us in Rome. Gérald\'s hosting skills are defined by his dedication to the client and conscientious execution of tasks. With a knack for finding those hidden treasures around town, Gérald\'s got a list of local secrets that go beyond the typical tourist path. Forget automated replies---at Crossing Condotti, it\'s all about the personal touch.'
          },
          {
            name: 'Francesco',
            role: 'Front Manager and Concierge at Crossing Condotti, Rome',
            description: 'Francesco is a breath of fresh air, warmly inviting guest to make themselves at home. The key components of his role as concierge are suggestions, reservations and overall management of requests. Francesco takes great joy in thinking up creative and exciting ideas and planning with clients. We all appreciate his sunny disposition and ability to think fast on his feet.'
          },
          {
            name: 'Sean',
            role: 'Front Manager and Concierge at Crossing Manzoni, Milan',
            description: 'Sean is our Milanese expert who manages reservations and requests with gusto. Whether you need a taxi, a last-minute dinner spot, or a secret shopping gem, Sean\'s your go to. From the moment you arrive, he\'ll greet you and make sure that you have everything you need to feel right at home. He quickly understands each guest\'s needs and always goes that extra mile make sure preparations are just right. Sean\'s here to make your experience unforgettable, with warmth and personality in every little detail.'
          },
          {
            name: 'Sabrina',
            role: 'Front Manager and Concierge at Crossing Manzoni, Milan',
            description: 'Sabrina looks after guests and reservation requests with great care, ensuring that everything is in place for a flawless stay. With a natural flair for elegance, Sabrina adds a touch of sophistication and style to her work, blending her professional skills with a warm, welcoming approach. Whether it\'s arranging transport, booking the perfect dinner, or curating personalized recommendations, Sabrina\'s attention to detail always shines through. She brings a thoughtful, refined charm to everything she does, so that you feel not just taken care of---but truly looked after.'
          },
          {
            name: 'Fatima & Gina',
            role: 'Housekeepers, Rome',
            description: 'From the door handle at the entranceway to the hidden corner behind the curtain, Fatima and Gina keep tabs on every nook and cranny of our boutique to make sure it is always extremely clean and tidy. Legend has it that Fatima and Gina take housekeeping to a new level, and it is proven in the guest comments online which consistently remain at 9.7 for cleanliness.'
          },
          {
            name: 'Kelly & Melissa',
            role: 'Housekeepers, Milan',
            description: 'Kelly and Melissa are the dynamic duo guaranteeing every corner, cushion, and crevice is in perfect order. They meticulously work to preserve the cleanliness of the entire property. Their commitment to maintaining a welcoming, polished environment ensures that your stay is as comfortable as it is immaculate---always leaving you with the sense that no detail has been overlooked.'
          },
          {
            name: 'Flavia',
            role: 'House Master, Sicily',
            description: 'Flavia is the House Master at Crossing the Rock and a true embodiment of Sicilian hospitality. With a deep-rooted passion for her island and its traditions, she brings the warm, welcoming spirit of Sicily with her everywhere she goes. As House Master, she oversees the staff to ensure everything runs seamlessly. Discreet yet attentive, she\'s committed to making your time at the villa effortless and memorable.'
          },
          {
            name: 'Alfio',
            role: 'Breakfast Butler, Sicily',
            description: 'Alfio is the butler at Crossing the Rock, bringing years of experience in the hospitality industry to create a unique and memorable stay for everyone. Each day, he handpicks the freshest local produce at the market, so that only the best ingredients are used to prepare and serve a delicious breakfast. With his extensive background and sunny disposition, Alfio doesn\'t just serve meals---he crafts a moment of comfort and care. Attentive and professional, Alfio\'s breakfasts make every morning at Crossing the Rock a good morning.'
          },
          {
            name: 'Cettina',
            role: 'Housekeeper, Sicily',
            description: 'Cettina is the force behind the impeccable cleanliness of Crossing the Rock. She ensures every corner of the villa, from top to bottom, is spotless and perfectly maintained. Whether she\'s changing guest linens, or giving the entire property its daily clean, Cettina works tirelessly to keep the villa pristine. Known for her attentive methodical ways, she deep cleans in the winter season, even dusting the books one by one, making sure nothing is overlooked.'
          },
          {
            name: 'Roberto',
            role: 'Groundskeeper, Sicily',
            description: 'Roberto is the hardworking groundskeeper at Crossing the Rock where he manages the entire outdoor space, keeping it pristine and always welcoming. Each day, he\'s up before sunrise, tending to the garden and meticulously maintaining every corner of the property. Whether it\'s tidying up, removing leaves and twigs, or checking that the pool is sparkling with regular water changes, Roberto\'s care and precision never waver.'
          },
          {
            name: 'Emanuele',
            role: 'Skipper - Captain, Crossing the Sea',
            description: 'Emanuele is the skipper and captain of our boutique yacht holiday at Crossing the Sea, tasked with making every journey safe, enjoyable, and unforgettable. With decades of competitive sailing and ocean crossings under his belt, Emanuele\'s skill on the water is exceptional. Always cautious and meticulous, he studies the winds and sea conditions before setting sail, devising routes to guarantee the utmost safety and comfort for guests. Beyond his technical expertise, Emanuele\'s creativity shines when it comes to guest enjoyment. When the kids\' club is not in session, he takes time to engage with younger guests, crafting treasure maps and organising Robinson Crusoe-style picnics on land, turning each day on board into a thrilling adventure. He brings the perfect blend of adventure, skill, and care.'
          },
          {
            name: 'Francesca',
            role: 'Stewardess, Crossing the Sea',
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
        title: 'PROUD OF BEING CHOSEN BY'
      }
    },
  ]
})

export const mutations = {
  // Mutations per il modal di navigazione
  SET_MODAL_OPEN(state, isOpen) {
    state.modalOpen = isOpen
  },

  TOGGLE_MODAL(state) {
    state.modalOpen = !state.modalOpen
  },

  // Mutations per il modal delle locations
  SET_LOCATIONS_MODAL_OPEN(state, isOpen) {
    state.locationsModalOpen = isOpen
  },

  TOGGLE_LOCATIONS_MODAL(state) {
    state.locationsModalOpen = !state.locationsModalOpen
  }
}

export const actions = {
  // Actions per il modal di navigazione
  openModal({ commit }) {
    commit('SET_MODAL_OPEN', true)
  },

  closeModal({ commit }) {
    commit('SET_MODAL_OPEN', false)
  },

  toggleModal({ commit }) {
    commit('TOGGLE_MODAL')
  },

  // Actions per il modal delle locations
  openLocationsModal({ commit }) {
    commit('SET_LOCATIONS_MODAL_OPEN', true)
  },

  closeLocationsModal({ commit }) {
    commit('SET_LOCATIONS_MODAL_OPEN', false)
  },

  toggleLocationsModal({ commit }) {
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
