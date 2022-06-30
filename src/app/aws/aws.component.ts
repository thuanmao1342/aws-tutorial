import { Component, OnInit } from '@angular/core';
import { AwsSeviceService } from '../service/aws-sevice.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {

  constructor(private awsSeviceService: AwsSeviceService) {}

  ngOnInit(): void {
  }

  onClick() {
    console.log('clicked', this.awsSeviceService.log());
  }
}
