{
    'use strict';

    new Vue({
        el:'main#app',

        data: {
            tasks : [
                { title: "Tache 1 " , isDone: true },
                { title: "Tache 2 " , isDone: true },
                { title: "Tache 3" , isDone: false },
            ],
        }

    });

}