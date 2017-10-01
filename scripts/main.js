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
            task: ""
        },

        filters: {
            pluralize: function (word, nb){
                return nb > 1 ? word + "s" : word;
            }
        },

        methods:{
            updateIsDone: function(taskNumber){
                this.tasks[taskNumber] = false;
            },

            addTask: function (str) {

                this.tasks.push(
                    {
                        title: str,
                        isDone: false
                    }
                );
            },

            deleteTask: function (index) {
                this.tasks.splice(index,1);
            }
        },

        computed: {
            remainingComputed: function () {
                return this.tasks.filter(task => task.isDone).length;
            }
        }

    });

}