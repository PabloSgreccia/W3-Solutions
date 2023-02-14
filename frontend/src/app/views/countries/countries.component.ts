import { Component, ViewChild } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from "../../interfaces/country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent {

  countries: Country[] = []
  error!: string
  emptyResult: boolean = false
  @ViewChild('searchValue') searchValue: any; 

  constructor(
    private countriesService: CountriesService,
  ) { }

  filter(){   
    if(this.searchValue.nativeElement.value){
      this.error = ''
      this.emptyResult = false
      this.countries = []
      const value = this.searchValue.nativeElement.value
      
      this.countriesService.getFiveCountries(value).subscribe({
        next: (res) => {
          if (!res) {
            this.error = 'Debes ingresar al menos 3 caracteres'
          } else{
            if (res.countries.length) {
              this.countries = res.countries
            } else{
              this.emptyResult = true
            }
          }
        },
        error: (err) => {
          this.error = 'Ocurrió un error al cargar datos'
        }
    })
    } else{
      this.error = 'Debe ingresar un texto'
    }

  }

}
