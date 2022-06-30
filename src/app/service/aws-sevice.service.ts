import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class AwsSeviceService {

  bucket = new S3({
    accessKeyId: 'YOUR-ACCESS-KEY-ID',
    secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
    region: 'YOUR-REGION',
  });

  constructor() {
    console.log('AWS Service Initialized');
  }

  log() {
    console.log('log');
  }
  
  upload(file: File) {
    const params = {
      Bucket: 'YOUR-BUCKET-NAME',
      Key: 'YOUR-FILE-NAME',
      Body: file,
    };
    return this.bucket.upload(params).promise();
  }
}
