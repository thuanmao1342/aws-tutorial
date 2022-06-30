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
    region: 'ap-southeast-1',
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

  fileUpload(file: File) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAABCDEFGHIJ7M2',
      secretAccessKey: 'PvgIV3Nq1aPBwxxxxxxxxyyyyyyyyzzzzijNn',
      region: 'ap-south-1',
    });
    const params = {
      Bucket: 'gajstore',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('EROOR: ', JSON.stringify(err));
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }
}
