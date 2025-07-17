import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchResult, Search } from '../../model/model';
import { SearchService } from '../../service/search';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  templateUrl: './search-result.html',
  styleUrls: ['./search-result.css'], // Fixed `styleUrl` to `styleUrls`
  imports: [RouterLink] // Importing RouterLink for navigation
})
export class SearchResult {
  searchObj: Search = new Search();
  searchData: ISearchResult[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, // Properly injecting ActivatedRoute
    private searchService: SearchService // Properly injecting SearchService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.searchObj.fromlocationId = params.from;
      this.searchObj.tolocationId = params.to;
      this.searchObj.date = params.date;
      this.getSearchResult();
    });
  }

  getSearchResult() {
    this.searchService.searchBus(this.searchObj.fromlocationId, this.searchObj.tolocationId, this.searchObj.date)
      .subscribe((params: any) => {
        this.searchData = params;
      });
  }
}