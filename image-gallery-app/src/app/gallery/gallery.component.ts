import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  imageUrl!: string;

  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.loadRandomImage();
  }

  changeImage() {
    this.loadRandomImage();
  }

  private loadRandomImage() {
    this.imageService.getRandomImage()
      .subscribe(
        (data: any) => {
          this.imageUrl = data.message;
        },
        (error) => {
          console.error('Error:', error);
          alert('Oops, something went wrong!');
        }
      );
  }
}
