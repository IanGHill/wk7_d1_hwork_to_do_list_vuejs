import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        tasks: [
            {name: "Grocery shopping", isPriority: true},
            {name: "Declutter wardrobe", isPriority: false},
            {name: "Do homework", isPriority: true}

        ],
        newTaskName: "",
        pickedPriority: "low"

    },
    methods: {
        saveNewTask: function(){
            
            if (this.pickedPriority === "high"){
                this.pickedPriority = true;
            } else {
                this.pickedPriority = false;
            };

            this.tasks.push(
                {name: this.newTaskName, 
                isPriority: this.pickedPriority}
            );
            this.newTaskName = "";
            this.pickedPriority = "low";
        }
  }
  });
});
