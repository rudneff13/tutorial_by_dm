let state = {

    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Jarlaxle'},
            {id: '2', name: 'Entrery'},
            {id: '3', name: 'Pwent'},
            {id: '4', name: 'Brenor'},
            {id: '5', name: 'Drizzt'},
        ],
        messages: [
            {id: '1', message: 'Hey'},
            {id: '2', message: 'Ho'},
            {id: '3', message: 'Ho'},
            {id: '4', message: 'Ho'},
            {id: '5', message: 'Lets go!'},
        ],
        avatars: [{
            id: '1',
            img: 'https://wow.zamimg.com/uploads/screenshots/normal/661518-battle-net-avatars.jpg',
            self: true
        },
            {id: '2', img: 'http://s44.radikal.ru/i103/1302/d0/e4833d6b48e4.jpg', self: false},
            {id: '3', img: 'https://avatarko.ru/img/kartinka/7/igra_fantastika_kapyushon_6918.jpg', self: false},
            {id: '4', img: 'https://i.pinimg.com/originals/2d/f0/ba/2df0baf2f31883b9ea0449a0bb31aed8.jpg', self: false},
            {
                id: '5',
                img: 'https://prikolnye-kartinki.ru/img/picture/Oct/23/2bf7a93362c2c17f2783a0d4b50d0993/8.jpg',
                self: false
            },
            {
                id: '6',
                img: 'https://wow.zamimg.com/uploads/screenshots/normal/661513-battle-net-avatars.jpg',
                self: false
            },
        ]
    },

    profilePage: {
        posts: [
            {id: '1', message: 'Sup, pal?', likesCount: '16'},
            {id: '2', message: 'Check this out!', likesCount: '25'},
        ],
    },

    sidebar: {
        friends: [
            {id: '2', name: 'Entrery', img: 'http://s44.radikal.ru/i103/1302/d0/e4833d6b48e4.jpg'},
            {id: '3', name: 'Pwent', img: 'https://avatarko.ru/img/kartinka/7/igra_fantastika_kapyushon_6918.jpg'},
            {id: '4', name: 'Brenor', img: 'https://i.pinimg.com/originals/2d/f0/ba/2df0baf2f31883b9ea0449a0bb31aed8.jpg'},
        ]
    }

};


export let addPost = (postMessage) => {
    let newPost = {
        id: '3',
        message: postMessage,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
}

export default state;