import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  nome: string = '';
  user: string = '';

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  setForm() {
    localStorage.setItem("nome", this.nome);
    localStorage.setItem("user", this.user);
    this.routes.navigate(["/home"]);

  }
}
