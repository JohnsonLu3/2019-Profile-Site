import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    dim;

  constructor() { }

  ngOnInit() {
    
    this.dim = document.getElementById("dim");
    this.dim.addEventListener("click", function(){
            document.getElementById("sidenav").classList.add("close");
            document.getElementById("dim").classList.remove("dimOn");
        });
  }

}
