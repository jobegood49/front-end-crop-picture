// import { Component } from '@angular/core';
// import component, ElementRef, input and the oninit method from angular core
import { Component, OnInit, ElementRef, Input } from '@angular/core';
// import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
// import the do function to be used with the http library.
import "rxjs/add/operator/do";
// import the map function to be used with the http library
import "rxjs/add/operator/map";
// const URL = 'http://localhost:3001/uploads';
const URL ='https://us-central1-photo-loader.cloudfunctions.net/api/uploads/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private img;
  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  // This is the default title property created by the angular cli. Its responsible for the app works

  ngOnInit() {
  }
  // declare a constroctur, so we can pass in some properties to the class, which can be    //accessed using the this variable
  constructor(private http: Http, private el: ElementRef) {

  }
  // the function which handles the file upload without using a plugin.
  upload() {
    // locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    // get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    // create a new fromdata instance
    let formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      // append the key name 'photo' with the first file in the element
      formData.append('photo', inputEl.files.item(0));
      // call the angular http method
      console.log('form data', formData);
      this.http
          // post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
          .post(URL, formData).map((res:Response) => res.json())
          // .catch(error => Observable.throw(error))
          .subscribe(
            data =>  {
              this.img = data.url;
              console.log(this.img);
            },
            error => console.log(error)
          )
    }
  }
}
