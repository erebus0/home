import { Component, OnInit, Input } from '@angular/core';
import { CompoundService } from '../service/compound.service';
import { ActivatedRoute } from '@angular/router';
import { Compound } from '../models/compound.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  compound: Compound;
  cToken: string = "cDai";
  address: string = "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643";

  @Input() form!: FormGroup

  constructor(private compoundService: CompoundService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  getTokenBalance(cToken, address) {
    this.compoundService.getTotalBalance(cToken, address).subscribe((compound: Compound) => {
      this.compound = compound;
      console.log(compound);
    });
  }

}
