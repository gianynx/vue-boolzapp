const {createApp} = Vue;
const contacts = [
    {
        id:1,
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        lastAccess: '03:50 PM',
        messages: [
            {
                date: '03:30 PM',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '03:50 PM',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '04:15 PM',
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
        lastAccess: '04:35 PM',
        messages: [
            {
                date: '04:30 PM',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '04:30 PM',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '04:35 PM',
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
        lastAccess: '10:20 AM',
        messages: [
            {
                date: '10:10 AM',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '10:20 AM',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '04:15 PM',
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
        lastAccess: '03:30 PM',
        messages: [
            {
                date: '03:30 PM',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '03:50 PM',
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
        lastAccess: '03:30 PM',
        messages: [
            {
                date: '03:30 PM',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '03:50 PM',
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
        lastAccess: '03:51 PM',
        messages: [
            {
                date: '03:30 PM',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '03:50 PM',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '03:51 PM',
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
        lastAccess: '03:30 PM',
        messages: [
            {
                date: '03:30 PM',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '03:50 PM',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        id:8,
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        lastAccess: '03:50 PM',
        visible: true,
        messages: [
            {
                date: '03:30 PM',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '03:50 PM',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '03:51 PM',
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
            selectedItem: 0,
            chatMessage: '',
            contactSearch: '',
            showElement: false
        };
    },
    methods: {
        filteredContacts() {
            contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(this.contactSearch.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                };
            });
        },
        showArrow() {
            this.showElement = true;
        },
        send() {
            const newMessage = {
                date: new Date(2023, 4, 4),
                message: this.chatMessage,
                status: 'sent'
            };
            newMessage.date = newMessage.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            this.contacts[this.selectedItem].messages.push(newMessage);
            this.chatMessage = '';
            const responseMessage = {
                date: new Date(2023, 4, 4),
                message: 'Okay',
                status: 'received'
            };
            responseMessage.date = responseMessage.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            setTimeout(() => {
                this.contacts[this.selectedItem].messages.push(responseMessage);
                this.$nextTick(() => {
                    this.$refs.items[this.$refs.items.length - 1].scrollIntoView();
                });
            }, 1000);
        }
    }
}).mount('#app');