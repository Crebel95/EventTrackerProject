import { Component, OnInit } from '@angular/core';
import { Campsite } from 'src/app/models/campsite';
import { CampsiteService } from 'src/app/services/campsite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  campsiteList: Campsite[] = [];
  selected: Campsite | null = null;
  newCampsite: Campsite = new Campsite();
  editCampsite: Campsite | null = null;

  constructor(private campsiteService: CampsiteService) {}

  ngOnInit(): void {
    this.loadCampsites();
  }

  displayTable(): void {
    this.selected = null;
  }

  setEditCampsite(): void {
    this.editCampsite = Object.assign({}, this.selected);
  }

  loadCampsites() {
    this.campsiteService.index().subscribe({
      next: (siteList) => {
        this.campsiteList = siteList;
      },
      error: (err) => {
        console.error('HomeComponent.');
        console.error(err);
      },
    });
  }

  displayCampsite(campsite: Campsite): void {
    this.selected = campsite;
  }

  addCampsite(campsite: Campsite) {
    this.campsiteService.create(campsite).subscribe({
      next: (createdCampsite) => {
        this.newCampsite = new Campsite();
        // this.reload();
      },
      error: (err) => {
        console.error(
          'CampsiteComponent.addCampsite(): error creating campsite'
        );
        console.error(err);
      },
    });
  }

  updateCampsite(campsite: Campsite, goToDetails: boolean = true): void {
    this.campsiteService.update(campsite).subscribe({
      next: (updatedCampsite) => {
        if (goToDetails) {
          this.selected = updatedCampsite;
        }
        this.editCampsite = null;
        // this.reload();
      },
      error: (err) => {
        console.error("CampsiteComponent.updateCampsite(): error on update");
        console.error(err);
      },
    });
  }

  deleteCampsite(id: number) {
    this.campsiteService.destroy(id).subscribe({
      next: () => {
        // this.reload();
      },
      error: (err) => {
        console.error("CampsiteComponent.deleteCampsite(): error deleting");
        console.error(err);
      },
    });
  }

}
