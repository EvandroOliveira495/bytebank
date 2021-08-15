import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTranferenciaComponent {

  @Output() aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) { }

  transferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(`deu certo: ${resultado}`);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.error(error));

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
