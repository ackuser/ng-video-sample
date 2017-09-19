import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    @ViewChild('hardwareVideo') hardwareVideo: any;

    video: any;

    constructor() { }

    ngOnInit() {
        this.video = this.hardwareVideo.nativeElement;
    }

    ngAfterViewInit(){
    }

    videoStart(){
        var n = <any>navigator;

        n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

        // NOTE: For Video + Audio
        n.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
    }
    videoStop(){
        // debugger
        this.video.pause();
        this.video.src = '';


        // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
        //   mediaStream.stop();
        // debugger
        // or
        //   mediaStream.getAudioTracks()[0].stop();
        //   mediaStream.getVideoTracks()[0].stop();
        //     video.src = window.URL.createObjectURL(stream);
        //     video.play();

    }

}
