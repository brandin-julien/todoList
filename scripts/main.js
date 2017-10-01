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
        },

        filters: {
            pluralize: function (word, nb){
                return nb > 1 ? word + "s" : word;
            }
        },

        computed: {
            remainingComputed: function () {
                return this.tasks.filter(task => task.isDone).length;
            }
        }

    });

}