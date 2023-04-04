const {createApp} = Vue;
const contacts = [
    {
        id:1,
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        lastAccess: '15:50',
        messages: [
            {
                date: '15:30',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        id:2,
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        lastAccess: '16:35',
        messages: [
            {
                date: '16:30',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '16:30',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '16:35',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        id:3,
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        lastAccess: '10:20',
        messages: [
            {
                date: '10:10',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '10:20',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '16:15',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        id:4,
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        lastAccess: '15:30',
        messages: [
            {
                date: '15:30',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        id:5,
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        lastAccess: '15:30',
        messages: [
            {
                date: '15:30',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        id:6,
        name: 'Claudia',
        avatar: './img/avatar_5.jpg',
        visible: true,
        lastAccess: '15:51',
        messages: [
            {
                date: '15:30',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '15:51',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        id:7,
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        lastAccess: '15:30',
        messages: [
            {
                date: '15:30',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '15:50',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        id:8,
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        lastAccess: '15:50',
        visible: true,
        messages: [
            {
                date: '15:30',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '15:50',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '15:51',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
];

createApp({
    data() {
        return {
            contacts: contacts,
            selectedItem: 0
        };
    },
    methods: {
        // getLastMessage(index) {
        //     const lastMessage = this.contacts[index].messages.filter((e) => {
        //         return e.status === 'sent';
        //     });
        //     if (lastMessage.length > 0) {
        //         return lastMessage[lastMessage.length - 1].message;
        //     } else {
        //         return '';
        //     };
        // }
    }
}).mount('#app');