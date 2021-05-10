const app = Vue.createApp({
  data() {
    return {
      image: "",
      correctopt: "",
      options: [],
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: "",
      displaybtn: "",
      displayoptions: "",
      opt1resultstyle: "",
      opt2resultstyle: "",
      opt3resultstyle: "",
      opt4resultstyle: "",
      clicked: false,
      livesstyle: ["", "", ""],
      livesanimate:['','',''],
      lives: 3,
      score: 0,
      nextbtn: "",
    };
  },
  methods: {
    startgame() {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          var selected = data[Math.floor(Math.random() * 191)];
          this.image = selected.flag;
          this.correctopt = selected.name;
          this.options[0] = this.correctopt;
          this.options[1] = data[Math.floor(Math.random() * 191)].name;
          this.options[2] = data[Math.floor(Math.random() * 191)].name;
          this.options[3] = data[Math.floor(Math.random() * 191)].name;
          var index = Math.floor(Math.random() * 4);
          this.opt1 = this.options[index];
          this.options.splice(index, 1);
          index = Math.floor(Math.random() * 3);
          this.opt2 = this.options[index];
          this.options.splice(index, 1);
          index = Math.floor(Math.random() * 2);
          this.opt3 = this.options[index];
          this.options.splice(index, 1);
          index = Math.floor(Math.random() * 1);
          this.opt4 = this.options[index];
          this.options.splice(index, 1);
        });
      this.nextbtn='none'
      this.displaybtn = "none";
      this.displayoptions = "block";
      this.clicked = false;
      this.opt1resultstyle =  ""
      this.opt2resultstyle =  ""
      this.opt3resultstyle =  ""
      this.opt4resultstyle =  ""


    },
    opt1clicked() {
      console.log(document.getElementById("opt1txt").innerHTML);
      if (!this.clicked && this.lives>0) {
        this.clicked = true;
        this.nextbtn='block'
        if (document.getElementById("opt1txt").innerHTML == this.correctopt) {
          console.log("yess");
          this.opt1resultstyle = "rgb(5, 151, 5)";
          this.score++
        } else {
          console.log("no");
          this.livesstyle[0] = "rgb(218, 218, 218)";
          this.livesstyle[1] = "lost 600ms infinite";
          this.opt1resultstyle = "rgb(151, 5, 5)";
          this.lives--;
          if (this.lives == 3) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] = "";
          } else if (this.lives == 2) {
            this.livesstyle[0] = "rgb(190, 190, 190)";
            this.livesanimate[0]="lost 400ms 1 ease-in-out"
          } else if (this.lives == 1) {
            this.livesstyle[0] = this.livesstyle[1] = "rgb(190, 190, 190)";
            this.livesanimate[0]=this.livesanimate[1]="lost 400ms 1 ease-in-out"

          } else if (this.lives == 0) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] =
              "rgb(190, 190, 190)";
              this.livesanimate[0]=this.livesanimate[1]=this.livesanimate[2]="lost 400ms 1 ease-in-out"

          }
          if(this.lives<=0)
          {
            this.nextbtn='none'
            alert("Game Over \n Score : " + this.score + "\n Better Luck Next Time :)")
          }

        }
      }
    },
    opt2clicked() {
      console.log(document.getElementById("opt2txt").innerHTML);
      if (!this.clicked && this.lives>0) {
        this.clicked = true;
        this.nextbtn='block'
        if (document.getElementById("opt2txt").innerHTML == this.correctopt) {
          console.log("yess");
          this.score++
          this.opt2resultstyle = "rgb(5, 151, 5)";
        } else {
          console.log("no");
          this.livesstyle[0] = "rgb(218, 218, 218)";
          this.livesstyle[1] = "lost 600ms infinite";
          this.opt2resultstyle = "rgb(151, 5, 5)";
          this.lives--;
          if (this.lives == 3) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] = "";
          } else if (this.lives == 2) {
            this.livesstyle[0] = "rgb(190, 190, 190)";
          } else if (this.lives == 1) {
            this.livesstyle[0] = this.livesstyle[1] = "rgb(190, 190, 190)";
          } else if (this.lives == 0) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] =
              "rgb(190, 190, 190)";
          }
          if(this.lives<=0)
          {
            this.nextbtn='none'
            alert("Game Over \n Score : " + this.score + "\n Better Luck Next Time :)")
          }

        }
      }
    },
    opt3clicked() {
      console.log(document.getElementById("opt3txt").innerHTML);
      if (!this.clicked && this.lives>0) {
        this.clicked = true;
        this.nextbtn='block'
        if (document.getElementById("opt3txt").innerHTML == this.correctopt) {
          console.log("yess");
          this.score++
          this.opt3resultstyle = "rgb(5, 151, 5)";
        } else {
          console.log("no");
          this.livesstyle[0] = "rgb(218, 218, 218)";
          this.livesstyle[1] = "lost 600ms infinite";
          this.opt3resultstyle = "rgb(151, 5, 5)";
          this.lives--;
          if (this.lives == 3) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] = "";
          } else if (this.lives == 2) {
            this.livesstyle[0] = "rgb(190, 190, 190)";
          } else if (this.lives == 1) {
            this.livesstyle[0] = this.livesstyle[1] = "rgb(190, 190, 190)";
          } else if (this.lives == 0) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] =
              "rgb(190, 190, 190)";
          }
          if(this.lives<=0)
          {
            this.nextbtn='none'
            alert("Game Over \n Score : " + this.score + "\n Better Luck Next Time :)")
          }

        }
      }
    },
    opt4clicked() {
      console.log(document.getElementById("opt4txt").innerHTML);
      if (!this.clicked && this.lives>0) {
        this.clicked = true;
        this.nextbtn='block'

        if (document.getElementById("opt4txt").innerHTML == this.correctopt) {
          console.log("yess");
          this.score++
          this.opt4resultstyle = "rgb(5, 151, 5)";
        } else {
          console.log("no");
          this.livesstyle[0] = "rgb(218, 218, 218)";
          this.livesstyle[1] = "lost 600ms infinite";
          this.opt4resultstyle = "rgb(151, 5, 5)";
          this.lives--;
          if (this.lives == 3) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] = "";
          } else if (this.lives == 2) {
            this.livesstyle[0] = "rgb(190, 190, 190)";
          } else if (this.lives == 1) {
            this.livesstyle[0] = this.livesstyle[1] = "rgb(190, 190, 190)";
          } else if (this.lives == 0) {
            this.livesstyle[0] = this.livesstyle[1] = this.livesstyle[2] =
            "rgb(190, 190, 190)";
          }
          if(this.lives<=0)
          {
            this.nextbtn='none'
            alert("Game Over \n Score : " + this.score + "\n Better Luck Next Time :)")
          }
        }
      }
    },
  },
});

app.mount(".page");
