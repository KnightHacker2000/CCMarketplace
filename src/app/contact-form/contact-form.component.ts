import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private router: Router) { }

  onGoToSummary() {
    this.router.navigate(['/summary']);
  }

  ngOnInit(): void {
  }

}
