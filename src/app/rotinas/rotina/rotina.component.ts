import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Rotina } from 'src/app/app.model';
import { RotinasService } from '../rotinas.service';

@Component({
  selector: 'app-rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.scss']
})
export class RotinaComponent implements OnInit {
  @Input() rotina: Rotina;
  @Output() atualizar = new EventEmitter<string>();
  descricao = new FormControl('', Validators.required);

  constructor(private service: RotinasService) { }

  ngOnInit(): void {
    setTimeout(() => this.descricao.setValue(this.rotina.descricao));
  }
  
  alterar(): void {
    this.service.update({...this.rotina, descricao: this.descricao.value}).subscribe(
      () => this.atualizar.emit()
    );
  }

  apagar():void {
    this.service.delete(this.rotina.id).subscribe(() => this.atualizar.emit());
  }
}
